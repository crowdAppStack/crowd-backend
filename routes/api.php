<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// To test the API - TO REMOVE LATER
Route::get('/test', function () {
    return response()->json([
        'message' => 'Hello World!',
    ], 200);
});
