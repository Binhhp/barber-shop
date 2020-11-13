<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ServiceRequest;
use App\Models\Service;
use App\Service\ApiCode;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\Facades\DataTables;

class ServiceController extends Controller
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
        }
        return view('service', ['user_name' => $name, 'user_role' => $role ]); 
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
            $data = Service::all();
            return DataTables::of($data)
                    ->addColumn('cbox', function(){
                        $checkbox = '<label><input type="checkbox"><span class="label-text"></span></label>';
                        return $checkbox;
                    })
                    ->addColumn('action' ,function($data){

                        $button = '<a href="javascript:void(0);" data-toggle="modal" data-target="#myModal"
                        data-id="'.$data->id.'" data-name="'.$data->name.'" data-time="'.$data->time.'" 
                        data-description="'.$data->description.'" data-path="'.$data->imgPath.'" data-file="'.$data->imgName.'"
                        data-price="'.$data->price.'"  data-action="edit" name="edit" 
                        class="edit btn btn-primary btn-sm">Edit</a>';

                        $button .= '&nbsp;&nbsp;<a href="javascript:void(0);" onclick="deleteData(this)" data-id="'.$data->id.'"
                        data-image="'.$data->imgName.'" name="delete" class="delete btn btn-danger btn-sm">Delete</a>';
                        return $button;
                    })         
                    ->rawColumns(['cbox', 'action'])
                    ->make(true);
        }
    }
    /**
     * Display a listing of the resource.
     * Insert data
     * @param BarberRequest
     * @return \Illuminate\Http\Response
     */
    public function insert(ServiceRequest $request)
    {
        try{
            if($request->ajax()){
                $check_service = Service::where('name', '=', $request->name)->first();
                    
                if(!is_null($check_service)){
                    return $this->respondWithError(ApiCode::ERROR_CREDENTIALS, 404);
                }

                $service = new Service([
                    'name' => $request->name,
                    'time' => $request->time,
                    'description' => $request->description,
                    'imgPath' => $request->imgPath,
                    'imgName' => $request->fileName,
                    'price' => $request->price,
                ]);

                $service->save();

                return $this->respondWithSuccess(ApiCode::NOTIFICATION_INSERT_SUCCESS);
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
    public function update(ServiceRequest $request)
    {
        try{
            if($request->ajax()){

                $service = Service::find($request->id);
                
                if(!is_null($service)){

                    $service->name = $request->name;
                    $service->time = $request->time;
                    $service->description = $request->description;
                    $service->imgPath = $request->imgPath;
                    $service->imgName = $request->fileName;
                    $service->price = $request->price;

                    $service->save();

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
            $record = Service::find($id);
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
                    $record = Service::where('name', $key)->firstOrFail();
                    if(!is_null($record)){
                        array_push($array, $record->imgName);
                        $record->delete();
                    }
                }
                $msg = 'Xóa ' . count($data) . ' thành công!';
                return $this->respondAll($array ,$msg);
            }
            else{
                return $this->respondWithError(ApiCode::ERROR_REQUEST, 402);
            }
        }
    }
}
