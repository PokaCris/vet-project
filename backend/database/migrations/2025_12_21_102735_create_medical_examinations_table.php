<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('medical_examinations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('pet_id')->nullable()->constrained()->onDelete('set null');
            $table->date('examination_date');
            $table->string('doctor_name');
            $table->string('diagnosis');
            $table->text('result');
            $table->text('recommendations')->nullable();
            $table->enum('status', ['scheduled', 'in_progress', 'completed'])->default('completed');
            $table->timestamps();
            
            $table->index('user_id');
            $table->index('examination_date');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('medical_examinations');
    }
};
