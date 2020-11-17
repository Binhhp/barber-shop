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
        $appointment->status = 0;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/01/01";
        $appointment->time_id = 15;
        $appointment->ser_id = 1;
        $appointment->barber_id = 2;
        $appointment->cus_id = 1;
        $appointment->status = 0;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/01/01";
        $appointment->time_id = 12;
        $appointment->ser_id = 1;
        $appointment->barber_id = 5;
        $appointment->cus_id = 1;
        $appointment->status = 0;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/02/01";
        $appointment->time_id = 10;
        $appointment->ser_id = 2;
        $appointment->barber_id = 1;
        $appointment->cus_id = 1;
        $appointment->status = 1;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/02/01";
        $appointment->time_id = 16;
        $appointment->ser_id = 8;
        $appointment->barber_id = 4;
        $appointment->cus_id = 1;
        $appointment->status = 1;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/02/01";
        $appointment->time_id = 1;
        $appointment->ser_id = 2;
        $appointment->barber_id = 6;
        $appointment->cus_id = 1;
        $appointment->status = 1;
        $appointment->save();


        $appointment = new Appointment();
        $appointment->date = "2020/03/01";
        $appointment->time_id = 2;
        $appointment->ser_id = 2;
        $appointment->barber_id = 1;
        $appointment->cus_id = 1;
        $appointment->status = 0;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/03/01";
        $appointment->time_id = 10;
        $appointment->ser_id = 2;
        $appointment->barber_id = 2;
        $appointment->cus_id = 1;
        $appointment->status = 0;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/03/01";
        $appointment->time_id = 2;
        $appointment->ser_id = 2;
        $appointment->barber_id = 1;
        $appointment->cus_id = 1;
        $appointment->status = 0;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/04/01";
        $appointment->time_id = 2;
        $appointment->ser_id = 2;
        $appointment->barber_id = 1;
        $appointment->cus_id = 1;
        $appointment->status = 0;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/04/01";
        $appointment->time_id = 16;
        $appointment->ser_id = 4;
        $appointment->barber_id = 5;
        $appointment->cus_id = 1;
        $appointment->status = 0;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/04/01";
        $appointment->time_id = 2;
        $appointment->ser_id = 2;
        $appointment->barber_id = 1;
        $appointment->cus_id = 1;
        $appointment->status = 0;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/05/01";
        $appointment->time_id = 2;
        $appointment->ser_id = 9;
        $appointment->barber_id = 3;
        $appointment->cus_id = 1;
        $appointment->status = 0;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/06/01";
        $appointment->time_id = 18;
        $appointment->ser_id = 2;
        $appointment->barber_id = 6;
        $appointment->cus_id = 1;
        $appointment->status = 1;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/07/01";
        $appointment->time_id = 2;
        $appointment->ser_id = 2;
        $appointment->barber_id = 1;
        $appointment->cus_id = 1;
        $appointment->status = 1;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/07/01";
        $appointment->time_id = 14;
        $appointment->ser_id = 8;
        $appointment->barber_id = 1;
        $appointment->cus_id = 1;
        $appointment->status = 1;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/08/01";
        $appointment->time_id = 2;
        $appointment->ser_id = 2;
        $appointment->barber_id = 1;
        $appointment->cus_id = 1;
        $appointment->status = 1;
        $appointment->save();
        
        $appointment = new Appointment();
        $appointment->date = "2020/08/01";
        $appointment->time_id = 8;
        $appointment->ser_id = 2;
        $appointment->barber_id = 1;
        $appointment->cus_id = 1;
        $appointment->status = 1;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/08/01";
        $appointment->time_id = 15;
        $appointment->ser_id = 2;
        $appointment->barber_id = 1;
        $appointment->cus_id = 1;
        $appointment->status = 1;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/08/01";
        $appointment->time_id = 19;
        $appointment->ser_id = 2;
        $appointment->barber_id = 1;
        $appointment->cus_id = 1;
        $appointment->status = 1;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/09/01";
        $appointment->time_id = 9;
        $appointment->ser_id = 10;
        $appointment->barber_id = 1;
        $appointment->cus_id = 1;
        $appointment->status = 1;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/09/01";
        $appointment->time_id = 21;
        $appointment->ser_id = 1;
        $appointment->barber_id = 5;
        $appointment->cus_id = 1;
        $appointment->status = 1;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/09/01";
        $appointment->time_id = 2;
        $appointment->ser_id = 2;
        $appointment->barber_id = 1;
        $appointment->cus_id = 1;
        $appointment->status = 0;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/10/01";
        $appointment->time_id = 2;
        $appointment->ser_id = 2;
        $appointment->barber_id = 1;
        $appointment->cus_id = 1;
        $appointment->status = 1;
        $appointment->save();
        

        $appointment = new Appointment();
        $appointment->date = "2020/11/01";
        $appointment->time_id = 17;
        $appointment->ser_id = 6;
        $appointment->barber_id = 1;
        $appointment->cus_id = 1;
        $appointment->status = 1;
        $appointment->save();

        $appointment = new Appointment();
        $appointment->date = "2020/12/02";
        $appointment->time_id = 1;
        $appointment->ser_id = 6;
        $appointment->barber_id = 1;
        $appointment->cus_id = 1;
        $appointment->status = 1;
        $appointment->save();
    }
}
