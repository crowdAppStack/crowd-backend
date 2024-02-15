<?php

namespace App\Providers;

use App\Enums\DomainPrefix;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class BroadcastServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $host = config('app.domain');

        Route::domain(DomainPrefix::API->value . '.' . $host)->group(function () {
            Route::group([
                'as' => 'api.',
                'prefix' => config('app.api_version'),
            ], function () {
                Broadcast::routes(['middleware' => ['auth:sanctum']]);
            });
        });

        require base_path('routes/channels.php');
    }
}
