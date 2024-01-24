<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\MainController;

Route::get('/', MainController::class);

Route::group([
    'middleware' => 'auth:api',
], function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
