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

    public function updatePet(Request $request): JsonResponse
    {
        $request->validate([
            'pet_name' => 'nullable|string|max:255',
            'pet_type' => 'nullable|string|max:100',
            'pet_birthday' => 'nullable|date',
            'pet_weight' => 'nullable|numeric|min:0|max:999.99',
        ]);

        if (!Auth::check()) {
            return new JsonResponse(['error' => 'Пользователь не аутентифицирован'], 401);
        }

        $user = Auth::user();

        if (!$user instanceof User) {
            return new JsonResponse(['error' => 'Неверный тип пользователя'], 401);
        }

        $user->pet_name = $request->pet_name;
        $user->pet_type = $request->pet_type;
        $user->pet_birthday = $request->pet_birthday;
        $user->pet_weight = $request->pet_weight;

        $user->save();

        return new JsonResponse([
            'user' => $user,
            'message' => 'Данные питомца обновлены'
        ]);
    }
}
