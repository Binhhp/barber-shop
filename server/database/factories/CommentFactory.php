<?php

namespace Database\Factories;

use App\Models\Comment;
use App\Models\Model;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CommentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Comment::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'content' => $this->faker->text(150),
            'status' => true,
            'cus_id' => $this->faker->numberBetween(1, 5),
            'blog_id' => $this->faker->numberBetween(1, 20)
        ];
    }
}
