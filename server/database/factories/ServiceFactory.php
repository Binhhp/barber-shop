<?php

namespace Database\Factories;

use App\Models\Model;
use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ServiceFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Service::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->randomElement(array('Men’s Facial','Clean Cut','Close Shave',
            'Razor Cut','Face Massage','Classic haircut','Haircut and shampoo','Hair treatment',
            'Beard trimming','Beard and moustache')),
            'description' => $this->faker->text(100),
            'price' => $this->faker->numberBetween(1, 100000),
            'imgPath' => $this->faker->imageUrl()
        ];
    }
}
