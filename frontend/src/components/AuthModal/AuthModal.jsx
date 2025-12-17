import { useState } from 'react';
import { Modal, Button, Form, Spinner, Alert } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';

const AuthModal = ({ show, onHide, onSuccess }) => {
    const [isLogin, setIsLogin] = useState(true);
    const { login, register } = useAuth();
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        first_name: '',
        phone: '',
        password_confirmation: '',
    });
    
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [apiError, setApiError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
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
            let result;
            
            if (isLogin) {
                result = await login(formData.email, formData.password);
            } else {
                const registerData = {
                    email: formData.email,
                    first_name: formData.first_name,
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
                    phone: '',
                    password_confirmation: '',
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
                <Modal.Title>
                    {isLogin ? 'Вход' : 'Регистрация'}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="d-flex justify-content-center mb-3">
                    <Button 
                        variant={isLogin ? "success" : "outline-success"} 
                        onClick={() => setIsLogin(true)}
                        className="me-2"
                    >
                        Вход
                    </Button>
                    <Button 
                        variant={!isLogin ? "success" : "outline-success"} 
                        onClick={() => setIsLogin(false)}
                    >
                        Регистрация
                    </Button>
                </div>

                {apiError && <Alert variant="danger">{apiError}</Alert>}

                <Form onSubmit={handleSubmit}>
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
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Телефон *</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+7 999 123-45-67"
                                    required={!isLogin}
                                    disabled={isSubmitting}
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
                        />
                    </Form.Group>

                    {!isLogin && (
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
                            />
                        </Form.Group>
                    )}

                    <Button
                        variant="success"
                        type="submit"
                        disabled={isSubmitting}
                        className="w-100"
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