<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{

    protected $fillable = [
        'email',
        'first_name',
        'last_name',
        'phone',
        'password',
        'pet_name',
        'pet_type',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];
}
