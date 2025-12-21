<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MedicalExamination;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MedicalExaminationController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $user = Auth::user();

        if (!$user) {
            return new JsonResponse(['error' => 'Пользователь не найден'], 401);
        }

        $examinations = MedicalExamination::where('user_id', $user->id)
            ->with('pet')
            ->orderBy('examination_date', 'desc')
            ->get();

        return new JsonResponse([
            'examinations' => $examinations
        ]);
    }

    public function show($id): JsonResponse
    {
        $user = Auth::user();

        if (!$user) {
            return new JsonResponse(['error' => 'Пользователь не найден'], 401);
        }

        $examination = MedicalExamination::where('user_id', $user->id)
            ->with('pet')
            ->find($id);

        if (!$examination) {
            return new JsonResponse(['error' => 'Запись не найдена'], 404);
        }

        return new JsonResponse([
            'examination' => $examination
        ]);
    }
}
