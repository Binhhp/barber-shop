<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Service\ApiCode;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\Facades\DataTables;

class AppointmentController extends Controller
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
        }
        return view('appointment', ['user_name' => $name, 'user_role' => $role]); 
    }
    /**
     * Display the specified resource.
     * get yajra datable tag for ajax
     * @return \Illuminate\Http\Response
     */
    public function getData(Request $request)
    {
        if($request->ajax()){
            $data = Appointment::join('services', 'appointments.ser_id', '=', 'services.id')
                                ->join('barbers', 'appointments.barber_id', '=', 'barbers.id')
                                ->join('times', 'appointments.time_id', '=', 'times.id')
                                ->join('customers', 'appointments.cus_id', '=', 'customers.id')
                                ->get([
                                    'appointments.*', 'barbers.name as barber_name', 
                                    'services.name as service_name', 'times.h_des',
                                    'customers.name as customer_name'
                                ]);
                                
            return DataTables::of($data)
                    ->addColumn('combobox', function(){
                        $checkbox = '<label><input type="checkbox"><span class="label-text"></span></label>';
                        return $checkbox;
                    })
                    ->editColumn('created_at', function ($tag){
                        return $tag->created_at ? with(new Carbon($tag->created_at))->format('d/m/Y') : '';
                    })
                    ->addColumn('status', function($data){
                        if($data->status == true){
                            $statusTrue = '<button type="button" name="st-true" id="'.$data->id.'" class="status btn btn-info btn-sm text-center">Confirmed</button>';
                            return $statusTrue;
                        }
                        else{
                            $statusFalse = '<button type="button" name="st-false" id="'.$data->id.'" 
                            class="status btn btn-secondary btn-sm">Not confirm</button>';
                            return $statusFalse;
                        }
                    })
                    ->addColumn('action' ,function($data){
                        $button 
                        = '&nbsp;&nbsp;<a href="javascript:void(0);" onclick="deleteData('.$data->id.')" 
                        name="delete" class="delete btn btn-danger btn-sm">Delete</a>';
                        return $button;
                    })         
                    ->rawColumns(['combobox', 'status', 'action'])
                    ->make(true);
        }
    }

     /**
     * Display the specified resource.
     * Delete tag
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
       try{
            $record = Appointment::find($id);
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
     * Display the specified resource.
     * Delete tag
     * @param Request
     * @return \Illuminate\Http\Response
     */
    public function deleteAll(Request $request)
    {
        if($request->ajax()){

            $data = $request->json()->all();
            
            if(is_array($data)){
                
                foreach($data as $key){
                    $record = Appointment::find($key);
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
