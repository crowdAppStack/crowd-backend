<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\MainController;
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
        Route::post('/logout', [AuthController::class, 'logout'])->name('auth.logout')->middleware('auth:sanctum');
    });

    // Logged routes
    Route::group([
        'middleware' => 'auth:sanctum',
    ], function () {
        // User routes
        Route::get('/user', fn () => auth()->user()->auth_token)->name('user.show');
        Route::post('/user', fn () => auth()->user()->auth_token)->name('user.update');
    });
});
