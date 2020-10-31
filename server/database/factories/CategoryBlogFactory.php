<?php

namespace Database\Factories;

use App\Models\CategoryBlog;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CategoryBlogFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CategoryBlog::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->randomElement(
                array('Travel news', 'Resaurant food', 'Modern technology', 'Product', 'Inspiration')),
            'description' => $this->faker->title(),
            'parent_id' => $this->faker->randomDigitNot(5),
        ];
    }
}
