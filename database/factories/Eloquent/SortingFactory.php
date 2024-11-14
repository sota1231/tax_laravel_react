<?php

namespace Database\Factories\Eloquent;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class SortingFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $num = fake()->randomNumber();
        return [
            'user_id'=>1,
            'balance'=>fake()->numberBetween(0,1),
            'kari_name_id' => fake()->numberBetween(1,11),
            'kari_price' => $num,
            'kashi_name_id' => fake()->numberBetween(1,11),
            'kashi_price' => $num,
            'remarks'=>fake()->text(9),
            'day' => fake()->date(),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */

}
