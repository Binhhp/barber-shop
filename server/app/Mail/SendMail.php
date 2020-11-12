<?php
namespace App\Mail;

use Exception;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;

trait SendMail
{
    //Send mail using mail jet
    public function send_mail($mail)
    {
        try{
            // $temp = file_get_contents(base_path('public\mail\send_mail.html'));
                $temp = Http::get('https://firebasestorage.googleapis.com/v0/b/barber-store-cadce.appspot.com/o/mail.txt?alt=media&token=365a824e-37ca-4502-9c7a-cf46f2bbeea2');
                $search = [
                    '{{ name }}', 
                    '{{ phone_number }}', 
                    '{{ time }}', 
                    '{{ date }}', 
                    '{{ service }}',
                    '{{ barber }}', 
                    '{{ address }}',
                    '{{ url }}',
                ];
                $replace = [ 
                    $mail['name'], 
                    $mail['phone_number'], 
                    $mail['time'], 
                    $mail['date'], 
                    $mail['service'], 
                    $mail['barber'], 
                    $mail['address'],
                    $mail['url'],
                ];

                $result = str_replace($search, $replace, $temp);

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
                        'Subject' => "Thanks you from Barber Shop!",
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
