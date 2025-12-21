<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MedicalExamination extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'pet_id',
        'examination_date',
        'doctor_name',
        'diagnosis',
        'result',
        'recommendations',
        'status'
    ];

    protected $casts = [
        'examination_date' => 'date',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function pet(): BelongsTo
    {
        return $this->belongsTo(Pet::class);
    }
}
