<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//event signin
Route::get('admin/signin',[
    'uses' => 'Account\SigninController@showLoginForm',
    'as' => 'login_index'
]);

Route::post('sign_in', [
    'uses' => 'Account\SigninController@sign_in',
    'as' => 'sign_in'
]);

Route::get('sign_out', [
    'uses' => 'Account\SigninController@sign_out',
    'as' => 'sign_out'
]);

Route::get('error_400', [
    'uses' => 'Account\SigninController@error',
    'as' => 'error_400'
]);

Route::get('admin/ForgotPassword',[
    'uses' => 'Account\SigninController@showSendPasswordNotification',
    'as' => 'password_notification'
]);
//Reset password
Route::post('resetpassword/email',[
    'uses' => 'Account\PasswordForgotController@sendResetLinkEmail',
    'as' => 'forgot_password'
]);

Route::get('admin/ResetPassword/{token}',[
    'uses' => 'Account\PasswordResetController@showResetForm',
    'as' => 'reset_password'
]);

Route::post('ResetPassword', [
    'uses' => 'Account\PasswordResetController@reset',
    'as' => 'update_password'
]);
//Route menu
Route::group(['prefix' => 'menu'], function(){
    Route::get('getData',[
        'uses' => 'MenuController@getData',
        'as' => 'getData'
    ]);
    
    Route::post('update',[
        'uses' => 'MenuController@updateMenu',
        'as' => 'update_menu'
    ]);
    
    Route::get('delete/{id}', [
        'uses' => 'MenuController@deleteMenu',
        'as' => 'delete_menu'
    ]);

    Route::post('deleteAll', [
        'uses' => 'MenuController@deleteAll',
        'as' => 'delete_checkbox'
    ]);
    
});

Route::group(['prefix' => 'admin', 'middleware' => ['auth'] ], function(){
    Route::get('', [
        'uses' => 'HomeAdminController@index',
        'as' => 'index'
    ]);
    Route::get('menu', [
        'uses' => 'MenuController@menu',
        'as' => 'menu'
    ]);

});


Auth::routes();
