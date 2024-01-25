<?php

use App\Http\Controllers\AppController;
use Illuminate\Support\Facades\Route;

Route::get('/{any}', [AppController::class, 'serve'])->whereIn('any', [
'',
// ### DYNAMIC ROUTES START ###
'login'
// ### DYNAMIC ROUTES END ###
])->name('app');
