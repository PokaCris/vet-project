<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;


class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'email',
        'first_name',
        'last_name',
        'phone',
        'password',
        'pet_name',
        'pet_type',
        'pet_birthday',
        'pet_weight',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];
}
