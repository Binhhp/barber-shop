<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;

class PasswordForgotController extends Controller
{
    public function sendResetLinkEmail(Request $request)
    {
        $this->validateEmail($request);

        $inputEmail = $request->input('email');
        $email = User::where('email', '=' , $inputEmail)->first();
        if($email == null){
            return redirect()->back()->with('err_email', 'Email không tồn tại.');
        }

        $response = $this->broker()->sendResetLink(
            $this->credentials($request)
        );

        return $response == Password::RESET_LINK_SENT
                ? $this->sendResetLinkResponse($request, $response)
                    : $this->sendResetLinkFailedResponse($request, $response);
    }

    //Send success
    protected function sendResetLinkResponse(Request $request, $response)
    {
        
        return $request->wantsJson()
                    ? new JsonResponse(['message' => trans($response)], 200)
                    : redirect()->route('password_notification');
    }
    //Send failed
    protected function sendResetLinkFailedResponse(Request $request, $response)
    {
        if ($request->wantsJson()) {
            throw ValidationException::withMessages([
                'reset_email' => [trans($response)],
            ]);
        }

        return back()
                ->withInput($request->only('reset_email'))
                ->withErrors(['reset_email' => trans($response)]);
    }

    //validate email
    protected function validateEmail(Request $request)
    {
        $request->validate(['email' => 'required|email']);
    }


    protected function credentials(Request $request)
    {
        return $request->only('email');
    }
    // Yêu cầu nhà môi giới sử dụng trong quá trình đặt lại mật khẩu
    public function broker()
    {
        return Password::broker();
    }
}
