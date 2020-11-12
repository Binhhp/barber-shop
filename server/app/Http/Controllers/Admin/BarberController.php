<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\BarberRequest;
use App\Models\Barber;
use App\Models\Position;
use App\Service\ApiCode;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\Facades\DataTables;

class BarberController extends Controller
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
            $position = Position::all();
        }
        return view('barber', ['user_name' => $name, 'user_role' => $role, 'pos' => $position ]); 
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
            $data = Barber::join('positions', 'barbers.pos_id', '=', 'positions.id')
                            ->get(['barbers.*', 'positions.name_pos']);
            return DataTables::of($data)
                    ->addColumn('cbox', function(){
                        $checkbox = '<label><input type="checkbox"><span class="label-text"></span></label>';
                        return $checkbox;
                    })
                    ->addColumn('action' ,function($data){

                        $button = '<a href="javascript:void(0);" data-toggle="modal" data-target="#myModal"
                        data-id="'.$data->id.'" data-name="'.$data->name.'" data-phone="'.$data->phone_number.'" 
                        data-address="'.$data->address.'" data-path="'.$data->imgPath.'" data-file="'.$data->imgName.'"
                        data-pos="'.$data->pos_id.'" data-email="'.$data->email.'"  data-action="edit" name="edit" 
                        class="edit btn btn-primary btn-sm">Edit</a>';

                        $button .= '&nbsp;&nbsp;<a href="javascript:void(0);" onclick="deleteData(this)" data-id="'.$data->id.'"
                        data-image="'.$data->imgName.'" name="delete" class="delete btn btn-danger btn-sm">Delete</a>';
                        return $button;
                    })         
                    ->rawColumns(['cbox', 'action'])
                    ->make(true);
        }
    }

    public function insert(BarberRequest $request)
    {
        # code...
        if($request->ajax()){
            echo('0');
        }
    }
    /**
     * Display a listing of the resource.
     * Insert data
     * @param BarberRequest
     * @return \Illuminate\Http\Response
     */
    public function insertData(BarberRequest $request)
    {
        try{
            if($request->ajax()){
                $position = Position::find($request->position);
                if(!is_null($position)){
                    $check_barber = Barber::where('email', '=', $request->email)->first();
                    
                    if(!is_null($check_barber)){
                        return $this->respondWithError(ApiCode::ERROR_CREDENTIALS, 404);
                    }

                    $barber = new Barber([
                        'name' => $request->name,
                        'phone_number' => $request->phone,
                        'address' => $request->address,
                        'imgPath' => $request->imgPath,
                        'imgName' => $request->fileName,
                        'email' => $request->email,
                    ]);

                    $position->barbers()->save($barber);

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
     * Delete blog
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
       try{
            $record = Barber::find($id);
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
                    $record = Barber::where('email', $key)->firstOrFail();
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
