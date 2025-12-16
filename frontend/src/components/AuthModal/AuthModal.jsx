import { useState } from 'react';
import { Modal, Button, Form, Spinner, Alert } from 'react-bootstrap';
import api from '../../services/api';

import './AuthModal.css';

const AuthModal = ({ show, onHide, onSuccess }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        phone: '',
        password_confirmation: '',
        agreed_to_privacy: false
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [apiError, setApiError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
        setApiError('');
    };

    const validateForm = () => {
        const newErrors = {};

        if (!isLogin) {
            if (!formData.first_name.trim()) {
                newErrors.first_name = 'Введите ваше имя';
            }

            const phoneDigits = formData.phone.replace(/\D/g, '');
            if (!formData.phone.trim() || phoneDigits.length < 11) {
                newErrors.phone = 'Введите корректный номер телефона';
            }

            if (!formData.agreed_to_privacy) {
                newErrors.agreed_to_privacy = 'Необходимо согласие на обработку данных';
            }

            if (formData.password !== formData.password_confirmation) {
                newErrors.password_confirmation = 'Пароли не совпадают';
            }
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Введите email';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Введите корректный email';
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Введите пароль';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Пароль должен быть не менее 6 символов';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        setApiError('');
        setErrors({});

        try {
            let result;

            if (isLogin) {
                result = await api.login({
                    email: formData.email,
                    password: formData.password
                });
            } else {
                result = await api.register({
                    email: formData.email,
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    phone: formData.phone.replace(/\D/g, ''),
                    password: formData.password,
                    password_confirmation: formData.password_confirmation
                });
            }

            setIsSubmitted(true);

            setTimeout(() => {
                onSuccess(result.user || result);
                onHide();
                setIsSubmitted(false);
                resetForm();
            }, 1500);

        } catch (err) {
            if (err.type === 'validation') {
                const validationErrors = {};
                Object.keys(err.errors).forEach(key => {
                    validationErrors[key] = err.errors[key][0];
                });
                setErrors(validationErrors);
                setApiError('Исправьте ошибки в форме');
            } else if (err.response?.status === 401) {
                setApiError('Неверный email или пароль');
            } else if (err.response?.status === 422) {
                setApiError('Пользователь с таким email или телефоном уже существует');
            } else {
                setApiError(err.message || 'Произошла ошибка');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const formatPhone = (value) => {
        const numbers = value.replace(/\D/g, '');
        let formatted = '+7 ';

        if (numbers.length > 0) {
            formatted += '(' + numbers.substring(1, 4);
        }
        if (numbers.length >= 4) {
            formatted += ') ' + numbers.substring(4, 7);
        }
        if (numbers.length >= 7) {
            formatted += '-' + numbers.substring(7, 9);
        }
        if (numbers.length >= 9) {
            formatted += '-' + numbers.substring(9, 11);
        }

        return formatted;
    };

    const handlePhoneChange = (e) => {
        const formatted = formatPhone(e.target.value);
        setFormData(prev => ({ ...prev, phone: formatted }));

        if (errors.phone) {
            setErrors(prev => ({ ...prev, phone: '' }));
        }
        setApiError('');
    };

    const resetForm = () => {
        setFormData({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            phone: '',
            password_confirmation: '',
            agreed_to_privacy: false
        });
        setErrors({});
        setApiError('');
        setIsSubmitted(false);
    };

    return (
        <Modal show={show} onHide={onHide} onEnter={resetForm} centered>
            <Modal.Header closeButton>
                <Modal.Title className="w-100 py-2 text-center">
                    <div className="d-flex justify-content-center align-items-center">
                        <button
                            className={`btn btn-link text-decoration-none ${isLogin ? 'text-dark fw-bold' : 'text-secondary'} p-0 me-2`}
                            onClick={() => setIsLogin(true)}
                            type="button"
                        >
                            Вход
                        </button>
                        <span className="text-secondary">/</span>
                        <button
                            className={`btn btn-link text-decoration-none ${!isLogin ? 'text-dark fw-bold' : 'text-secondary'} p-0 ms-2`}
                            onClick={() => setIsLogin(false)}
                            type="button"
                        >
                            Регистрация
                        </button>
                    </div>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {!isSubmitted ? (
                    <>
                        {apiError && <Alert variant="danger">{apiError}</Alert>}

                        <Form onSubmit={handleSubmit} className='m-2'>
                            {!isLogin && (
                                <>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Имя *</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="first_name"
                                            value={formData.first_name}
                                            onChange={handleChange}
                                            placeholder="Введите имя"
                                            isInvalid={!!errors.first_name}
                                            disabled={isSubmitting}
                                            className='input-field'
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.first_name}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Фамилия</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="last_name"
                                            value={formData.last_name}
                                            onChange={handleChange}
                                            placeholder="Фамилия (необязательно)"
                                            disabled={isSubmitting}
                                            className='input-field'
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Телефон *</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handlePhoneChange}
                                            placeholder="+7 (999) 999-99-99"
                                            isInvalid={!!errors.phone}
                                            disabled={isSubmitting}
                                            className='input-field'
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.phone}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </>
                            )}

                            <Form.Group className="mb-3">
                                <Form.Label>Email *</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@mail.ru"
                                    isInvalid={!!errors.email}
                                    disabled={isSubmitting}
                                    className='input-field'
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Пароль *</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Введите пароль"
                                    isInvalid={!!errors.password}
                                    disabled={isSubmitting}
                                    className='input-field'
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {!isLogin && (
                                <>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Повтор пароля *</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password_confirmation"
                                            value={formData.password_confirmation}
                                            onChange={handleChange}
                                            placeholder="Повторите пароль"
                                            isInvalid={!!errors.password_confirmation}
                                            disabled={isSubmitting}
                                            className='input-field'
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.password_confirmation}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Check
                                            type="checkbox"
                                            variant="success"
                                            name="agreed_to_privacy"
                                            label={
                                                <span className='consent'>
                                                    Я даю согласие на обработку своих персональных данных и соглашаюсь с{' '}
                                                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-secondary">
                                                        политикой конфиденциальности
                                                    </a>
                                                </span>
                                            }
                                            checked={formData.agreed_to_privacy}
                                            onChange={handleChange}
                                            isInvalid={!!errors.agreed_to_privacy}
                                            disabled={isSubmitting}
                                            isValid
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.agreed_to_privacy}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </>
                            )}

                            {!isLogin && (
                                <Form.Group className="mb-4 pt-1 border-top">
                                    <p className="star">* - обязательное поле для заполнения</p>
                                </Form.Group>
                            )}

                            <Button
                                variant="success"
                                type="submit"
                                disabled={isSubmitting}
                                className="d-block w-50 mx-auto"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Spinner size="sm" className="me-2" as="span" animation="border" variant="success" />
                                        {isLogin ? 'Вход...' : 'Регистрация...'}
                                    </>
                                ) : (
                                    isLogin ? 'Войти' : 'Зарегистрироваться'
                                )}
                            </Button>
                        </Form>
                    </>
                ) : (
                    <div className="text-center py-4">
                        <h4 className="text-success mb-3">
                            {isLogin ? 'Вход выполнен успешно!' : 'Регистрация завершена!'}
                        </h4>
                        <Spinner animation="border" variant="success" />
                    </div>
                )}
            </Modal.Body>
        </Modal>
    );
};

export default AuthModal;