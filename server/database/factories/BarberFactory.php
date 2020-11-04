<?php

namespace Database\Factories;

use App\Models\Barber;
use App\Models\Model;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class BarberFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Barber::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->firstName(),
            'phone_number' => $this->faker->phoneNumber(),
            'address' => $this->faker->streetAddress(),
            'email' => $this->faker->regexify('[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}'),
            'pos_id' => $this->faker->numberBetween(1, 3)
        ];
    }
}
