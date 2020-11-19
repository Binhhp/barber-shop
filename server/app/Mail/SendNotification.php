<?php
namespace App\Mail;

use Exception;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;

trait SendNotification
{
    //Send mail using mail jet
    public function send_notification($mail)
    {
        try{

                $temp = Http::get('https://firebasestorage.googleapis.com/v0/b/barber-store-cadce.appspot.com/o/icon%2Fnewsletter.txt?alt=media&token=67834ec3-4137-4b5a-bc84-a5e7f73a1474');

                $result = str_replace('{{ url_base }}', $mail['url'], $temp);

                $body = [
                    'Messages' => [
                        [
                        'From' => [
                            'Email' => env('MAIL_JET_FROM_ADDRESS'),
                            'Name' => env('MAIL_JET_FROM_NAME')
                        ],
                        'To' => [
                            [
                            'Email' => $mail['email'],
                            'Name' => $mail['name']
                            ]
                        ],
                        'Subject' => "✨Notice from Barber Shop!💪",
                        'HTMLPart' => $result
                        ]
                    ]
                ];
        
                $client = new Client([
                    // Base URI is used with relative requests
                    'base_uri' => env('MAIL_JET_BASE_URI'),
                ]);
        
                $response = $client->request('POST', 'send', [
                    'json' => $body,
                    'auth' => [env('MAIL_JET_API_KEY'), env('MAIL_JET_SECRET')]
                ]);
        
                if($response->getStatusCode() == 200) {
                    $body = $response->getBody();
                    $response = json_decode($body);
                    if ($response->Messages[0]->Status == 'success') {
                        return true;
                    }
                }
                else{
                    return false;
                }
        }
        catch(Exception $ex){
            return false;
        }
    }
}
