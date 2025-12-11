import { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import api from '../../api/index';

const AuthModal = ({ show, onHide, onSuccess }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        login: '',
        phone: '',
        password: '',
        password_confirmation: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const endpoint = isLogin ? '/auth/login' : '/auth/register';
            const response = await api.post(endpoint, formData);
            
            onSuccess(response.data.user);
            onHide();
            
        } catch (err) {
            if (err.type === 'validation') {
                const firstError = Object.values(err.errors)[0][0];
                setError(firstError);
            } else {
                setError(err.response?.data?.message || 'Произошла ошибка');
            }
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setFormData({
            login: '',
            phone: '',
            password: '',
            password_confirmation: ''
        });
        setError('');
    };

    return (
        <Modal 
            show={show} 
            onHide={onHide}
            onEnter={resetForm}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="w-100 text-center">
                    <div className="d-flex justify-content-center">
                        <button 
                            className={`btn ${isLogin ? 'btn-primary' : 'btn-outline-primary'} mx-2`}
                            onClick={() => setIsLogin(true)}
                            type="button"
                        >
                            Вход
                        </button>
                        <button 
                            className={`btn ${!isLogin ? 'btn-primary' : 'btn-outline-primary'} mx-2`}
                            onClick={() => setIsLogin(false)}
                            type="button"
                        >
                            Регистрация
                        </button>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error && <Alert variant="danger" className="text-center">{error}</Alert>}
                
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control
                            type="text"
                            name="login"
                            value={formData.login}
                            onChange={handleChange}
                            required
                            placeholder="Введите логин"
                        />
                    </Form.Group>

                    {!isLogin && (
                        <Form.Group className="mb-3">
                            <Form.Label>Номер телефона</Form.Label>
                            <Form.Control
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required={!isLogin}
                                placeholder="+79991234567"
                            />
                        </Form.Group>
                    )}

                    <Form.Group className="mb-3">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="Введите пароль"
                        />
                    </Form.Group>

                    {!isLogin && (
                        <Form.Group className="mb-3">
                            <Form.Label>Повтор пароля</Form.Label>
                            <Form.Control
                                type="password"
                                name="password_confirmation"
                                value={formData.password_confirmation}
                                onChange={handleChange}
                                required={!isLogin}
                                placeholder="Повторите пароль"
                            />
                        </Form.Group>
                    )}

                    <Button 
                        variant="primary" 
                        type="submit" 
                        className="w-100"
                        disabled={loading}
                    >
                        {loading ? 'Загрузка...' : isLogin ? 'Войти' : 'Зарегистрироваться'}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AuthModal;