<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\CategoryBlog;
use App\Models\Comment;
use App\Models\Tag;
use App\Models\TagBlog;
use App\Service\ApiCode;
use Exception;
use Illuminate\Http\Request;


class BlogController extends Controller
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
            //get all blog
            if($request->type == "all"){
                $data = Blog::join('category_blogs', 'category_blogs.id', '=', 'blogs.cate_id')
                            ->orderBy('view', 'desc')
                            ->paginate(5 ,['blogs.*', 'category_blogs.name']);
                return $this->respond($data);
            }

            //get blog by cate
            if($request->type == "cate"){
                $data = Blog::where('cate_id', $request->id)->paginate(5);
                return $this->respond($data);
            }

            //get blog by tag
            if($request->type == "tag"){
                $id = $request->id;
                $data = Blog::whereHas('tags', function($query) use($id){
                    $query->where('tag_id', '=', $id);
                })->orderBy('view', 'desc')->paginate(5);
                return $this->respond($data);
            }

            //get blog by search
            if($request->type == "search"){
                $data = Blog::where('title', 'LIKE', '%' .$request->id. '%')
                            ->orWhere('description', 'LIKE', '%' .$request->id. '%')
                            ->orderBy('view', 'desc')
                            ->paginate(5);
                return $this->respond($data);
            }
        }
        catch(Exception $ex){
                return $this->respondWithError(ApiCode::ERROR_GET_DATA, 401);
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
}
