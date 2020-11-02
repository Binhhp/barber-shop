<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class HomeAdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        // $this->middleware('role:Member');
    }

    public function index()
    {
        if(Auth::user()){
            $name = Auth::user()->name;
            $role = Auth::user()->role->name;
        }
        return view('master', ['user_name' => $name, 'user_role' => $role]);
    }
}
