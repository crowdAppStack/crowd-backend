<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    /**
     * Register a new user.
     */
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

    /**
     * Log the user in.
     */
    public function login(Request $request): UserResource|JsonResponse
    {
        if (Auth::guard('sanctum')->check()) {
            return response()->json([
                'message' => 'Already logged in',
            ], Response::HTTP_BAD_REQUEST);
        }

        $credentials = $request->validate([
            'email' => ['email', 'required'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        if (! Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Invalid credentials',
            ], Response::HTTP_UNAUTHORIZED);
        }

        return new UserResource(Auth::user());
    }
    /**
     * Log the user out.
     * @header Accept application/json
     * @header Authorization Bearer {auth_token}
     */
    public function logout(Request $request, Authenticatable $user): JsonResponse
    {
        /** @var User $user */
        $user->tokens()->delete();
        $user->auth_token = null;
        $user->saveQuietly();

        Auth::guard('web')->logout();

        return response()->json([
            'message' => 'Logged out',
        ], Response::HTTP_OK);
    }
}
