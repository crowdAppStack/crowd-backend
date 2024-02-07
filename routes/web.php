<?php

use App\Http\Controllers\AppController;
use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;

$host = config('app.domain');

Route::get('/{any}', [AppController::class, 'serve'])->whereIn('any', [
    '',
    'login',
    'profile',
])->name('app');

// Here's is all the routes that needs the web middleware but with the domain api.{$host}
Route::domain("api.{$host}")->group(function () {
    Route::group([
        'as' => 'api.',
        'prefix' => config('app.api_version'),
    ], function () {
        Route::get('csrf-cookie', [CsrfCookieController::class, 'show'])->name('api.sanctum.csrf-cookie');
    });
});
