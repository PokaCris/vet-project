<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{

    public function me(Request $request): JsonResponse
    {
        return new JsonResponse([
            'user' => $request->user(),
            'session' => session()->all()
        ]);
    }

    public function login(Request $request): JsonResponse
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($request->only('email', 'password'))) {
            $request->session()->regenerate();

            return new JsonResponse([
                'user' => Auth::user(),
                'message' => 'Успешный вход'
            ]);
        }

        throw ValidationException::withMessages([
            'email' => ['Неверный email или пароль'],
        ]);
    }

    public function register(Request $request): JsonResponse
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
            'phone' => 'required|string|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name ?? null,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
            'pet_name' => $request->pet_name ?? null,
            'pet_type' => $request->pet_type ?? null,
        ]);

        Auth::login($user);
        $request->session()->regenerate();

        return new JsonResponse([
            'user' => $user,
            'message' => 'Регистрация успешна'
        ]);
    }

    public function logout(Request $request): JsonResponse
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return new JsonResponse(['message' => 'Успешный выход']);
    }
}