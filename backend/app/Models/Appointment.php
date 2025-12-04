<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    protected $table = 'appointments';
    protected $connection = 'mysql';
    
    protected $fillable = [
        'name',
        'phone', 
        'pet_info',
        'comment',
        'agreed_to_terms',
        'status',
    ];

    protected $casts = [
        'agreed_to_terms' => 'boolean',
    ];
}