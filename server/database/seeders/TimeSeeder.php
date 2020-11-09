<?php

namespace Database\Seeders;

use App\Models\Time;
use Illuminate\Database\Seeder;

class TimeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $array = array(
            '8h00', '8h15', '8h30', '8h45', 
            '9h00', '9h15', '9h30', '9h45',
            '10h00', '10h15', '10h30', '10h45', 
            '11h00', '11h15', '11h30', '11h45', 
            '12h00', '12h15', '12h30', '12h45', 
            '13h00', '13h15', '13h30', '13h45', 
            '14h00', '14h15', '14h30', '14h45', 
            '15h00', '15h15', '15h30', '15h45', 
            '16h00', '16h15', '16h30', '16h45', 
            '17h00', '17h15', '17h30', '17h45', 
            '18h00', '18h15', '18h30', '18h45', 
            '19h00', '19h15', '19h30', '19h45', 
            '20h00', '20h15', '20h30', '20h45',
            '21h00', '21h15', '21h30', '21h45',
        );

        $h = 7.75;
        foreach($array as $k){
            $h += 0.25;
            $time = new Time();
            $time->h_des = $k;
            $time->h = $h;
            $time->save();
        }

    }
}
