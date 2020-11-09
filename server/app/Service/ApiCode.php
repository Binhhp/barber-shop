<?php
namespace App\Service;

class ApiCode {
    public const NOTIFICATION_INSERT_SUCCESS = 201;
    public const NOTIFICATION_UPDATE_SUCCESS = 202;
    public const NOTIFICATION_DELETE_SUCCESS = 203;
    public const ERROR_GET_DATA              = 401;
    public const ERROR_REQUEST               = 402;     
    public const VALIDATION_ERROR            = 403;
    public const ERROR_CREDENTIALS           = 404;
    public const SUCCESS_APPOINTMENT         = 204;
    public const ERROR_APPOINTMENT           = 405;
    public const ERROR_IS_CREDENTIALS        = 406;
}