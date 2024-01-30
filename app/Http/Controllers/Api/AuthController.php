<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request): UserResource
    {
        $credentials = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['email', 'required', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        /** @var User $user */
        $user = User::create([
            'name' => $credentials['name'],
            'email' => $credentials['email'],
            'password' => $credentials['password'],
        ]);

        return new UserResource($user);
    }

    public function login(Request $request): UserResource|JsonResponse
    {
        if (Auth::guard('sanctum')->check()) {
            return response()->json([
                'message' => 'Already logged in',
            ], 400);
        }

        $credentials = $request->validate([
            'email' => ['email', 'required'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        if (! Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Invalid credentials',
            ], 401);
        }

        return new UserResource(Auth::user());
    }

    public function logout(Request $request): void
    {
        $request->user()->currentAccessToken()->delete();

        Auth::logout();
    }
}
