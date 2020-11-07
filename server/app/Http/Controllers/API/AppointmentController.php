<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\AppointmentRequest;
use App\Models\Appointment;
use App\Models\Barber;
use App\Models\Customer;
use App\Models\Service;
use App\Service\ApiCode;
use Exception;

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
            return $this->respondRequest(ApiCode::ERROR_REQUEST, 401);
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
                            ->get(['barbers.*', 'positions.name']);
            return $this->respond($data);
        }
        catch(Exception $ex){
            return $this->respondRequest(ApiCode::ERROR_REQUEST, 401);
        }
    }

    /**
     * Display the specified resource.
     * Get barber
     * @param AppointmentRequest
     * @return \Illuminate\Http\Response
     */
    public function register_appointment(AppointmentRequest $request)
    {
        try{
            $find_app = Appointment::where('date', '=', $request->date)
                        ->where('time', '=', $request->time)
                        ->first();
            if(!is_null($find_app)){
                return $this->respondWithError(ApiCode::IS_CREDENTIALS, 404);
            }
            $cus_id = $this->find_cus($request->email);
            $appointment = new Appointment([
                'date' => $request->date,
                'time' => $request->time,
                'ser_id' => $request->ser_id,
                'barber_id' => $request->barber_id,
            ]);
            
            if(!is_null($cus_id)){
                $cus_id->appointments()->save($appointment);
            }
            else{
                $customer = new Customer([
                    'name' => $request->name,
                    'phone_number' => $request->phone_number,
                    'email' => $request->email,
                    'password' => '1',
                ]);
                   
                $saved = $customer->save();
                if($saved){
                    $cus_request = $this->find_cus($request->email);
                    $cus_request->appointments()->save($appointment);
                }
                else{
                    return $this->respondWithError(ApiCode::ERROR_APPOINTMENT, 401);
                }
            }

            $service = Service::where('id', '=', $request->ser_id)->first();
            $barber = Barber::where('id', '=', $request->barber_id)->first();

            $email = array(
                'name' => $request->name,
                'phone_number' => $request->phone_number,
                'time' => $request->time,
                'date' => $request->date,
                'service' => $service->name,
                'barber' => $barber->name,
                'address' => '99 Nguyễn Chí Thanh, Láng Thượng, Đống Đa, Hà Nội',

            );

            $response = $this->send_mail($email);
            if($response == true){
                return $this->respondWithSuccess(ApiCode::SUCCESS_APPOINTMENT);
            }
            else{
                return $this->respondWithError(ApiCode::ERROR_APPOINTMENT,401);
            }
        }
        catch(Exception $ex){
            return $this->respondWithMessage($ex->getMessage());
        }
    }
}
