<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email|unique:users',
            'first_name' => 'required|string|max:255',
            'last_name' => 'nullable|string|max:255',
            'phone' => 'required|string|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $user = User::create([
            'email' => $request->email,
            'first_name' => $request->first_name,
            'last_name' => $request->last_name ?? null,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
        ]);

        Auth::login($user);

        return response()->json(
            [
                'message' => 'Успешная регистрация',
                'user' => $user
            ],
            201,
            ['Content-Type' => 'application/json; charset=utf-8'],
            JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
        );
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(
                ['message' => 'Неверный логин или пароль'],
                401,
                ['Content-Type' => 'application/json; charset=utf-8'],
                JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
            );
        }

        Auth::login($user);

        return response()->json(
            [
                'message' => 'Успешный вход',
                'user' => $user
            ],
            200,
            ['Content-Type' => 'application/json; charset=utf-8'],
            JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
        );
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(
            ['message' => 'Успешный выход'],
            200,
            ['Content-Type' => 'application/json; charset=utf-8'],
            JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
        )->withCookie(Cookie::forget(config('session.cookie')));
    }

    public function me()
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json(
                ['message' => 'Пользователь не авторизован'],
                401,
                ['Content-Type' => 'application/json; charset=utf-8'],
                JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
            );
        }

        return response()->json(
            $user,
            200,
            ['Content-Type' => 'application/json; charset=utf-8'],
            JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
        );
    }
}
