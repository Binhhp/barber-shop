<?php

namespace Database\Seeders;

use App\Models\CategoryBlog;
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
    }
}
