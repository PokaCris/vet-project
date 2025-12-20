<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Pet;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{

    public function me(Request $request): JsonResponse
    {
        $user = $request->user();
        
        $userWithPets = User::with('pets')->find($user->id);
        
        return new JsonResponse([
            'user' => $userWithPets,
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
            
            $user = User::with('pets')->find(Auth::id());

            return new JsonResponse([
                'user' => $user,
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

        if ($request->has('pet_name') && $request->has('pet_type')) {
            Pet::create([
                'user_id' => $user->id,
                'name' => $request->pet_name,
                'type' => $request->pet_type,
                'birthday' => $request->pet_birthday ?? null,
                'weight' => $request->pet_weight ?? null,
            ]);
        }

        Auth::login($user);
        $request->session()->regenerate();

        $userWithPets = User::with('pets')->find($user->id);

        return new JsonResponse([
            'user' => $userWithPets,
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

    public function getPets(Request $request): JsonResponse
    {
        $user = Auth::user();
        
        if (!$user) {
            return new JsonResponse(['error' => 'Пользователь не найден'], 401);
        }

        $pets = Pet::where('user_id', $user->id)->get();

        return new JsonResponse([
            'pets' => $pets
        ]);
    }

    public function addPet(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:100',
            'birthday' => 'nullable|date',
            'weight' => 'nullable|numeric|min:0|max:999.99',
        ]);

        $user = Auth::user();

        if (!$user) {
            return new JsonResponse(['error' => 'Пользователь не найден'], 401);
        }

        $petCount = Pet::where('user_id', $user->id)->count();
        
        if ($petCount >= 3) {
            return new JsonResponse(['error' => 'Можно добавить не более 3 питомцев в одном аккаунте'], 422);
        }

        $pet = Pet::create([
            'user_id' => $user->id,
            'name' => $request->name,
            'type' => $request->type,
            'birthday' => $request->birthday,
            'weight' => $request->weight,
        ]);

        return new JsonResponse([
            'pet' => $pet,
            'message' => 'Питомец добавлен'
        ]);
    }

    public function updatePet(Request $request, $id): JsonResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:100',
            'birthday' => 'nullable|date',
            'weight' => 'nullable|numeric|min:0|max:999.99',
        ]);

        $user = Auth::user();

        if (!$user) {
            return new JsonResponse(['error' => 'Пользователь не найден'], 401);
        }

        $pet = Pet::where('user_id', $user->id)->find($id);

        if (!$pet) {
            return new JsonResponse(['error' => 'Питомец не найден'], 404);
        }

        $pet->update([
            'name' => $request->name,
            'type' => $request->type,
            'birthday' => $request->birthday,
            'weight' => $request->weight,
        ]);

        return new JsonResponse([
            'pet' => $pet,
            'message' => 'Данные питомца обновлены'
        ]);
    }

    public function deletePet($id): JsonResponse
    {
        $user = Auth::user();

        if (!$user) {
            return new JsonResponse(['error' => 'Пользователь не найден'], 401);
        }

        $pet = Pet::where('user_id', $user->id)->find($id);

        if (!$pet) {
            return new JsonResponse(['error' => 'Питомец не найден'], 404);
        }

        $pet->delete();

        return new JsonResponse([
            'message' => 'Питомец удален'
        ]);
    }
}