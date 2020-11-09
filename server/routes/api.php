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
//get blog and detail blog
Route::apiResource('blog', 'BlogController')->only('index', 'show')->middleware('log.route');
//get category blog
Route::get('cate', 'BlogController@cate_blog')->name('cate_blog');
//get blog by category
Route::get('blog-cate/{cate}', 'BlogController@show_cate_blog')->name('blog_by_cate');
//get tag blog
Route::get('tag', 'BlogController@show_tag_blog')->name('tag_blog');
//get blog by tag
Route::get('blog-tag/{tag_id}', 'BlogController@show_blog_by_tag')->name('blog_by_tag');
//search blog
Route::post('blog-search', 'BlogController@search_blog')->name('blog_search');
//get comment blog
Route::post('blog-comment/{blog_id}', 'BlogController@get_comment_blog')->name('blog_comment');
//get services
Route::get('services', 'AppointmentController@show_services')->name('service');
//get barbers
Route::get('barbers', 'AppointmentController@show_barbers')->name('barbers');
//register appointment
Route::post('appointments', 'AppointmentController@register_appointment')->name('appointments');
//show time
Route::post('get-times', 'AppointmentController@show_times')->name('show_times');
