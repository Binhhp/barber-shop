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

Route::group(['prefix' => 'admin', 'middleware' => ['auth'] ], function(){
    Route::get('', [
        'uses' => 'Admin\HomeAdminController@index',
        'as' => 'index'
    ]);

    //Tag 
    Route::group(['prefix' => 'tag'], function(){
        Route::get('', [
            'uses' => 'Admin\TagController@index',
            'as' => 'tag'
        ]);
    
        Route::get('getData', [
            'uses' => 'Admin\TagController@getData',
            'as' => 'tag.getData'
        ]);
    
        Route::post('insert', [
            'uses' => 'Admin\TagController@insert',
            'as' => 'tag.insert'
        ]);
    
        Route::post('update', [
            'uses' => 'Admin\TagController@update',
            'as' => 'tag.update'
        ]);
    
        Route::get('delete/{id}', [
            'uses' => 'Admin\TagController@delete',
            'as' => 'tag.delete'
        ]);
    
        Route::post('deleteAll', [
            'uses' => 'Admin\TagController@deleteAll',
            'as' => 'tag.deleteAll'
        ]);
    });


    //Category Blog
    Route::group(['prefix' => 'cate'], function(){
        Route::get('', [
            'uses' => 'Admin\CategoryBlogController@index',
            'as' => 'cate.index'
        ]);

        Route::get('getData', [
            'uses' => 'Admin\CategoryBlogController@getData',
            'as' => 'cate.getData'
        ]);
    
        Route::post('insert', [
            'uses' => 'Admin\CategoryBlogController@insert',
            'as' => 'cate.insert'
        ]);
    
        Route::post('update', [
            'uses' => 'Admin\CategoryBlogController@update',
            'as' => 'cate.update'
        ]);
    
        Route::get('delete/{id}', [
            'uses' => 'Admin\CategoryBlogController@delete',
            'as' => 'cate.delete'
        ]);
    
        Route::post('deleteAll', [
            'uses' => 'Admin\CategoryBlogController@deleteAll',
            'as' => 'cate.deleteAll'
        ]);
    });

    //Blog
    Route::group(['prefix' => 'blog'], function(){
        Route::get('', [
            'uses' => 'Admin\BlogController@index',
            'as' => 'web.blog'
        ]);

        Route::get('getData', [
            'uses' => 'Admin\BlogController@getData',
            'as' => 'blog.getData'
        ]);
    
        Route::post('insert', [
            'uses' => 'Admin\BlogController@insert',
            'as' => 'blog.insert'
        ]);
    
        Route::post('update', [
            'uses' => 'Admin\BlogController@update',
            'as' => 'blog.update'
        ]);
    
        Route::get('delete/{id}', [
            'uses' => 'Admin\BlogController@delete',
            'as' => 'blog.delete'
        ]);
    
        Route::post('deleteAll', [
            'uses' => 'Admin\BlogController@deleteAll',
            'as' => 'blog.deleteAll'
        ]);
    });

});


Auth::routes();
