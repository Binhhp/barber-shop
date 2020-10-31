<?php

namespace Database\Seeders;

use App\Models\TagBlog;
use Illuminate\Database\Seeder;

class TagBlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TagBlog::factory()->count(8)->create();
    }
}
