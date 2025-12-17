<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'message' => 'VetClinic API',
        'version' => '1.0',
        'status' => 'online'
    ]);
});

Route::get('/health', function () {
    return response()->json(['status' => 'healthy']);
});

Route::get('/storage/{path}', function ($path) {
    $filePath = storage_path('app/public/' . $path);
    
    if (!file_exists($filePath)) {
        abort(404);
    }
    
    return response()->file($filePath);
})->where('path', '.*');