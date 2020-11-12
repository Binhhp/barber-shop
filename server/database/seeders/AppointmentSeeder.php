<?php

namespace Database\Seeders;

use App\Models\Appointment;
use Illuminate\Database\Seeder;

class AppointmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $appointment = new Appointment();
        $appointment->date = "2020/01/01";
        $appointment->time_id = 2;
        $appointment->ser_id = 2;
        $appointment->barber_id = 1;
        $appointment->cus_id = 1;
        $appointment->status = 1;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/01/01";
        $appointment->time_id = 17;
        $appointment->ser_id = 6;
        $appointment->barber_id = 1;
        $appointment->cus_id = 1;
        $appointment->status = 1;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/01/02";
        $appointment->time_id = 1;
        $appointment->ser_id = 6;
        $appointment->barber_id = 1;
        $appointment->cus_id = 1;
        $appointment->status = 1;
        $appointment->save();
    }
}
