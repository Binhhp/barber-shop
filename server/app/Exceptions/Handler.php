<?php

namespace App\Exceptions;

use App\Service\ApiCode;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use MarcinOrlowski\ResponseBuilder\ResponseBuilder;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    public function render($request, Throwable $exception)
    {
        if($exception instanceof ValidationException){
            return $this-> respondWithValidationException($exception);
        }
        return parent::render($request, $exception);
    }

    public function respondwithValidationException($exception)
    {
        return ResponseBuilder::asError(ApiCode::VALIDATION_ERROR)
                                ->withData($exception->errors())
                                ->withHttpCode(422)
                                ->build();
    }
}
