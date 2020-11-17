<?php

namespace Database\Factories;

use App\Models\Model;
use App\Models\TagBlog;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class TagBlogFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = TagBlog::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'tag_id' => $this->faker->numberBetween(1, 8),
            'blog_id' => $this->faker->numberBetween(1, 20)
        ];
    }
}
