<?php

namespace App\Http\Controllers\Api;

use App\Events\EventTest;
use App\Http\Controllers\Controller;

class MainController extends Controller
{
    public function __invoke()
    {
        EventTest::dispatch();

        return response()->json([
            'message' => 'Hello World!',
        ]);
    }
}
