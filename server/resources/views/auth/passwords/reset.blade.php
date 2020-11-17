@extends('layouts.layout-login')

@section('account_content')
<div class="login-form">
    <form method="POST" action="{{ route('update_password') }}">
        @csrf
        @if (session('status'))
            <div class="alert alert-success text-center" role="alert">
                {{ session('status') }}
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
        <input type="hidden" name="token" value="{{ $token }}">
        <input type="hidden" name="email" value="{{ $email }}">
        <h3 class="login-head"><i class="fa fa-lg fa-fw fa-lock"></i>Quên mật khẩu ?</h3>

        <div class="form-group ">
            <label class="control-label">MẬT KHẨU MỚI</label>
            <div class="input-group">
                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" 
                name="password" required autocomplete="new-password" placeholder="Mật khẩu mới" onkeyup="check();">
            </div>
        </div>

        <div class="form-group">
            <label class="control-label" style="float:left">NHẬP LẠI MẬT KHẨU</label>&nbsp;<span id="message-confirm"></span>
            <div class="input-group validate-password" data-validate="Bạn cần nhập lại mật khẩu!">
                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" 
                required autocomplete="new-password" placeholder="Nhập lại mật khẩu" onkeyup="check();">
            </div>
        </div>

        <div class="form-group btn-container">
            <button class="btn btn-primary btn-block" type="submit"><i class="fa fa-unlock fa-lg fa-fw"></i>RESET</button>
        </div>

        <div class="form-group mt-3">
            <p class="semibold-text mb-0"><a href="/admin/signin"><i class="fa fa-angle-left fa-fw"></i> Quay lại</a></p>
        </div>
    </form>
</div>
@endsection
