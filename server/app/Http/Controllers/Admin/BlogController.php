<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AppointmentRequest;
use App\Http\Requests\BlogRequest;
use App\Models\Blog;
use App\Models\CategoryBlog;
use App\Models\Tag;
use App\Service\ApiCode;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\Facades\DataTables;

class BlogController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        if(Auth::user())
        {
            $name = Auth::user()->name;
            $role = Auth::user()->role->name;
            $cate = CategoryBlog::all();
            $tag = Tag::all();
        }
        return view('blog', ['user_name' => $name, 'user_role' => $role, 'cate' => $cate, 'tags' => $tag]); 
    }
    
    public function getData(Request $request)
    {
        if($request->ajax()){
            $data = Blog::join('category_blogs', 'blogs.cate_id', '=', 'category_blogs.id')
                            ->orderBy('created_at', 'desc')
                            ->get(['blogs.*', 'category_blogs.name']);
            return DataTables::of($data)
                    ->addColumn('cbox', function(){
                        $checkbox = '<label><input type="checkbox"><span class="label-text"></span></label>';
                        return $checkbox;
                    })
                    ->addColumn('status', function($data){
                        if($data->status == true){
                            $statusTrue = '<button type="button" name="st-true" id="'.$data->id.'" class="edit btn btn-info btn-sm text-center">Đã duyệt</button>';
                            return $statusTrue;
                        }
                        else{
                            $statusFalse = '<button type="button" name="st-false" id="'.$data->id.'" 
                            class="edit btn btn-secondary btn-sm">Chưa duyệt</button>';
                            return $statusFalse;
                        }
                    })
                    ->addColumn('action' ,function($data){
                        $button = '<a href="javascript:void(0);" data-toggle="modal" data-target="#myModal"
                        data-id="'.$data->id.'" data-title="'.$data->title.'" data-content="'.$data->content.'"
                        data-imgPath="'.$data->imgPath.'" data-status="'.$data->status.'" data-cate="'.$data->name.'"
                        data-action="edit" name="edit" class="edit btn btn-primary btn-sm">Edit</a>';

                        $button .= '&nbsp;&nbsp;<a href="javascript:void(0);" onclick="deleteData('.$data->id.')" 
                        name="delete" class="delete btn btn-danger btn-sm">Delete</a>';
                        return $button;
                    })         
                    ->rawColumns(['cbox', 'status', 'action'])
                    ->make(true);
        }
    }

    public function insert(BlogRequest $request)
    {
        try{
            if($request->ajax()){
                $check_data = Blog::where('title', '=', $request->title)->first();
                if(!is_null($check_data)){
                    return $this->respondWithError(ApiCode::ERROR_CREDENTIALS, 401);
                }
                $cate = CategoryBlog::where('id', '=', $request->cate_id)->first();
                if(!is_null($cate)){
                    $blog = new Blog([
                        'title' => $request->name,
                        'description' => $request->description,
                        'content' => $request->content,
                        'status' => $request->status,
                        'imgPath' => $request->imgPath,
                        'view' => 0,
                        'like' => 0,
                    ]);

                    $cate->blogs()->save($blog);
                    $blog->tags()->attach($request->tags === null ? [] : $request->tags);
                }
                return $this->respondWithSuccess(ApiCode::NOTIFICATION_INSERT_SUCCESS);
            }
            else{
                return $this->respondRequest(ApiCode::ERROR_REQUEST);
            }
        }
        catch(Exception $ex){
            return $this->respondRequest(ApiCode::ERROR_REQUEST);
        }
    }


    public function delete($id)
    {
       try{
            $record = Blog::find($id);
            if(!is_null($record)){
                $record->delete();
                return $this->respondWithSuccess(ApiCode::NOTIFICATION_DELETE_SUCCESS);
            }
            else{
                return $this->respondNotFound(ApiCode::ERROR_GET_DATA);
            }
       }
       catch(Exception $ex){
            return $this->respondWithError(ApiCode::ERROR_REQUEST, 400);
       }
    }

    public function deleteAll(Request $request)
    {
        if($request->ajax()){
            $data = $request->json()->all();
            if(is_array($data)){
                foreach($data as $key){
                    $record = Blog::where('title', $key)->firstOrFail();
                    if(!is_null($record)){
                        $record->delete();
                    }
                }
                $msg = 'Xóa ' . count($data) . ' thành công!';
                return $this->respondWithMessage($msg);
            }
            else{
                return $this->respondWithError(ApiCode::ERROR_REQUEST, 400);
            }
        }
    }
}
