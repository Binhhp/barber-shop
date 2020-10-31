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
use Illuminate\Support\Facades\DB;
use Mockery\CountValidator\Exact;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     * Get list blog
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{
            $data = Blog::join('category_blogs', 'category_blogs.id', '=', 'blogs.cate_id')
                        ->orderBy('view', 'desc')
                        ->paginate(5 ,['blogs.*', 'category_blogs.name']);
            return $this->respond($data);
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
    public function show($id)
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
    public function cate_blog()
    {
        try{
            $data = DB::table('category_blogs')
                        ->join('blogs', 'blogs.cate_id', '=', 'category_blogs.id')
                        ->select(DB::raw('count(blogs.id) as count_blog'), 'category_blogs.*')
                        ->groupBy('category_blogs.name')
                        ->get();
            return $this->respond($data);
        }
        catch(Exception $ex){
            return $this->respondWithError(ApiCode::ERROR_GET_DATA, 401);
        }
    }

    /**
     * Display the specified resource.
     * Get blog by category blog
     * @param  int  $cate_id
     * @return \Illuminate\Http\Response
     */
    public function show_cate_blog($cate)
    {
        try{
                $data = Blog::where('cate_id', $cate)->paginate(5);
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
    public function show_tag_blog()
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
     * Get blog by tag
     * @param int $tag_id
     * @return \Illuminate\Http\Response
     */
    public function show_blog_by_tag($tag_id)
    {
        try{
            $data = Blog::whereHas('tags', function($query) use($tag_id){
                $query->where('tag_id', '=', $tag_id);
            })->orderBy('view', 'desc')->paginate(5);
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
    public function search_blog(Request $request)
    {
       try{
            $key = $request->keys;
            $data = Blog::where('title', 'LIKE', '%' .$key. '%')
                        ->orWhere('description', 'LIKE', '%' .$key. '%')
                        ->orderBy('view', 'desc')
                        ->paginate(5);
            return $this->respond($data);
       }
       catch(Exception $ex)
       {
            return $this->respondWithError(ApiCode::ERROR_REQUEST, 401);
       }
    }

    /**
     * Display the specified resource.
     * Get blog by search 
     * @param string keys
     * @return \Illuminate\Http\Response
     */
    public function get_comment_blog($blog_id)
    {
        try{
            $data = Comment::join('customers', 'comments.cus_id', '=', 'customers.id')
                            ->where('blog_id', $blog_id)->get();
            return $this->respond($data);
        }
        catch(Exception $ex){
            return $this->respondWithError(ApiCode::ERROR_REQUEST, 401);
        }
    }
}
