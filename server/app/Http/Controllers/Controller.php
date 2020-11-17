<?php

namespace App\Http\Controllers;

use App\Service\Response;
use App\Mail\SendMail;
use App\Mail\SendNotification;
use App\Service\Common;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests, Response, SendMail, SendNotification, Common;
}
