<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AddSuccessToResponse
{
    private const HTTP_RESPONSE_OK = [
        Response::HTTP_OK,
        Response::HTTP_CREATED,
        Response::HTTP_ACCEPTED,
        Response::HTTP_NON_AUTHORITATIVE_INFORMATION,
        Response::HTTP_NO_CONTENT,
        Response::HTTP_RESET_CONTENT,
        Response::HTTP_PARTIAL_CONTENT,
        Response::HTTP_MULTI_STATUS,
        Response::HTTP_ALREADY_REPORTED,
        Response::HTTP_IM_USED,
    ];

    public function handle(Request $request, Closure $next): Response
    {
        return tap($next($request), function (Response $response) {
            $response->setContent(
                json_encode(
                    array_merge(
                        ['success' => in_array($response->getStatusCode(), self::HTTP_RESPONSE_OK)],
                        json_decode(json: $response->getContent(), associative: true),
                    )
                )
            );
        });
    }
}
