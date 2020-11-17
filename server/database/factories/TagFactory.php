<?php

namespace Database\Factories;

use App\Models\Model;
use App\Models\Tag;
use App\Models\TagBlog;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class TagFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Tag::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->randomElement([
                'project', 'love', 'technology', 'travel', 'restaurant', 'life style', 'design', 'illustration'
            ]),
            'description' => $this->faker->text(50)
        ];
    }
}
