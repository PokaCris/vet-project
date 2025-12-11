<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'login' => 'test',
            'phone' => '+79991234567',
            'password' => Hash::make('123456'),
            'pet_name' => 'Шарик',
            'pet_type' => 'Собака',
        ]);

        User::create([
            'login' => 'user2',
            'phone' => '+79997654321',
            'password' => Hash::make('123456'),
            'pet_name' => 'Мурка',
            'pet_type' => 'Кошка',
        ]);
    }
}