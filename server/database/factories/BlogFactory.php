<?php

namespace Database\Factories;

use App\Models\Blog;
use App\Models\Model;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class BlogFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Blog::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(),
            'description' => $this->faker->text(100),
            'imgPath' => $this->faker->imageUrl(),
            'imgName' => "image.jpg",
            'content' => $this->faker->text(),
            'view' => $this->faker->numberBetween(1, 10000),
            'like' => $this->faker->numberBetween(1, 10000),
            'cate_id' => $this->faker->numberBetween(1, 5),
            'status' => '1',             
        ];
    }
}
