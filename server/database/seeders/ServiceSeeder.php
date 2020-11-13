<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $arrImg = [
            'https://firebasestorage.googleapis.com/v0/b/barber-store-cadce.appspot.com/o/services%2F1.png?alt=media&token=a174b6ca-6c9b-4536-8898-0435b54de8a8',
            'https://firebasestorage.googleapis.com/v0/b/barber-store-cadce.appspot.com/o/services%2F2.png?alt=media&token=fe20f4fe-9fb3-47bd-a87b-078d7494096c',
            'https://firebasestorage.googleapis.com/v0/b/barber-store-cadce.appspot.com/o/services%2F3.png?alt=media&token=1663fb77-88d5-4d62-8de2-8092094de222',
            'https://firebasestorage.googleapis.com/v0/b/barber-store-cadce.appspot.com/o/services%2F4.png?alt=media&token=e41307f4-937d-44a8-a44b-41856dbfe54c',
            'https://firebasestorage.googleapis.com/v0/b/barber-store-cadce.appspot.com/o/services%2F5.png?alt=media&token=085ecfc2-4fbf-4a4a-94d7-a336bdc8cec5',
            'https://firebasestorage.googleapis.com/v0/b/barber-store-cadce.appspot.com/o/services%2F6.png?alt=media&token=00854df6-3fe6-4999-a635-0b70995fee54',
            'https://firebasestorage.googleapis.com/v0/b/barber-store-cadce.appspot.com/o/services%2F7.png?alt=media&token=2bdabf7a-a1d3-4f5d-889e-44b3d807f0d4',
            'https://firebasestorage.googleapis.com/v0/b/barber-store-cadce.appspot.com/o/services%2F8.png?alt=media&token=ff4d46e1-d8f3-4376-b5bb-512476b53e38',
            'https://firebasestorage.googleapis.com/v0/b/barber-store-cadce.appspot.com/o/services%2F9.png?alt=media&token=f69bb4b0-fbef-4944-b400-a12f235ddba3',
            'https://firebasestorage.googleapis.com/v0/b/barber-store-cadce.appspot.com/o/services%2F10.png?alt=media&token=debd493b-0f06-45c0-88d9-58b7147e1360',
            
        ];

        $ser = ['Men’s Facial','Clean Cut','Close Shave',
        'Razor Cut','Face Massage','Classic haircut','Haircut and shampoo','Hair treatment',
        'Beard trimming','Beard and moustache'];


        $times = [1.5, 0.5, 0.5, 1, 1, 1.5, 1, 0.5, 0.5, 1];

        $i = 0;
        $faker = \Faker\Factory::create();

        foreach($ser as $item){
            $service = new Service();
            $service->name = $item;
            $service->description = $faker->text(100);
            $service->price = $faker->numberBetween(1, 100000);
            $service->imgPath = $arrImg[$i];
            $service->imgName = ($i + 1).".png";
            $service->time = $times[$i];
            $i += 1;
            $service->save();
        }
    }
}
