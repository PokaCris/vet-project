import { useState, useEffect } from 'react';
import { Modal, Button, Form, Alert, Spinner } from 'react-bootstrap';
import { apiPost, apiPut } from '../../services/api';

import './PetModal.css';

const PetModal = ({ show, onHide, pet = null, onSuccess }) => {
    const [petData, setPetData] = useState({
        name: '',
        type: '',
        birthday: '',
        weight: ''
    });
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState('');

    const formatName = (value) => {
        if (!value) return '';
        return value.trim().replace(/\s+/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    };

    const handleNameChange = (e) => {
        const { value } = e.target;
        setPetData(prev => ({ ...prev, name: formatName(value) }));
    };

    useEffect(() => {
        if (show) {
            if (pet) {
                setPetData({
                    name: pet.name || '',
                    type: pet.type || '',
                    birthday: pet.birthday ? pet.birthday.split('T')[0] : '',
                    weight: pet.weight || ''
                });
            } else {
                setPetData({
                    name: '',
                    type: '',
                    birthday: '',
                    weight: ''
                });
            }
            setError('');
        }
    }, [show, pet]);

    const handleSubmit = async () => {
        if (!petData.name.trim() || !petData.type.trim()) {
            setError('Заполните обязательные поля: кличка и вид животного');
            return;
        }

        setIsSaving(true);
        setError('');

        try {
            if (pet) {
                await apiPut(`/api/auth/pets/${pet.id}`, petData);
            } else {
                await apiPost('/api/auth/pets', petData);
            }

            onSuccess();

        } catch (error) {
            console.error('Ошибка сохранения:', error);
            setError(error.message || 'Ошибка при сохранении данных питомца');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    {pet ? 'Редактировать данные питомца' : 'Добавить данные питомца'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error && <Alert variant="danger">{error}</Alert>}

                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Кличка питомца *</Form.Label>
                        <Form.Control
                            type="text"
                            value={petData.name}
                            onChange={handleNameChange} 
                            placeholder="Введите кличку питомца"
                            disabled={isSaving}
                            className="input-field"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Вид животного *</Form.Label>
                        <Form.Select
                            value={petData.type}
                            onChange={(e) => setPetData(prev => ({ ...prev, type: e.target.value }))}
                            disabled={isSaving}
                            className="input-field"
                        >
                            <option value="">Выберите вид животного</option>
                            <option value="Собака">Собака</option>
                            <option value="Кошка">Кошка</option>
                            <option value="Птица">Птица</option>
                            <option value="Грызун">Грызун</option>
                            <option value="Рептилия">Рептилия</option>
                            <option value="Другое">Другое</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Дата рождения</Form.Label>
                        <Form.Control
                            type="date"
                            value={petData.birthday}
                            onChange={(e) => setPetData(prev => ({ ...prev, birthday: e.target.value }))}
                            disabled={isSaving}
                            className="input-field"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Вес (кг)</Form.Label>
                        <Form.Control
                            type="number"
                            step="0.1"
                            min="0"
                            max="999"
                            value={petData.weight}
                            onChange={(e) => setPetData(prev => ({ ...prev, weight: e.target.value }))}
                            placeholder="0.0"
                            disabled={isSaving}
                            className="input-field"
                        />
                    </Form.Group>

                    <Button variant="success" className="d-block w-50 mx-auto my-3 btn-success" onClick={handleSubmit} disabled={isSaving}>
                        {isSaving ? (
                            <>
                                <Spinner size="sm" className="me-2" />
                                Сохранение...
                            </>
                        ) : (
                            pet ? 'Сохранить' : 'Добавить'
                        )}
                    </Button>

                    <Form.Group className="mb-4 pt-1 border-top">
                        <p className="star">* - обязательное поле для заполнения</p>
                    </Form.Group>

                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default PetModal;