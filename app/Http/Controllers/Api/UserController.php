<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;

class UserController extends Controller
{
    /**
     * Get the authenticated user.
     */
    public function __invoke()
    {
        return new UserResource(auth()->user());
    }
}
