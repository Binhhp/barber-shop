<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Barber;
use App\Models\Blog;
use App\Models\Customer;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;

class HomeAdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        try{
            if(Auth::user()){
                $name = Auth::user()->name;
                $role = Auth::user()->role->name;
                $customers = Customer::count();
                $appointments = Appointment::where('status' ,'=', true)->get()->count();
                $blogs = Blog::count();
                $barbers = Barber::count();
            }
            return view('master', [
                'user_name' => $name, 
                'user_role' => $role,
                'customers' => $customers,
                'appointments' => $appointments,
                'blogs' => $blogs,
                'barbers' => $barbers
                ]);
        }
        catch(Exception $ex){
            return view('error.error401');
        }
    }
    public function error()
    {
        if(Auth::user())
        {
            $name = Auth::user()->name;
            $role = Auth::user()->role->name;
        }
        return view('error.page_error', ['user_name' => $name, 'user_role' => $role]); 
    }
    //get param
    public function getData()
    {
        $appointmentsTrue1 = Appointment::where('status', '=', true)->whereMonth('date', '=', '01')->count();
        $appointmentsTrue2 = Appointment::where('status', '=', true)->whereMonth('date', '=', '02')->count();
        $appointmentsTrue3 = Appointment::where('status', '=', true)->whereMonth('date', '=', '03')->count();
        $appointmentsTrue4 = Appointment::where('status', '=', true)->whereMonth('date', '=', '04')->count();
        $appointmentsTrue5 = Appointment::where('status', '=', true)->whereMonth('date', '=', '05')->count();
        $appointmentsTrue6 = Appointment::where('status', '=', true)->whereMonth('date', '=', '06')->count();
        $appointmentsTrue7 = Appointment::where('status', '=', true)->whereMonth('date', '=', '07')->count();
        $appointmentsTrue8 = Appointment::where('status', '=', true)->whereMonth('date', '=', '08')->count();
        $appointmentsTrue9 = Appointment::where('status', '=', true)->whereMonth('date', '=', '09')->count();
        $appointmentsTrue10 = Appointment::where('status', '=', true)->whereMonth('date', '=', '10')->count();
        $appointmentsTrue11 = Appointment::where('status', '=', true)->whereMonth('date', '=', '11')->count();
        $appointmentsTrue12 = Appointment::where('status', '=', true)->whereMonth('date', '=', '12')->count();

        $appointmentsFalse1 = Appointment::where('status', '=', false)->whereMonth('date', '=', '01')->count();
        $appointmentsFalse2 = Appointment::where('status', '=', false)->whereMonth('date', '=', '02')->count();
        $appointmentsFalse3 = Appointment::where('status', '=', false)->whereMonth('date', '=', '03')->count();
        $appointmentsFalse4 = Appointment::where('status', '=', false)->whereMonth('date', '=', '04')->count();
        $appointmentsFalse5 = Appointment::where('status', '=', false)->whereMonth('date', '=', '05')->count();
        $appointmentsFalse6 = Appointment::where('status', '=', false)->whereMonth('date', '=', '06')->count();
        $appointmentsFalse7 = Appointment::where('status', '=', false)->whereMonth('date', '=', '07')->count();
        $appointmentsFalse8 = Appointment::where('status', '=', false)->whereMonth('date', '=', '08')->count();
        $appointmentsFalse9 = Appointment::where('status', '=', false)->whereMonth('date', '=', '09')->count();
        $appointmentsFalse10 = Appointment::where('status', '=', false)->whereMonth('date', '=', '10')->count();
        $appointmentsFalse11 = Appointment::where('status', '=', false)->whereMonth('date', '=', '11')->count();
        $appointmentsFalse12 = Appointment::where('status', '=', false)->whereMonth('date', '=', '12')->count();

        $appointmentsTrue = Appointment::where('status', '=', true)->count();
        $appointmentsFalse = Appointment::where('status', '=', false)->count();

        $array = [
            'appointmentsTrue1' => $appointmentsTrue1,
            'appointmentsTrue2' => $appointmentsTrue2,
            'appointmentsTrue3' => $appointmentsTrue3,
            'appointmentsTrue4' => $appointmentsTrue4,
            'appointmentsTrue5' => $appointmentsTrue5,
            'appointmentsTrue6' => $appointmentsTrue6,
            'appointmentsTrue7' => $appointmentsTrue7,
            'appointmentsTrue8' => $appointmentsTrue8,
            'appointmentsTrue9' => $appointmentsTrue9,
            'appointmentsTrue10' => $appointmentsTrue10,
            'appointmentsTrue11' => $appointmentsTrue11,
            'appointmentsTrue12' => $appointmentsTrue12,

            'appointmentsFalse1' => $appointmentsFalse1,
            'appointmentsFalse2' => $appointmentsFalse2,
            'appointmentsFalse3' => $appointmentsFalse3,
            'appointmentsFalse4' => $appointmentsFalse4,
            'appointmentsFalse5' => $appointmentsFalse5,
            'appointmentsFalse6' => $appointmentsFalse6,
            'appointmentsFalse7' => $appointmentsFalse7,
            'appointmentsFalse8' => $appointmentsFalse8,
            'appointmentsFalse9' => $appointmentsFalse9,
            'appointmentsFalse10' => $appointmentsFalse10,
            'appointmentsFalse11' => $appointmentsFalse11,
            'appointmentsFalse12' => $appointmentsFalse12,
            
            'appointmentsTrue' => $appointmentsTrue,
            'appointmentsFalse' => $appointmentsFalse,
            
        ];

        return $this->respond($array);
    }
}
