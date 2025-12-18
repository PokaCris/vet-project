import { useState } from 'react';
import { Modal, Button, Form, Spinner, Alert } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';

import './AuthModal.css';

const AuthModal = ({ show, onHide, onSuccess }) => {
    const [isLogin, setIsLogin] = useState(true);
    const { login, register } = useAuth();

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
    const [apiError, setApiError] = useState('');

    const formatPhoneInput = (value) => {
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
        const { name, value } = e.target;
        const formattedValue = formatPhoneInput(value);
        setFormData(prev => ({ ...prev, [name]: formattedValue }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
        setApiError('');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            handlePhoneChange(e);
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
        setApiError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setApiError('');
        setErrors({});

        try {
            if (!isLogin && !formData.agreed_to_privacy) {
                setApiError('Необходимо согласие на обработку персональных данных');
                setIsSubmitting(false);
                return;
            }

            let result;

            if (isLogin) {
                result = await login(
                    formData.email,
                    formData.password);
            } else {
                const registerData = {
                    email: formData.email,
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    phone: formData.phone.replace(/\D/g, ''),
                    password: formData.password,
                    password_confirmation: formData.password_confirmation
                };
                result = await register(registerData);
            }

            if (result.success) {
                onSuccess(result.data.user || result.data);
                onHide();
                setFormData({
                    email: '',
                    password: '',
                    first_name: '',
                    last_name: '',
                    phone: '',
                    password_confirmation: '',
                    agreed_to_privacy: false
                });
            } else {
                setApiError(result.error || 'Произошла ошибка');
            }
        } catch (err) {
            setApiError(err.message || 'Произошла ошибка');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered>
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
                                    required={!isLogin}
                                    disabled={isSubmitting}
                                    className='input-field'
                                />
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
                                    onChange={handleChange}
                                    placeholder="+7 (999) 999-99-99"
                                    required={!isLogin}
                                    disabled={isSubmitting}
                                    maxLength={18}
                                    className='input-field'
                                />
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
                            required
                            disabled={isSubmitting}
                            className='input-field'
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Пароль *</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Введите пароль"
                            required
                            disabled={isSubmitting}
                            className='input-field'
                        />
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
                                    required={!isLogin}
                                    disabled={isSubmitting}
                                    className='input-field'
                                />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Check
                                    type="checkbox"
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
                                    disabled={isSubmitting}
                                    className='form-check-input-custom'
                                />
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
                        className="d-block w-50 mx-auto btn-success"
                    >
                        {isSubmitting ? (
                            <>
                                <Spinner size="sm" className="me-2" />
                                {isLogin ? 'Вход...' : 'Регистрация...'}
                            </>
                        ) : (
                            isLogin ? 'Войти' : 'Зарегистрироваться'
                        )}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AuthModal;