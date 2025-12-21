<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AppointmentController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\MedicalExaminationController;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;

// CSRF cookie
Route::get('/sanctum/csrf-cookie', [CsrfCookieController::class, 'show']);

// Appointments
Route::resource('appointments', AppointmentController::class)->except(['edit', 'update', 'destroy']);

// Public routes
Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/register', [AuthController::class, 'register']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/auth/me', [AuthController::class, 'me']);
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::post('/auth/update-pet', [AuthController::class, 'updatePet']);

    Route::get('/auth/pets', [AuthController::class, 'getPets']);
    Route::post('/auth/pets', [AuthController::class, 'addPet']);
    Route::put('/auth/pets/{id}', [AuthController::class, 'updatePet']);
    Route::delete('/auth/pets/{id}', [AuthController::class, 'deletePet']);

    Route::get('/medical-examinations', [MedicalExaminationController::class, 'index']);
    Route::get('/medical-examinations/{id}', [MedicalExaminationController::class, 'show']);
});