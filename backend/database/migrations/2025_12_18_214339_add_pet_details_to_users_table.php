<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('pet_name')->nullable()->after('phone');
            $table->string('pet_type')->nullable()->after('pet_name');
            $table->date('pet_birthday')->nullable()->after('pet_type');
            $table->decimal('pet_weight', 5, 2)->nullable()->after('pet_birthday');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'pet_name', 
                'pet_type', 
                'pet_birthday', 
                'pet_weight'
            ]);
        });
    }
};
