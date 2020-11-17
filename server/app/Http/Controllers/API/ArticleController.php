<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\CategoryBlog;
use App\Models\Comment;
use App\Models\Customer;
use App\Models\Tag;
use App\Models\TagBlog;
use App\Service\ApiCode;
use Exception;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
        /**
     * Display the specified resource.
     * Get blog // blog by cate // blog by tag // blog by search
     * @param  int  $cate_id
     * @return \Illuminate\Http\Response
     */

    public function show_blog(Request $request)
    {
        try{
            //get blog by cate
            if(!is_null($request->cateId)){
                $data = Blog::where('cate_id', $request->cateId)
                            ->orderBy('created_at', 'DESC')
                            ->orderBY('view', 'DESC')
                            ->paginate(5);
                return $this->respond($data);
            }

            //get blog by tag
            if(!is_null($request->tagId)){
                $id = $request->tagId;
                $data = Blog::whereHas('tags', function($query) use($id){
                    $query->where('tag_id', '=', $id);
                })->orderBy('created_at', 'DESC')
                    ->orderBY('view', 'DESC')
                    ->paginate(5);
                return $this->respond($data);
            }

            //get blog by search
            if(!is_null($request->key)){
                $data = Blog::where('title', 'LIKE', '%' .$request->key. '%')
                            ->orWhere('description', 'LIKE', '%' .$request->key. '%')
                            ->orderBy('created_at', 'DESC')
                            ->orderBY('view', 'DESC')
                            ->paginate(5);
                return $this->respond($data);
            }
            else{
                $data = Blog::join('category_blogs', 'category_blogs.id', '=', 'blogs.cate_id')
                            ->orderBy('created_at', 'DESC')
                            ->orderBY('view', 'DESC')
                            ->paginate(5 ,['blogs.*', 'category_blogs.name']);
                return $this->respond($data);
            }
        }
        catch(Exception $ex){
                return $this->respondWithError(ApiCode::ERROR_GET_DATA, 401);
        }
    }

    /**
     * Display the specified resource.
     * Get recent blog
     * @return \Illuminate\Http\Response
     */
    public function show_blog_recent()
    {
        try{
            
            $data = Blog::orderBy('created_at', 'DESC')->take(5)->get();
            return $this->respond($data);
        }
        catch(Exception $ex){
            return $this->respondWithError(ApiCode::ERROR_REQUEST, 402);
        }
    }
    /**
     * Display the specified resource.
     * Get blog by id
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show_detail($id)
    {
       try{
            $record = Blog::join('category_blogs', 'category_blogs.id', '=', 'blogs.cate_id')
                            ->where('blogs.id', '=', $id)
                            ->get(['blogs.*', 'category_blogs.name']);
            if(is_null($record)){
                return $this->respondNotFound(ApiCode::ERROR_GET_DATA);
            }
            return $this->respond($record);
       }
       catch(Exception $ex){
            return $this->respondWithError(ApiCode::ERROR_GET_DATA, 401);
       }
    }

    /**
     * Display the specified resource.
     * Get category blog
     * @return \Illuminate\Http\Response
     */
    public function show_category()
    {
        try{
            $data = CategoryBlog::join('blogs', 'blogs.cate_id', '=', 'category_blogs.id')
                        ->select('category_blogs.id', 'category_blogs.name')
                        ->selectRaw('sum(blogs.cate_id) as count_blog')
                        ->groupBy('category_blogs.id', 'category_blogs.name')
                        ->get();
            return $this->respond($data);
        }
        catch(Exception $ex){
            return $this->respondWithError(ApiCode::ERROR_GET_DATA, 401);
        }
    }
    /**
     * Display the specified resource.
     * Get tag blog
     * @return \Illuminate\Http\Response
     */
    public function show_tag()
    {
        try{
            $data = Tag::all();
            return $this->respond($data);
        }
        catch(Exception $ex){
            return $this->respondWithError(ApiCode::ERROR_GET_DATA, 401);
        }
    }



    /**
     * Display the specified resource.
     * Get blog by search 
     * @param string keys
     * @return \Illuminate\Http\Response
     */
    public function show_comment($blog_id)
    {
        try{
            $data = Comment::join('customers', 'comments.cus_id', '=', 'customers.id')
                            ->where('blog_id', '=', $blog_id)
                            ->get(['comments.*','customers.name', 'customers.phone_number', 'customers.email']);
            return $this->respond($data);
        }
        catch(Exception $ex){
            return $this->respondWithError(ApiCode::ERROR_REQUEST, 402);
        }
    }

    /**
     * Display the specified resource.
     * Get blog by search 
     * @param Request
     * @return \Illuminate\Http\Response
     */
    public function register_subscribe(Request $request)
    {
        try{
            $customer = Customer::where('email', '=', $request->email)->first();
            if(!is_null($customer)){
                $customer->type = true;
                $customer->save();
            }
            else{

                $dataset = new Customer([
                    'name' => 'A',
                    'phone_number' => '1',
                    'email' => $request->email,
                    'type' => true
                ]);
                
                $dataset->save();

            }
            return $this->respondWithSuccess(ApiCode::SUCCESS_NEWSLETTER);
        }
        catch(Exception $ex){
            return $this->respondWithError(ApiCode::ERROR_REQUEST, 402);
        }
    }

    /**
     * Display the specified resource.
     * Get blog by search 
     * @param Request
     * @return \Illuminate\Http\Response
     */
    public function comments(Request $request)
    {
        try{
            if($request->blog_id){
                $customer = Customer::where('email', '=', $request->email)->first();
                if(is_null($customer)){
                   Customer::create([
                       'name' => $request->name,
                       'phone_number' => $request->phone_number,
                       'email' => $request->email,
                       'type' => false
                   ]);

                   
                   $record = Customer::where([
                        'name' => $request->name,
                        'phone_number' => $request->phone_number,
                        'email' => $request->email,
                        'type' => false
                   ])->first();

                   if(!is_null($record)){

                        $comment = new Comment([
                            'content' => $request->content,
                            'status' => true,
                            'blog_id' => $request->blog_id
                        ]);
                       $record->comments()->save($comment);
                   }
                }
                else{
                    $comment = new Comment([
                        'content' => $request->content,
                        'status' => true,
                        'blog_id' => $request->blog_id
                    ]);
    
                    $customer->comments()->save($comment);
                }

                return $this->respondWithSuccess(ApiCode::SUCCESS_COMMENT);
            }
        }
        catch(Exception $ex){
            return $this->respondWithError(ApiCode::ERROR_REQUEST, 402);
        }
    }
}
