<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Handler extends ExceptionHandler
{
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    public function register(): void
    {
        $this->renderable(function (NotFoundHttpException $e): JsonResponse|RedirectResponse {
            $routeRequested = request()->path();
            if (request()->acceptsJson() && request()->isJson()) {
                return response()->json([
                    'message' => "Route '/{$routeRequested}' not found. Please check your request URL",
                ], 404);
            } else {
                return back();
            }
        });
    }
}
