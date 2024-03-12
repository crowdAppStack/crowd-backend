<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\MainController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', fn () => redirect()->route('api.home'));

Route::group([
    'as' => 'api.',
    'prefix' => config('app.api_version'),
], function () {
    // Home api route
    Route::get('/', MainController::class)->name('home');

    // Auth routes
    Route::group([
        'prefix' => 'auth',
    ], function () {
        Route::post('login', [AuthController::class, 'login'])->name('auth.login');
        Route::post('register', [AuthController::class, 'register'])->name('auth.register');
        Route::post('logout', [AuthController::class, 'logout'])->name('auth.logout')->middleware('auth:sanctum');
        Route::get('me', UserController::class)->name('auth.me')->middleware('auth:sanctum');
    });

    // Logged routes
    Route::group([
        'middleware' => 'auth:sanctum',
    ], function () {

    });
});
