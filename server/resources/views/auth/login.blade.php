@extends('layouts.layout-login')

@section('account_content')
    <form method="POST" action="{{ route('sign_in') }}">
        @csrf
        <div class="login-form">
                @if(Session::has('err'))
                <div class="alert alert-danger text-center" role="alert">
                        {{ Session::get('err') }}
                    </div>
                @endif
                @error('email')
                    <div class="alert alert-danger text-center" role="alert">
                        {{ $message }}
                    </div>
                @enderror
                @error('password')
                    <div class="alert alert-danger text-center" role="alert">
                        {{ $message }}
                    </div>
                @enderror
                <h3 class="login-head"><i class="fa fa-lg fa-fw fa-user"></i>ĐĂNG NHẬP</h3>
                <div class="form-group">
                    <label class="control-label">EMAIL</label>
                    <div class="input-group">
                        <input class="form-control @error('email') is-invalid @enderror" 
                            id="email" name="email" type="text" placeholder="Email" 
                            value="{{ old('email') }}" 
                            required autocomplete="email" autofocus>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label">MẬT KHẨU</label>
                    <div class="input-group">
                        <input class="form-control @error('password') is-invalid @enderror" 
                        id="password" name="password" type="password" 
                        placeholder="Mật khẩu" required autocomplete="current-password">                        
                    </div>
                </div>
                <div class="form-group">
                    <div class="utility">
                        <div class="animated-checkbox">
                            <div class="custom-checkbox">
                                <label>
                                    <input type="checkbox" name="remember" id="remember"><span class="label-text">Duy trì đăng nhập</span>
                                </label>
                            </div>
                        </div>
                        <p class="semibold-text mb-2"><a href="#" data-toggle="flip">Quên mật khẩu ?</a></p>
                    </div>
                </div>
                <div class="form-group btn-container">
                    <button class="btn btn-primary btn-block" id="btnlogin"><i class="fa fa-sign-in fa-lg fa-fw"></i>ĐĂNG NHẬP</button>
                </div>
            </div>
    </form>


    <!-- Form quên mật khẩu-->
    <div class="forget-form">
            <form method="POST" action="{{ route('forgot_password') }}">
                @csrf
                @error('reset_email')
                        <div class="alert alert-danger text-center" role="alert">
                            {{ $message }}
                        </div>
                @enderror
                @if(Session::has('err_email'))
                    <div class="alert alert-danger text-center" role="alert">
                            {{ Session::get('err_email') }}
                    </div>
                @endif
                <h3 class="login-head"><i class="fa fa-lg fa-fw fa-lock"></i>Quên mật khẩu ?</h3>
                <div class="form-group">
                    <label class="control-label">EMAIL</label>
                    <div class="input-group">
                        <input class="form-control @error('email') is-invalid @enderror" 
                            type="text" name="email" value="{{ old('email') }}" 
                            required autocomplete="email" autofocus placeholder="Email">
                           
                        </div>
                    </div>
                    <div class="form-group btn-container">
                        <button class="btn btn-primary btn-block" type="submit">
                            <i class="fa fa-unlock fa-lg fa-fw"></i>RESET
                        </button>
                    </div>
            </form>
            <div class="form-group mt-3">
                <p class="semibold-text mb-0"><a href="#" data-toggle="flip"><i class="fa fa-angle-left fa-fw"></i> Quay lại</a></p>
            </div>
            </div>
@endsection

