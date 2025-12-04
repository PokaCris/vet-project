import { useState } from 'react';
import { Modal, Button, Form, Spinner, Alert } from 'react-bootstrap';
import './AppointmentModal.css';

function AppointmentModal({ show, handleClose }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        pet_info: '',
        comment: '',
        agreed_to_terms: false
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

        if (!formData.name.trim()) {
            newErrors.name = 'Введите ваше имя';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Введите номер телефона';
        }

        if (!formData.agreed_to_terms) {
            newErrors.agreed_to_terms = 'Необходимо согласие на обработку данных';
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

        try {
            console.log('Отправка данных:', formData);

            const response = await fetch('/api/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            console.log('Статус ответа:', response.status);

            if (!response.ok) {
                let errorData;
                try {
                    errorData = await response.json();
                    console.log('Ошибка от сервера:', errorData);
                } catch (e) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                if (errorData.errors) {
                    const validationErrors = {};
                    Object.keys(errorData.errors).forEach(key => {
                        validationErrors[key] = errorData.errors[key][0];
                    });
                    setErrors(validationErrors);
                    throw new Error('Ошибка валидации формы');
                }
                throw new Error(errorData.message || `Ошибка сервера: ${response.status}`);
            }

            const data = await response.json();
            console.log('Успешный ответ:', data);

            setIsSubmitted(true);

            setTimeout(() => {
                console.log('Закрытие модального окна');
                setFormData({
                    name: '',
                    phone: '',
                    pet_info: '',
                    comment: '',
                    agreed_to_terms: false
                });
                setIsSubmitted(false);
                handleClose();
            }, 3000);

        } catch (error) {
            console.error('API Error:', error);

            if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
                setApiError('Ошибка подключения к серверу');
            } else if (error.message === 'Ошибка валидации формы') {
                setApiError('Исправьте ошибки в форме');
            } else {
                setApiError(error.message || 'Ошибка при отправке формы');
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
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Запись на прием</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {!isSubmitted ? (
                    <>
                        {apiError && <Alert variant="danger">{apiError}</Alert>}

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Ваше имя *</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    isInvalid={!!errors.name}
                                    disabled={isSubmitting}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
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
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.phone}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Питомец (кличка, вид)</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="pet_info"
                                    value={formData.pet_info}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Комментарий</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="comment"
                                    value={formData.comment}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Check
                                    type="checkbox"
                                    name="agreed_to_terms"
                                    label="Я согласен на обработку данных"
                                    checked={formData.agreed_to_terms}
                                    onChange={handleChange}
                                    isInvalid={!!errors.agreed_to_terms}
                                    disabled={isSubmitting}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.agreed_to_terms}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button
                                variant="primary"
                                type="submit"
                                disabled={isSubmitting}
                                className="w-100 btn-success"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Spinner size="sm" className="me-2" />
                                        Отправка...
                                    </>
                                ) : 'Записаться'}
                            </Button>
                        </Form>
                    </>
                ) : (
                    <div className="text-center py-4">
                        <h4 className="text-success mb-3">Спасибо за обращение!</h4>
                        <p>Наш администратор свяжется с вами в ближайшее время.</p>
                        <Button variant="outline-primary" onClick={handleClose}>
                            Закрыть
                        </Button>
                    </div>
                )}
            </Modal.Body>
        </Modal>
    );
}

export default AppointmentModal;