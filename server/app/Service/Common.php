<?php

namespace App\Service;

use App\Models\Customer;

trait Common{
    
    public function find_cus($email){
        return Customer::where('email', '=', $email)->first();
    }
}