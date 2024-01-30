<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\MainController;
use Illuminate\Support\Facades\Route;

Route::get('/', MainController::class);

// Auth routes
Route::group([
    'prefix' => 'auth',
], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
});

// Logged routes
Route::group([
    'middleware' => 'auth:sanctum',
], function () {
    Route::get('/user', fn () => auth()->user());
});
