<?php

namespace Database\Seeders;

use App\Models\CategoryBlog;
use App\Models\Service;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RoleSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(CategoryBlogSeeder::class);
        $this->call(BlogSeeder::class);
        $this->call(TagSeeder::class);
        $this->call(TagBlogSeeder::class);
        $this->call(CustomerSeeder::class);
        $this->call(CommentSeeder::class);
        $this->call(ServiceSeeder::class);
        $this->call(PositionSeeder::class);
        $this->call(BarberSeeder::class);
        $this->call(TimeSeeder::class);
        $this->call(AppointmentSeeder::class);

    }
}
