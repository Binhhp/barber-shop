<?php
namespace App\Service;

class ApiCode {
    public const NOTIFICATION_INSERT_SUCCESS = 254;
    public const NOTIFICATION_UPDATE_SUCCESS = 202;
    public const NOTIFICATION_DELETE_SUCCESS = 201;
    public const ERROR_GET_DATA              = 500;
    public const ERROR_REQUEST               = 404;     
    public const VALIDATION_ERROR            = 252;
    public const ERROR_CREDENTIALS           = 401;
    public const SUCCESS_APPOINTMENT         = 200;
    public const ERROR_APPOINTMENT           = 404;
    public const ERROR_IS_CREDENTIALS        = 401;
}