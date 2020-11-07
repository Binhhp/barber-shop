<?php

/**
 * Laravel API Response Builder - configuration file
 *
 * See docs/config.md for detailed documentation
 *
 * @author    Marcin Orlowski <mail (#) marcinOrlowski (.) com>
 * @copyright 2016-2020 Marcin Orlowski
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      https://github.com/MarcinOrlowski/laravel-api-response-builder
 */

use App\Service\ApiCode;
use Facade\FlareClient\Api;

return [
    /*
    |-----------------------------------------------------------------------------------------------------------
    | Code range settings
    |-----------------------------------------------------------------------------------------------------------
    */
    'min_code'          => 100,
    'max_code'          => 1024,

    /*
    |-----------------------------------------------------------------------------------------------------------
    | Error code to message mapping
    |-----------------------------------------------------------------------------------------------------------
    |
    */
    'map'               => [
        ApiCode::NOTIFICATION_INSERT_SUCCESS => 'api.notification_insert_success',
        ApiCode::NOTIFICATION_UPDATE_SUCCESS => 'api.notification_update_success',
        ApiCode::NOTIFICATION_DELETE_SUCCESS => 'api.notification_delete_success',
        ApiCode::ERROR_GET_DATA => 'api.error_get_data',
        ApiCode::ERROR_REQUEST => 'api.error_request',
        ApiCode::VALIDATION_ERROR => 'api.validation_error',
        ApiCode::ERROR_CREDENTIALS => 'api.error_credentials',
        ApiCode::SUCCESS_APPOINTMENT => 'api.success_appointment',
        ApiCode::ERROR_APPOINTMENT => 'api.error_appointment',
        ApiCode::ERROR_IS_CREDENTIALS => 'api.error_is_credentials',
    ],

   
];
