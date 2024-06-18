<?php

namespace Database\Seeders;

use App\Models\Announcement;
use App\Models\Notification;
use App\Models\RollCall;
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
        
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'admin@gmail.com',
            'role' => 'admin',
            'password' => '123',
        ]);
        
        User::factory()->create([
            'name' => 'Hazz',
            'email' => 'user@gmail.com',
            'password' => '123',
        ]);

        User::factory(10)->create();
        RollCall::factory(20)->create();
        Notification::factory(10)->create();
        Announcement::factory(5)->create();
    }
}
