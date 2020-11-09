<?php

namespace Database\Factories;

use App\Models\Model;
use App\Models\Time;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class TimeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Time::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'h_des' => $this->faker->randomElement(
                array('8h00', '8h15', '8h30', '8h45', '9h'
            )),
            'h' => $this->faker->randomElement(
                array('8.00', '8.25', '8.5', '8.75', '9.00')
            )
        ];
    }
}
