<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->name = 'Binh';
        $user->email = 'binhhp20@gmail.com';
        $user->password = Hash::make('Binhhp20@@');
        $user->role_id = 1;
        $user->save();
    }
}
