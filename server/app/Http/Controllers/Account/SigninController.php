<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Foundation\Auth\RedirectsUsers;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;

class SigninController extends Controller
{
    use RedirectsUsers, ThrottlesLogins;

    public function showLoginForm()
    {
        return view('auth.login');
    }
    //Xu ly event login
    public function sign_in(Request $request)
    {
        $this->validateLogin($request);
        //Sử dụng ThrottlesLogins
        if (method_exists($this, 'hasTooManyLoginAttempts') && $this->hasTooManyLoginAttempts($request)) 
        {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }
        //Dang nhap thanh cong
        if ($this->attemptLogin($request)) {
            return $this->sendLoginResponse($request);
        }

        $this->incrementLoginAttempts($request);
        //Dang nhap that bai
        return $this->sendFailedLoginResponse($request);
    }

    protected function sendFailedLoginResponse(Request $request)
    {
        throw ValidationException::withMessages([
            $this->username() => [trans('auth.failed')],
        ]);
    }

    //Authenticate User
    protected function attemptLogin(Request $request)
    {
        return Auth::attempt(
            $this->credentials($request), $request->input('remember')
        );
    }

    protected function credentials(Request $request)
    {
        return $request->only($this->username(), 'password');
    }

    protected function sendLoginResponse(Request $request)
    {
        $request->session()->regenerate();

        $this->clearLoginAttempts($request);

        return $request->wantsJson()
                    ? new JsonResponse([], 204)
                    : redirect()->route('index');
    }

    //validate login
    protected function validateLogin(Request $request)
    {
        $request->validate([
            $this->username() => 'required|string',
            'password' => 'required|string',
        ]);
    }
    
    public function username()
    {
        return 'email';
    }

    //Error 400
    public function error()
    {
        return view('error.error401');
    }
    //Event logout
    public function sign_out(Request $request)
    {
       try{
        Auth::logout();
        
        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('login_index');
       }
       catch (Exception $ex){
           return redirect()->route('error_400');
       }
    }

     //Send email password notification
     public function showSendPasswordNotification()
     {
         $rath = Password::NOTIFICATION_LINK_SENT;
         return view($rath);
     }

     protected function guard()
     {
         return Auth::guard();
     }
}
