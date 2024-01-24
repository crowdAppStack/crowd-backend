<?php

use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;

// All routes should serves app view
Route::get('/{any}', [MainController::class, 'serveApp'])->where('any', '.*')->name('app');
