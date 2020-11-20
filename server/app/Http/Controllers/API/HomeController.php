<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use App\Models\Customer;
use App\Service\ApiCode;
use Exception;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }
    /**
     * Show the application dashboard.
     * contacts
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function contacts(Request $request)
    {
        try{
            $data = $request->json()->all();

            if(!is_null($data)){
                $customer = Customer::where('email', '=', $data['email'])->first();
                
                if(is_null($customer)){
                    Customer::create([
                        'name' => $data['name'],
                        'phone_number' => $data['phone_number'],
                        'email' => $data['email'],
                        'type' => false
                    ]);
 
                    
                    $record = Customer::where([
                         'name' => $data['name'],
                         'phone_number' => $data['phone_number'],
                         'email' => $data['email'],
                         'type' => false
                    ])->first();
 
                    if(!is_null($record)){
 
                         $contacts = new Contact([
                             'message' => $data['message'],
                             'status' => false
                         ]);
                        $record->contacts()->save($contacts);
                    }
                 }
                 else{
                    $contacts = new Contact([
                        'message' => $data['message']
                    ]);

                    $customer->contacts()->save($contacts);
                 }

                 return $this->respondWithSuccess(ApiCode::SUCCESS_CONTACT);
            }
            else{
                return $this->respondRequest(ApiCode::VALIDATION_ERROR);
            }
        }
        catch(Exception $ex){
            return $this->respondWithError(ApiCode::ERROR_REQUEST, 402);
        }
    }
    
}
