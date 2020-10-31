<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Role;
use App\Models\User;
use App\Service\ApiCode;
use Illuminate\Http\Request;
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
