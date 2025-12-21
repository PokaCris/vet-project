<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Pet;
use App\Models\MedicalExamination;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        
        MedicalExamination::query()->delete();
        Pet::query()->delete();
        User::query()->delete();
        
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $users = [
            [
                'email' => 'ivanov@example.com',
                'first_name' => 'Иван',
                'last_name' => 'Иванов',
                'phone' => '+79161234567',
                'password' => Hash::make('password123'),
                'created_at' => now()->subMonths(6),
            ],
            [
                'email' => 'petrova@example.com',
                'first_name' => 'Анна',
                'last_name' => 'Петрова',
                'phone' => '+79267654321',
                'password' => Hash::make('password123'),
                'created_at' => now()->subMonths(4),
            ],
            [
                'email' => 'sidorov@example.com',
                'first_name' => 'Петр',
                'last_name' => 'Сидоров',
                'phone' => '+79039876543',
                'password' => Hash::make('password123'),
                'created_at' => now()->subMonths(2),
            ],
        ];

        foreach ($users as $userData) {
            $user = User::create($userData);

            $this->createPetsForUser($user);
            
            $this->createExaminationsForUser($user);
        }
    }

    private function createPetsForUser(User $user): void
    {
        if ($user->email === 'ivanov@example.com') {
            $pets = [
                [
                    'name' => 'Барсик',
                    'type' => 'Кошка',
                    'birthday' => '2020-05-15',
                    'weight' => 4.5,
                ],
            ];
        } elseif ($user->email === 'petrova@example.com') {
            $pets = [
                [
                    'name' => 'Шарик',
                    'type' => 'Собака',
                    'birthday' => '2019-08-20',
                    'weight' => 12.3,
                ],
                [
                    'name' => 'Мурка',
                    'type' => 'Кошка',
                    'birthday' => '2021-03-10',
                    'weight' => 3.8,
                ],
            ];
        } else {
            $pets = [
                [
                    'name' => 'Кеша',
                    'type' => 'Птица',
                    'birthday' => '2022-01-30',
                    'weight' => 0.15,
                ],
                [
                    'name' => 'Рекс',
                    'type' => 'Собака',
                    'birthday' => '2018-11-05',
                    'weight' => 15.7,
                ],
                [
                    'name' => 'Вася',
                    'type' => 'Грызун',
                    'birthday' => '2023-02-14',
                    'weight' => 0.3,
                ],
            ];
        }
        
        foreach ($pets as $petData) {
            $user->pets()->create($petData);
        }
    }

    private function createExaminationsForUser(User $user): void
    {
        $pets = $user->pets;
        
        if ($user->email === 'ivanov@example.com') {
            $examinations = [
                [
                    'pet_id' => $pets->first()->id,
                    'examination_date' => '2024-12-10',
                    'doctor_name' => 'Иванов Иван Иванович',
                    'diagnosis' => 'Плановый осмотр',
                    'result' => 'Животное здорово. Все показатели в норме. Рекомендовано контрольное посещение через 6 месяцев.',
                    'recommendations' => 'Продолжать текущий режим питания и прогулок.',
                    'status' => 'completed',
                ],
                [
                    'pet_id' => $pets->first()->id,
                    'examination_date' => '2024-11-05',
                    'doctor_name' => 'Петрова Анна Сергеевна',
                    'diagnosis' => 'Повторный прием',
                    'result' => 'Проведена комплексная вакцинация. Животное перенесло процедуру хорошо.',
                    'recommendations' => 'Наблюдать за состоянием в течение 24 часов. Ограничить физические нагрузки на 2 дня.',
                    'status' => 'completed',
                ],
                [
                    'pet_id' => $pets->first()->id,
                    'examination_date' => '2024-10-15',
                    'doctor_name' => 'Сидоров Петр Константинович',
                    'diagnosis' => 'Консультация по питанию',
                    'result' => 'Проведен анализ рациона. Выявлен избыток углеводов.',
                    'recommendations' => 'Перейти на корм премиум-класса для собак старше 3 лет. Увеличить продолжительность прогулок.',
                    'status' => 'completed',
                ],
            ];
        } elseif ($user->email === 'petrova@example.com') {
            $examinations = [
                [
                    'pet_id' => $pets->first()->id,
                    'examination_date' => '2024-12-05',
                    'doctor_name' => 'Петрова Анна Сергеевна',
                    'diagnosis' => 'Первичный прием',
                    'result' => 'Выявлена аллергия на определенные компоненты корма. Взяты пробы для анализа.',
                    'recommendations' => 'Исключить курицу из рациона. Давать антигистаминные препараты 2 раза в день в течение недели.',
                    'status' => 'completed',
                ],
                [
                    'pet_id' => $pets->get(1)->id,
                    'examination_date' => '2024-11-20',
                    'doctor_name' => 'Иванов Иван Иванович',
                    'diagnosis' => 'Вакцинация',
                    'result' => 'Операция проведена успешно. Швы в хорошем состоянии.',
                    'recommendations' => 'Обрабатывать швы антисептиком 2 раза в день. Носить защитный воротник в течение 10 дней.',
                    'status' => 'completed',
                ],
            ];
        } else {
            $examinations = [];
        }
        
        foreach ($examinations as $examData) {
            $user->medicalExaminations()->create($examData);
        }
    }
}