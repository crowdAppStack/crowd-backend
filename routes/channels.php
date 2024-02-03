<?php

use App\Models\User;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

$host = config('app.domain');

Route::domain("api.{$host}")->group(function () {
    Route::group([
        'as' => 'api.',
        'prefix' => config('app.api_version'),
    ], function () {
        Broadcast::routes(['middleware' => ['auth:sanctum']]);
    });
});

Broadcast::channel('user.{id}', function (User $user, $id) {
    return (int) $user->id === (int) $id;
});
