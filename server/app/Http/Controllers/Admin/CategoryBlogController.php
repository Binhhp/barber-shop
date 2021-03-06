<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryBlogRequest;
use App\Models\CategoryBlog;
use App\Service\ApiCode;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\Facades\DataTables;

class CategoryBlogController extends Controller
{
    public function __construct()
    {
        return $this->middleware('auth');
    }

    public function index()
    {
        if(Auth::user())
        {
            $name = Auth::user()->name;
            $role = Auth::user()->role->name;
        }
        return view('cate_blog', ['user_name' => $name, 'user_role' => $role]); 
    }
    //get yajra table
    public function getData(Request $request)
    {
        if($request->ajax()){
            $data = CategoryBlog::query()->orderBy('id', 'asc');
            return DataTables::of($data)
                    ->addColumn('cbox', function(){
                        $checkbox = '<label><input type="checkbox"><span class="label-text"></span></label>';
                        return $checkbox;
                    })
                    ->editColumn('created_at', function ($tag){
                        return $tag->created_at ? with(new Carbon($tag->created_at))->format('d/m/Y') : '';
                    })
                    ->addColumn('action' ,function($data){
                        $button = '<a href="javascript:void(0);" data-toggle="modal" data-target="#myModal"
                        data-id="'.$data->id.'" data-name="'.$data->name.'" data-description="'.$data->description.'"
                        data-created_at="'.$data->created_at.'" 
                        data-action="edit" name="edit" class="edit btn btn-primary btn-sm">Edit</a>';

                        $button .= '&nbsp;&nbsp;<a href="javascript:void(0);" onclick="deleteData('.$data->id.')" 
                        name="delete" class="delete btn btn-danger btn-sm">Delete</a>';
                        return $button;
                    })         
                    ->rawColumns(['cbox', 'status', 'action'])
                    ->make(true);
        }
    }

    //insert data
    public function insert(CategoryBlogRequest $request)
    {
        try{
            if($request->ajax()){
                $data = CategoryBlog::where('name', '=', $request->name)->first();
                if(!is_null($data)){
                    return $this->respondWithError(ApiCode::ERROR_CREDENTIALS, 404);
                }
                CategoryBlog::create($request->getAttributes());
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
    //update data
    public function update(CategoryBlogRequest $request)
    {
        if($request->ajax()){
            $tag_id = $request->id;
            if($tag_id){
                $tag = CategoryBlog::find($tag_id);
                if(!is_null($tag)){
                    $tag->update($request->getAttributes());
                    return $this->respondWithSuccess(ApiCode::NOTIFICATION_UPDATE_SUCCESS);
                }
                return $this->respondWithError(ApiCode::ERROR_GET_DATA, 401);
            }
        }
        else{
            return $this->respondRequest(ApiCode::ERROR_REQUEST);
        }
    }

    public function delete($id)
    {
       try{
            $record = CategoryBlog::find($id);
            if(!is_null($record)){
                $record->delete();
                return $this->respondWithSuccess(ApiCode::NOTIFICATION_DELETE_SUCCESS);
            }
            else{
                return $this->respondNotFound(ApiCode::ERROR_GET_DATA);
            }
       }
       catch(Exception $ex){
            return $this->respondWithError(ApiCode::ERROR_REQUEST, 402);
       }
    }

    public function deleteAll(Request $request)
    {
        if($request->ajax()){
            $data = $request->json()->all();
            if(is_array($data)){
                foreach($data as $key){
                    $record = CategoryBlog::where('name', $key)->firstOrFail();
                    if(!is_null($record)){
                        $record->delete();
                    }
                }
                $msg = 'Delete ' . count($data) . ' success!';
                return $this->respondWithMessage($msg);
            }
            else{
                return $this->respondWithError(ApiCode::ERROR_REQUEST, 402);
            }
        }
    }
}
