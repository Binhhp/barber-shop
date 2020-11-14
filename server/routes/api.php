<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//get blog
Route::get('blog', 'BlogController@show_blog');
//get detail blog
Route::get('blog/{id}', 'BlogController@show_detail')->name('show_detail');
//get category blog
Route::get('cates', 'BlogController@show_category')->name('cate');
//get tag blog
Route::get('tags', 'BlogController@show_tag')->name('tag');
//get comment blog
Route::get('comments/{blog_id}', 'BlogController@show_comment')->name('show_comment');
//get services
Route::get('services', 'AppointmentController@show_services')->name('service');
//get barbers
Route::get('barbers', 'AppointmentController@show_barbers')->name('barbers');
//register appointment
Route::post('appointments', 'AppointmentController@register_appointment')->name('appointments');
//show time
Route::get('get-times', 'AppointmentController@show_times')->name('show_times');
//check status appointment
Route::get('confirm-appointment/{id}', 'AppointmentController@check_status_appointments')->name('check_status_appointments');
//check number
Route::get('check-phone/{phone_number}', 'AppointmentController@check_appointment')->name('check-phone');