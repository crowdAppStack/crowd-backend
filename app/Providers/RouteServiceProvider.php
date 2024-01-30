<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to your application's "home" route.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/';

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     */
    public function boot(): void
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });

        $host = config('app.domain');

        $this->routes(function () use ($host) {
            // Make an exeption for sanctum with the middleware web but with
            // the domain api.{$host} instead of {$host}
            // Route::middleware('web')
            //     ->domain("api.{$host}")
            //     ->group(['prefix' => config('sanctum.prefix', 'sanctum')], function () use ($host) {
            //         Route::get('/csrf-cookie', [CsrfCookieController::class, 'show'])->name('sanctum.csrf-cookie');
            //     });

            Route::middleware('api')
                ->domain("api.{$host}")
                ->group(base_path('routes/api.php'));

            Route::middleware('web')
                ->domain("app.{$host}")
                ->group(base_path('routes/web.php'));
        });
    }
}
