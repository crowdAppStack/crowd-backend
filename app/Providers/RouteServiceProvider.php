<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

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
            Route::middleware('web')->domain($host)->group(function () {
                Route::get('/', fn () => redirect()->route('app', ['any' => '/']));
                Route::get('/{any}', fn (string $any) => redirect()->route('app', ['any' => $any]));
            });

            Route::middleware('api')
                ->domain("api.{$host}")
                ->group(base_path('routes/api.php'));

            Route::middleware('web')
                ->domain("app.{$host}")
                ->group(base_path('routes/web.php'));
        });
    }
}
