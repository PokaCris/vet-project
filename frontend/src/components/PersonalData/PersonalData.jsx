import { useState, useEffect } from 'react';
import { Container, Breadcrumb, Card, Alert, Spinner, ListGroup, Badge, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { apiDelete } from '../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCat, faDog, faDove, faOtter, faDragon, faFishFins } from '@fortawesome/free-solid-svg-icons';
import PetModal from '../../components/PetModal/PetModal';

import './PersonalData.css'

const PersonalPage = () => {
    const { user, loading, refreshUser } = useAuth();
    const [examinations, setExaminations] = useState([]);
    const [showPetModal, setShowPetModal] = useState(false);
    const [editingPet, setEditingPet] = useState(null);

    const navigate = useNavigate();

    const handlePetSuccess = async () => {
        await refreshUser();
        setShowPetModal(false);
        setEditingPet(null);
    };

    const removePetInfo = async (petId) => {
        if (window.confirm('Вы уверены, что хотите удалить данные питомца?')) {
            try {
                await apiDelete(`/api/auth/pets/${petId}`);
                await refreshUser();
            } catch (error) {
                console.error('Ошибка удаления:', error);
                alert('Ошибка при удалении данных питомца');
            }
        }
    };

    const formatPhone = (phone) => {
        if (!phone) return 'Не указан';

        const numbers = phone.replace(/\D/g, '');
        return `+7 (${numbers.substring(1, 4)}) ${numbers.substring(4, 7)}-${numbers.substring(7, 9)}-${numbers.substring(9, 11)}`;
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';

        return new Date(dateString).toLocaleDateString('ru-RU');
    };

    const formatName = (value) => {
        if (!value) return '';
        return value.trim().replace(/\s+/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
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
                    diagnosis: 'Повторный прием',
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
                    diagnosis: 'Первичный прием',
                    result: 'Выявлена аллергия на определенные компоненты корма. Взяты пробы для анализа.',
                    recommendations: 'Исключить курицу из рациона. Давать антигистаминные препараты 2 раза в день в течение недели.',
                    status: 'completed'
                },
                {
                    id: 5,
                    date: '2024-11-20',
                    doctor: 'Иванов Иван Иванович',
                    diagnosis: 'Вакцинация',
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

    const pets = user.pets || [];

    const getAnimalIcon = (type) => {
        const icons = {
            'Кошка': faCat,
            'Собака': faDog,
            'Птица': faDove,
            'Грызун': faOtter,
            'Рептилия': faDragon,
            'Другое': faFishFins
        };
        return icons[type] || faFishFins;
    };

    return (
        <>
            <Container className='my-3 p-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item active>Личный кабинет</Breadcrumb.Item>
                </Breadcrumb>
            </Container>

            <Container className="mt-5 mb-5">
                <h1 className="mb-5">Личный кабинет</h1>

                <Card className="mb-4 shadow-sm">
                    <Card.Header className="text-white header-info">
                        <h5 className="mb-0">Информация о владельце и питомцах</h5>
                    </Card.Header>
                    <Card.Body>
                        <div className="row">
                            <div className="col-md-6">
                                <h6 className="border-bottom pb-2">Данные владельца:</h6>
                                <p><strong>Имя:</strong> {formatName(user.first_name)}</p>
                                {user.last_name && <p><strong>Фамилия:</strong> {formatName(user.last_name)}</p>}
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Телефон:</strong> {formatPhone(user.phone)}</p>
                                <p><strong>Дата регистрации:</strong> {formatDate(user.created_at)}</p>
                            </div>
                            <div className="col-md-6">
                                <h6 className="border-bottom pb-2 d-flex justify-content-between align-items-center">
                                    <span>Данные питомцев:</span>
                                    {pets.length === 0 && (
                                        <Button
                                            variant="outline-info"
                                            size="sm"
                                            onClick={() => {
                                                setEditingPet(null);
                                                setShowPetModal(true);
                                            }}
                                        >
                                            Добавить
                                        </Button>
                                    )}
                                </h6>

                                {pets.length > 0 ? (
                                    <>
                                        {pets.map((pet, index) => (
                                            <div key={pet.id} className="mb-4 pb-3 border-bottom pet-card">
                                                <div className="row">
                                                    <div className="col-8">
                                                        <div className="pet-info">
                                                            <h6 className="mb-2">
                                                                <strong>Кличка:</strong>
                                                                <span className='pet-name'> {formatName(pet.name)}</span>
                                                            </h6>
                                                            <p className="mb-1 d-flex align-items-center">
                                                                <strong className="me-2">Вид:</strong>
                                                                <FontAwesomeIcon
                                                                    icon={getAnimalIcon(pet.type)}
                                                                    className="me-2"
                                                                    size='lg'
                                                                />
                                                                <span>{pet.type}</span>
                                                            </p>
                                                            {pet.birthday && (
                                                                <p className="mb-1"><strong>Дата рождения:</strong> {formatDate(pet.birthday)}</p>
                                                            )}
                                                            {pet.weight && (
                                                                <p className="mb-1"><strong>Вес:</strong> {pet.weight} кг</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="d-flex flex-column gap-2 pet-buttons">
                                                            <Button
                                                                variant="info"
                                                                size="sm"
                                                                className="btn-edit"
                                                                onClick={() => {
                                                                    setEditingPet(pet);
                                                                    setShowPetModal(true);
                                                                }}
                                                            >
                                                                Изменить
                                                            </Button>
                                                            <Button
                                                                variant="soft-danger"
                                                                size="sm"
                                                                className="btn-delete"
                                                                onClick={() => removePetInfo(pet.id)}
                                                            >
                                                                Удалить
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        {pets.length < 3 && (
                                            <div className="text-end mt-4">
                                                <Button
                                                    variant="info"
                                                    className="btn-add-another"
                                                    onClick={() => {
                                                        setEditingPet(null);
                                                        setShowPetModal(true);
                                                    }}
                                                >
                                                    Добавить <FontAwesomeIcon icon={faPlus} size="sm" />
                                                </Button>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Alert variant="secondary" className="mt-2">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <small>Информация о питомцах не указана.</small>
                                            <Button
                                                variant="info"
                                                size="sm"
                                                onClick={() => {
                                                    setEditingPet(null);
                                                    setShowPetModal(true);
                                                }}
                                            >
                                                Добавить первого питомца
                                            </Button>
                                        </div>
                                    </Alert>
                                )}

                                {pets.length >= 3 && (
                                    <Alert variant="info" className="mt-3 mb-0">
                                        <small>* Можно добавить не более 3 питомцев в одном аккаунте</small>
                                    </Alert>
                                )}
                            </div>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="shadow-sm">
                    <Card.Header className="text-white header-info">
                        <h5 className="mb-0">Результаты осмотров и исследования</h5>
                    </Card.Header>
                    <Card.Body>
                        {examinations.length > 0 ? (
                            <>
                                <Alert variant="secondary" className="mb-4">
                                    Результаты посещений ветеринарной клиники.
                                    Всего записей: <strong>{examinations.length}</strong>
                                </Alert>

                                <ListGroup variant="flush">
                                    {examinations.map((exam) => (
                                        <ListGroup.Item key={exam.id} className="mb-3 p-2 border rounded">
                                            <div className="d-flex justify-content-between align-items-start mb-2">
                                                <div>
                                                    <h5 className="mb-1">Услуга: {exam.diagnosis}</h5>
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
                    onHide={() => {
                        setShowPetModal(false);
                        setEditingPet(null);
                    }}
                    pet={editingPet}
                    onSuccess={handlePetSuccess}
                />
            </Container>
        </>
    );
};


export default PersonalPage;