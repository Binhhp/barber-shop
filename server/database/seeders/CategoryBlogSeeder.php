<?php

namespace Database\Seeders;

use App\Models\CategoryBlog;
use Illuminate\Database\Seeder;

class CategoryBlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CategoryBlog::factory()->count(5)->create();
    }
}
