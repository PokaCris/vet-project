<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AppointmentController;
use App\Http\Controllers\Api\AuthController;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;

// CSRF cookie
Route::get('/sanctum/csrf-cookie', [CsrfCookieController::class, 'show']);

// Запись на прием
Route::resource('appointments', AppointmentController::class)->except(['edit', 'update', 'destroy']);

// Публичные маршруты
Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/register', [AuthController::class, 'register']);

// Защищенные маршруты
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/auth/me', [AuthController::class, 'me']);
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::post('/auth/update-pet', [AuthController::class, 'updatePet']); 
});