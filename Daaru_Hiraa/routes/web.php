<?php

use App\Http\Controllers\DendaController;
use App\Http\Controllers\GuideCOntroller;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InventryReportController;
use App\Http\Controllers\PiketController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProgressController;
use App\Http\Controllers\SholatController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect("/", '/home');

Route::middleware(['auth','verified'])->group(function () {
    // Route::get('/dashboard', fn () => Inertia::render('Dashboard'))->name('dashboard');

//member
    Route::resource('home', UserController::class);
    Route::resource('denda', DendaController::class);
    Route::resource('jadwal', SholatController::class);
    Route::resource('progress', ProgressController::class); 
    Route::resource('piket', PiketController::class);
    Route::resource('inventaris', InventryReportController::class);
    Route::resource('guide', GuideCOntroller::class); 

    Route::resource('admin', HomeController::class)->middleware('admin');

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
