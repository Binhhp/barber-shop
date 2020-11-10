<?php

namespace Database\Seeders;

use App\Models\Barber;
use Faker\Factory;
use Illuminate\Database\Seeder;

class BarberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $arrImg = [
            'https://firebasestorage.googleapis.com/v0/b/barber-store-cadce.appspot.com/o/barbers%2F1.png?alt=media&token=108c9728-1da4-45e3-b761-9c6aa4aca750',
            'https://firebasestorage.googleapis.com/v0/b/barber-store-cadce.appspot.com/o/barbers%2F2.png?alt=media&token=afa7f4a4-19cc-4a99-ae93-83bdcbd2b232',
            'https://firebasestorage.googleapis.com/v0/b/barber-store-cadce.appspot.com/o/barbers%2F3.png?alt=media&token=8243fe02-2e2f-4f87-8175-5092703189cc',
            'https://firebasestorage.googleapis.com/v0/b/barber-store-cadce.appspot.com/o/barbers%2F4.png?alt=media&token=52dfc2b5-783a-4107-9ba9-9e80b7969c25',
        ];

        $faker = Factory::create();
        $i = 1;
        foreach($arrImg as $item){
            $barber = new Barber();
            $barber->name = $faker->firstName();
            $barber->imgPath = $item;
            $barber->imgName = $i.".png";
            $barber->phone_number = $faker->phoneNumber();
            $barber->address = $faker->streetAddress();
            $barber->email = $faker->regexify('[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}');
            $barber->pos_id = $faker->numberBetween(1, 3);
            $barber->save();
            $i += 1;
        }
    }
}
