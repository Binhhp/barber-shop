<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\AppointmentRequest;
use App\Http\Requests\TimeRequest;
use App\Models\Appointment;
use App\Models\Barber;
use App\Models\Customer;
use App\Models\Position;
use App\Models\Service;
use App\Models\Time;
use App\Service\ApiCode;
use DateTime;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class times{
    public $id;
    public $time;
    public $time_des;
    public $type;
}

class AppointmentHttpRequest{
    public $id;
    public $date;
    public $time;
    public $service;
    public $barber;
    public $name;
    public $phone_number;
    public $email;
}
class AppointmentController extends Controller
{

    /**
     * Display the specified resource.
     * Get service
     * @return \Illuminate\Http\Response
     */
    public function show_services()
    {
        try{
            $data = Service::all();
            return $this->respond($data);
        }
        catch(Exception $ex){
            return $this->respondRequest(ApiCode::ERROR_REQUEST, 402);
        }
    }
    
    /**
     * Display the specified resource.
     * Get barber
     * @return \Illuminate\Http\Response
     */
    public function show_barbers()
    {
        try{
            $data = Barber::join('positions', 'barbers.pos_id', '=', 'positions.id')
                            ->get(['barbers.*', 'positions.name_pos']);
            return $this->respond($data);
        }
        catch(Exception $ex){
            return $this->respondRequest(ApiCode::ERROR_REQUEST, 402);
        }
    }

    /**
     * Display the specified resource.
     * Get barber
     * @param AppointmentRequest
     * @return \Illuminate\Http\Response
     */
    public function register_appointment(Request $request)
    {
        try{
            
            $data = $request->json()->all();

            $find_app = Appointment::where([
                'time_id' => $data['time_id'],
                'date' => $data['date'],
                'barber_id' => $data['barber_id'],
                'status' => true,
                ])->first();

            if(!is_null($find_app)){
                return $this->respondWithError(ApiCode::ERROR_IS_CREDENTIALS, 406);
            }

            $cus_id = $this->find_cus($data['email']);
            $appointment = new Appointment([
                'date' => $data['date'],
                'time_id' => $data['time_id'],
                'ser_id' => $data['ser_id'],
                'barber_id' => $data['barber_id'],
                'status' => false,
            ]);
            
            if(!is_null($cus_id)){
                $cus_id->appointments()->save($appointment);
            }
            else{
                $customer = new Customer([
                    'name' => $data['name'],
                    'phone_number' => $data['phone_number'],
                    'email' => $data['email'],
                    'password' => '1',
                ]);
                   
                $saved = $customer->save();
                if($saved){
                    $cus_request = $this->find_cus($data['email']);
                    $cus_request->appointments()->save($appointment);
                }
                else{
                    return $this->respondWithError(ApiCode::ERROR_APPOINTMENT, 405);
                }
            }

            $service = Service::find($data['ser_id']);
            $barber = Barber::find($data['barber_id']);
            $time = Time::find($data['time_id']);

            $check = Appointment::where([
                'time_id' => $data['time_id'],
                'date' => $data['date'],
                'barber_id' => $data['barber_id']
                ])->first();

            $email = array(
                'url' => route('check_status_appointments', ['id' => $check->id]),
                'email' => $data['email'],
                'name' => $data['name'],
                'phone_number' => $data['phone_number'],
                'time' => $time->h_des,
                'date' => $data['date'],
                'service' => $service->name,
                'barber' => $barber->name,
                'address' => '99 Nguyễn Chí Thanh, Láng Thượng, Đống Đa, Hà Nội',
            );

            $response = $this->send_mail($email);
            if($response == true){
                return $this->respondAll($email, "Đăng kí lịch hẹn thành công!");
            }
            else{
                return $this->respondWithError(ApiCode::ERROR_APPOINTMENT,405);
            }
        }
        catch(Exception $ex){
            return $this->respondWithMessage($ex->getMessage());
        }
    }

     /**
     * Display the specified resource.
     * Get barber
     * @param $phone_number
     * @return \Illuminate\Http\Response
     */
    public function check_appointment($phone_number)
    {
        try{
            if(!is_null($phone_number)){
                $data = Appointment::join('customers', 'appointments.cus_id', '=', 'customers.id')
                                    ->where([
                                        'appointments.status' => true,
                                        'customers.phone_number' => $phone_number
                                    ])
                                    ->orderBy('appointments.date', 'ASC')
                                    ->get(['appointments.*', 'customers.*']);
                
                if(count($data) > 0){
                    $array = array();
                    foreach($data as $item){
                        $date = date('Y/m/d', strtotime($item['date']));
                        if($date >= date("Y/m/d")){
                            $app = new AppointmentHttpRequest();
                            $app->id = $item['id'];
                            $app->date = $item['date'];
                            $app->time = Time::find($item['time_id'])->h_des;
                            $app->service = Service::find($item['ser_id'])->name;
                            $app->barber = Barber::find($item['barber_id'])->name;
                            $app->name = $item['name'];
                            $app->phone_number = $item['phone_number'];
                            $app->email = $item['email'];
                            
                            $array[] = $app;
                        }
                    }
                    return $this->respond($array);       
                }
                else{
                    return $this->respond($data);
                }
            }
            else{
                return $this->respondNotFound(ApiCode::ERROR_GET_DATA);
            }
        }
        catch(Exception $ex){
            return $this->respondRequest(ApiCode::ERROR_REQUEST);
        }
    }

     /**
     * Display the specified resource.
     * Get barber
     * @param TimeRequest
     * @return \Illuminate\Http\Response
     */
    public function show_times(TimeRequest $request)
    {
        try{
            $array = array();
            $times = Time::all();

            $a = 1.00;

            foreach($times as $i){
                $appointment = Appointment::join('services', 'appointments.ser_id', '=', 'services.id')
                    ->where([
                        'time_id' => $i->id,
                        'date' => $request->date,
                        'barber_id' => $request->barber_id,
                        'status' => true
                    ])->select(['appointments.*', 'services.time'])->first();

                $time = new times;
                $time->id = $i->id;
                $time->time = $i->h;
                $time->time_des = $i->h_des;

                if(!is_null($appointment)){

                    $sum = (float)$appointment->time + (float)$i->h;
                    $a += $sum;
                    $time->type = true;

                }
                else{
                    $tim = (float)$i->h;
                    if($tim <= $a){
                        if($tim == $a){
                            $a = 1.00;
                        }
                        $time->type = true;
                    }
                    else{
                        $time->type = false;
                    }
                }

                $array[] = $time;

            }
            if(!is_null($array)){
                return $this->respondJson($array);
            }
            else{
                return $this->respondRequest(ApiCode::ERROR_REQUEST); 
            }
        }
        catch(Exception $ex){
            return $this->respondRequest(ApiCode::ERROR_REQUEST);
        }
    }

    //check status appointment
    public function check_status_appointments($id)
    {
        try{
            if(!is_null($id)){
                $appointment = Appointment::find($id);
                if(!is_null($appointment)){
                    $appointment->status = true;
                    $appointment->save();
                    return view('notification.success_appointment');
                }
                else{
                    return $this->respondRequest(ApiCode::ERROR_GET_DATA);
                }
            }
            else{
                return $this->respondNotFound(ApiCode::ERROR_GET_DATA);
            }
        }
        catch(Exception $ex){
            return $this->respondRequest(ApiCode::ERROR_REQUEST);
        }
    }
}
