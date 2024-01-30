<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    // Attributes

    public function password(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $value,
            set: fn ($value) => Hash::make($value),
        );
    }

    public function authToken(): Attribute
    {
        return Attribute::make(
            get: function ($value) {
                return match ($value) {
                    null => $this->getAuthToken(),
                    default => $value,
                };
            },
        )->shouldCache();
    }

    // Methods

    public function getAuthToken(): string
    {
        $token = $this->createToken(name: 'api', expiresAt: now()->addYear())->plainTextToken;
        $this->auth_token = $token;
        $this->saveQuietly();

        return $token;
    }
}
