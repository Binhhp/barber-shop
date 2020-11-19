<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AppointmentRequest;
use App\Http\Requests\BlogRequest;
use App\Models\Blog;
use App\Models\CategoryBlog;
use App\Models\Customer;
use App\Models\Tag;
use App\Service\ApiCode;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Yajra\DataTables\Facades\DataTables;

class BlogController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('role:Admin');
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
    
    /**
     * Display a listing of the resource.
     * Get blog for table
     * @param Request from ajax
     * @return \Illuminate\Http\Response
     */
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
                        
                        $array = array();
                        foreach($data->tags as $tag){
                            array_push($array, $tag->id);
                        }

                        $content = $data->content;
                        $content = str_replace('"', '', $content);

                        $button = '<a href="javascript:void(0);" data-toggle="modal" data-target="#myModal"
                        data-id="'.$data->id.'" data-title="'.$data->title.'" data-description="'.$data->description.'" 
                        data-content="'.$content.'" data-path="'.$data->imgPath.'" data-file="'.$data->imgName.'"
                        data-status="'.$data->status.'" data-cate="'.$data->cate_id.'" 
                        data-tags="'.json_encode($array).'" data-action="edit" name="edit" 
                        class="edit btn btn-primary btn-sm">Edit</a>';

                        $button .= '&nbsp;&nbsp;<a href="javascript:void(0);" onclick="deleteData(this)" data-id="'.$data->id.'"
                        data-image="'.$data->imgName.'" name="delete" class="delete btn btn-danger btn-sm">Delete</a>';
                        return $button;
                    })         
                    ->rawColumns(['cbox', 'status', 'action'])
                    ->make(true);
        }
    }

    /**
     * Display a listing of the resource.
     * Insert blog
     * @param BlogRequest
     * @return \Illuminate\Http\Response
     */
    public function insert(BlogRequest $request)
    {
        try{
            if($request->ajax()){
                $cate = CategoryBlog::find($request->cate_id);
                if(!is_null($cate)){
                    $check_blog = Blog::where('title', '=', $request->title)->first();
                    
                    if(!is_null($check_blog)){
                        return $this->respondWithError(ApiCode::ERROR_CREDENTIALS, 404);
                    }

                    $blog = new Blog([
                        'title' => $request->title,
                        'description' => $request->description,
                        'content' => $request->contentEd,
                        'imgPath' => $request->imgPath,
                        'imgName' => $request->fileName,
                        'view' => 0,
                        'like' => 0,
                        'status' => $request->status
                    ]);
                    
                    $cate->blogs()->save($blog);
                    $blog->tags()->attach($request->tags === null ? [] : $request->tags);

                    if($request->status == true){
                        $customers = Customer::where('type', '=', true)->get();
                        if(count($customers) > 0){
                            foreach($customers as $item){
                                $url = "http://localhost:3000/";
                                $array = [
                                    'url' => $url,
                                    'email' => $item->email,
                                    'name' => $item->name
                                ];

                                $result = $this->send_notification($array);
                            }
                        }
                    }
                    return $this->respondWithSuccess(ApiCode::NOTIFICATION_INSERT_SUCCESS);
                }
                else{
                    return $this->respondWithError(ApiCode::ERROR_CREDENTIALS, 404);
                }
            }
            else{
                return $this->respondRequest(ApiCode::ERROR_REQUEST);
            }
        }
        catch(Exception $ex){
            echo($ex->getMessage());
        }
    }

    /**
     * Display a listing of the resource.
     * Update blog
     * @param BlogRequest
     * @return \Illuminate\Http\Response
     */
    public function update(BlogRequest $request)
    {
        try{
            if($request->ajax()){

                $blog = Blog::find($request->id);
                
                if(!is_null($blog)){

                    $blog->title = $request->title;
                    $blog->description = $request->description;
                    $blog->content = $request->contentEd;
                    $blog->imgPath = $request->imgPath;
                    $blog->imgName = $request->fileName;
                    $blog->status = $request->status;
                    $blog->cate_id = $request->cate_id;

                    $blog->save();
                    
                    $blog->tags()->sync($request->tags === null ? [] : $request->tags);

                    return $this->respondWithSuccess(ApiCode::NOTIFICATION_UPDATE_SUCCESS);
                }
                else{
                    return $this->respondNotFound(ApiCode::ERROR_REQUEST);
                }
            }
            else{
                return $this->respondRequest(ApiCode::ERROR_REQUEST);
            }
        }
        catch(Exception $ex){
            echo($ex->getMessage());
        }
    }


    /**
     * Display a listing of the resource.
     * Delete blog
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
       try{
            $record = Blog::find($id);
            if(!is_null($record)){

                $record->tags()->detach();
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

    /**
     * Display a listing of the resource.
     * Delete blog for checkbox
     * @param Request array
     * @return \Illuminate\Http\Response
     */
    public function deleteAll(Request $request)
    {
        if($request->ajax()){
            $data = $request->json()->all();
            $array = [];
            if(is_array($data)){
                foreach($data as $key){
                    $record = Blog::where('title', $key)->firstOrFail();
                    if(!is_null($record)){
                        array_push($array, $record->imgName);
                        $record->tags()->detach();
                        $record->delete();
                    }
                }
                $msg = 'Delete ' . count($data) . ' success!';
                return $this->respondAll($array ,$msg);
            }
            else{
                return $this->respondWithError(ApiCode::ERROR_REQUEST, 402);
            }
        }
    }
}
