import { useState, useEffect } from 'react';
import { Container, Card, Alert, Spinner, ListGroup, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PersonalPage = () => {
    const { user, loading } = useAuth();
    const [examinations, setExaminations] = useState([]);
    const navigate = useNavigate();

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

    if (loading) {
        return (
            <Container className="mt-5 text-center">
                <Spinner animation="border" variant="success" />
                <p className="mt-3">Загрузка данных...</p>
            </Container>
        );
    }

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
                            <p><strong>Имя:</strong> {user.first_name} {user.last_name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Телефон:</strong> {user.phone}</p>
                            <p><strong>Дата регистрации:</strong> {new Date(user.created_at).toLocaleDateString('ru-RU')}</p>
                        </div>
                        <div className="col-md-6">
                            <h6 className="border-bottom pb-2">Данные питомца:</h6>
                            {user.pet_name && <p><strong>Имя питомца:</strong> {user.pet_name}</p>}
                            {user.pet_type && <p><strong>Вид животного:</strong> {user.pet_type}</p>}
                            {!user.pet_name && !user.pet_type && (
                                <Alert variant="secondary" className="mt-2">
                                    <small>Информация о питомце не указана.</small>
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
        </Container>
    );
};

export default PersonalPage;