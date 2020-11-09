<?php
namespace App\Service;

use App\Models\Customer;
use MarcinOrlowski\ResponseBuilder\ResponseBuilder;

//Create consisdent response builder
trait Response {

    public function respond($data, $message = null)
    {
        return ResponseBuilder::asSuccess()->withData($data)->withMessage($message)->build();
    }

    public function respondWithMessage($message)
    {
        # code...
        return ResponseBuilder::asSuccess()->withMessage($message)->build();
    }

    public function respondWithSuccess($message)
    {
        return ResponseBuilder::asSuccess($message)->build();
    }
    
    public function respondWithError($api_code, $http_code)
    {
        return ResponseBuilder::asError($api_code)->withHttpCode($http_code)->build();
    }

    public function respondRequest($api_code)
    {
        return $this->respondWithError($api_code, 400);
    }
    
    public function respondUnAuthenticated($api_code)
    {
        return $this->respondWithError($api_code, 401);
    }

    public function respondNotFound($api_code)
    {
        return $this->respondWithError($api_code, 404);
    }

    public function find_cus($email){
        return Customer::where('email', '=', $email)->first();
    }
    
};