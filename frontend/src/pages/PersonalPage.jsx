import { useState, useEffect } from 'react';
import { Container, Card, Alert, Spinner, ListGroup, Badge, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import PetModal from '../components/PetModal/PetModal';
import { apiPost } from '../services/api';

const PersonalPage = () => {
    const { user, loading, refreshUser } = useAuth();
    const [examinations, setExaminations] = useState([]);
    const [showPetModal, setShowPetModal] = useState(false);
    const navigate = useNavigate();

    const handlePetSuccess = async () => {
        await refreshUser();
        setShowPetModal(false);
    };

    const removePetInfo = async () => {
        if (window.confirm('Вы уверены, что хотите удалить данные питомца?')) {
            try {
                await apiPost('/api/auth/update-pet', {
                    pet_name: null,
                    pet_type: null,
                    pet_birthday: null,
                    pet_weight: null
                });
                
                await refreshUser();
                
            } catch (error) {
                console.error('Ошибка удаления:', error);
                alert('Ошибка при удалении данных питомца');
            }
        }
    };

    const formatPhone = (phone) => {
        if (!phone) return 'Не указан';

        if (phone.includes('(')) return phone;

        const numbers = phone.replace(/\D/g, '');
        if (numbers.length !== 11) return phone;

        return `+7 (${numbers.substring(1, 4)}) ${numbers.substring(4, 7)}-${numbers.substring(7, 9)}-${numbers.substring(9, 11)}`;
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        return new Date(dateString).toLocaleDateString('ru-RU');
    };

    const getTestExaminations = (userId) => {
        const testData = {
            1: [
                {
                    id: 1,
                    date: '2024-12-10',
                    doctor: 'Иванов Иван Иванович',
                    diagnosis: 'Плановый осмотр',
                    result: 'Животное здорово. Все показатели в норме. Рекомендовано контрольное посещение через 6 месяцев.',
                    recommendations: 'Продолжать текущий режим питания и прогулок.',
                    status: 'completed'
                },
                {
                    id: 2,
                    date: '2024-11-05',
                    doctor: 'Петрова Анна Сергеевна',
                    diagnosis: 'Вакцинация',
                    result: 'Проведена комплексная вакцинация. Животное перенесло процедуру хорошо.',
                    recommendations: 'Наблюдать за состоянием в течение 24 часов. Ограничить физические нагрузки на 2 дня.',
                    status: 'completed'
                },
                {
                    id: 3,
                    date: '2024-10-15',
                    doctor: 'Сидоров Петр Константинович',
                    diagnosis: 'Консультация по питанию',
                    result: 'Проведен анализ рациона. Выявлен избыток углеводов.',
                    recommendations: 'Перейти на корм премиум-класса для собак старше 3 лет. Увеличить продолжительность прогулок.',
                    status: 'completed'
                }
            ],
            2: [
                {
                    id: 4,
                    date: '2024-12-05',
                    doctor: 'Петрова Анна Сергеевна',
                    diagnosis: 'Аллергическая реакция',
                    result: 'Выявлена аллергия на определенные компоненты корма. Взяты пробы для анализа.',
                    recommendations: 'Исключить курицу из рациона. Давать антигистаминные препараты 2 раза в день в течение недели.',
                    status: 'completed'
                },
                {
                    id: 5,
                    date: '2024-11-20',
                    doctor: 'Иванов Иван Иванович',
                    diagnosis: 'Стерилизация',
                    result: 'Операция проведена успешно. Швы в хорошем состоянии.',
                    recommendations: 'Обрабатывать швы антисептиком 2 раза в день. Носить защитный воротник в течение 10 дней.',
                    status: 'completed'
                }
            ]
        };

        return testData[userId] || [];
    };

    useEffect(() => {
        if (!loading && !user) {
            navigate('/');
            return;
        }

        if (user) {
            const userExaminations = getTestExaminations(user.id);
            setExaminations(userExaminations);
        }
    }, [user, loading, navigate]);

    if (loading) {
        return (
            <Container className="mt-5 text-center">
                <Spinner animation="border" variant="success" />
                <p className="mt-3">Загрузка данных...</p>
            </Container>
        );
    }

    if (!user) {
        return null;
    }

    const getStatusBadge = (status) => {
        switch (status) {
            case 'completed':
                return <Badge bg="success">Завершено</Badge>;
            case 'in_progress':
                return <Badge bg="warning">В процессе</Badge>;
            case 'scheduled':
                return <Badge bg="info">Запланировано</Badge>;
            default:
                return <Badge bg="secondary">{status}</Badge>;
        }
    };

    return (
        <Container className="mt-4 mb-5">
            <h1 className="mb-4 text-success">Личный кабинет</h1>

            <Card className="mb-4 shadow-sm">
                <Card.Header className="bg-success text-white">
                    <h5 className="mb-0"> Информация о владельце и питомце</h5>
                </Card.Header>
                <Card.Body>
                    <div className="row">
                        <div className="col-md-6">
                            <h6 className="border-bottom pb-2">Данные владельца:</h6>
                            <p><strong>Имя:</strong> {user.first_name}</p>
                            {user.last_name && <p><strong>Фамилия:</strong> {user.last_name}</p>}
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Телефон:</strong> {formatPhone(user.phone)}</p>
                            <p><strong>Дата регистрации:</strong> {formatDate(user.created_at)}</p>
                        </div>
                        <div className="col-md-6">
                            <h6 className="border-bottom pb-2 d-flex justify-content-between align-items-center">
                                <span>Данные питомца:</span>
                                {user.pet_name && user.pet_type && (
                                    <Button
                                        variant="outline-success"
                                        size="sm"
                                        onClick={() => setShowPetModal(true)}
                                    >
                                        Изменить
                                    </Button>
                                )}
                            </h6>
                            {user.pet_name && user.pet_type ? (
                                <>
                                    <p><strong>Имя питомца:</strong> {user.pet_name}</p>
                                    <p><strong>Вид животного:</strong> {user.pet_type}</p>
                                    {user.pet_birthday && (
                                        <p><strong>Дата рождения:</strong> {formatDate(user.pet_birthday)}</p>
                                    )}
                                    {user.pet_weight && (
                                        <p><strong>Вес:</strong> {user.pet_weight} кг</p>
                                    )}
                                    <Button
                                        variant="outline-danger"
                                        size="sm"
                                        className="mt-2"
                                        onClick={removePetInfo}
                                    >
                                        Удалить данные питомца
                                    </Button>
                                </>
                            ) : (
                                <Alert variant="secondary" className="mt-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <small>Информация о питомце не указана.</small>
                                        <Button
                                            variant="success"
                                            size="sm"
                                            onClick={() => setShowPetModal(true)}
                                        >
                                            Добавить
                                        </Button>
                                    </div>
                                </Alert>
                            )}
                        </div>
                    </div>
                </Card.Body>
            </Card>

            <Card className="shadow-sm">
                <Card.Header className="bg-success text-white">
                    <h5 className="mb-0"> Результаты осмотров и исследования</h5>
                </Card.Header>
                <Card.Body>
                    {examinations.length > 0 ? (
                        <>
                            <Alert variant="secondary" className="mb-4">
                                Здесь хранятся результаты всех посещений ветеринарной клиники.
                                Всего записей: <strong>{examinations.length}</strong>
                            </Alert>

                            <ListGroup variant="flush">
                                {examinations.map((exam) => (
                                    <ListGroup.Item key={exam.id} className="mb-3 border rounded">
                                        <div className="d-flex justify-content-between align-items-start mb-2">
                                            <div>
                                                <h5 className="mb-1">{exam.diagnosis}</h5>
                                                <small className="text-muted d-block">
                                                    <strong>Дата:</strong> {exam.date}
                                                </small>
                                                <small className="text-muted">
                                                    <strong>Врач:</strong> {exam.doctor}
                                                </small>
                                            </div>
                                            <div>
                                                {getStatusBadge(exam.status)}
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <h6 className="text-success">Результат осмотра:</h6>
                                            <p className="mb-3">{exam.result}</p>

                                            <h6 className="text-success">Рекомендации:</h6>
                                            <p className="mb-0">{exam.recommendations}</p>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </>
                    ) : (
                        <Alert variant="warning">
                            <h6>Записей об осмотрах пока нет</h6>
                            <p className="mb-0">
                                После посещения ветеринарной клиники результаты осмотров появятся здесь.
                                Вы можете записаться на прием через нашу онлайн-запись.
                            </p>
                        </Alert>
                    )}

                    {user && examinations.length === 0 && (
                        <Alert variant="success" className="mt-3">
                            <h6>Добро пожаловать!</h6>
                            <p className="mb-0">
                                Вы успешно зарегистрировались в системе. После первого посещения клиники
                                здесь появятся результаты осмотра вашего питомца.
                            </p>
                        </Alert>
                    )}
                </Card.Body>
            </Card>

            <PetModal
                show={showPetModal}
                onHide={() => setShowPetModal(false)}
                user={user}
                onSuccess={handlePetSuccess}
            />
        </Container>
    );
};

export default PersonalPage;