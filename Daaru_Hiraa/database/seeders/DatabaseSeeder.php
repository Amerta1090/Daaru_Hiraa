<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => '    @gmail.com',
            'role' => 'admin',
            'password' => '123',
        ]);

        User::factory()->create([
            'name' => 'Hazz',
            'email' => 'user@gmail.com',
            'password' => '123',
        ]);
    }
}
