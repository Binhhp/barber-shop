<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Main CSS-->
    <link rel="stylesheet" href="{{ URL::asset('css/main.css') }}">
    <link rel="stylesheet" href="{{ URL::asset('font-awesome/4.5.0/css/font-awesome.min.css') }}">
    <link rel="stylesheet" href="{{ URL::asset('css/loading.css') }}">
    <title>Đăng nhập - Quản trị Admin</title>
</head>
<body>
    <section class="material-half-bg">
        <div class="cover"></div>
    </section>
    <section class="login-content">
        <div class="logo">
            <h1>Quản trị</h1>
        </div>
        <div class="login-box">
            @yield('account_content')
        </div>
    </section>
    <!-- loader -->
    <div id="ftco-loader" class="show fullscreen" aria-hidden="true">
        <svg class="circular" width="48px" height="48px">
            <circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
            <circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00" />
        </svg>
    </div>
    <!-- Essential javascripts for application to work-->
    <script src="{{ URL::to('js/jquery-3.2.1.min.js') }}"></script>
    <script type="text/javascript" src="{{ URL::to('js/layoutlogin.js') }}"></script>
</body>
</html>
