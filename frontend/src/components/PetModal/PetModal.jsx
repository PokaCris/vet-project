import { useState, useEffect } from 'react';
import { Modal, Button, Form, Alert, Spinner } from 'react-bootstrap';
import { apiPost } from '../../services/api';

const PetModal = ({ show, onHide, user, onSuccess }) => {
    const [petData, setPetData] = useState({
        pet_name: '',
        pet_type: '',
        pet_birthday: '',
        pet_weight: ''
    });
    const [isSavingPet, setIsSavingPet] = useState(false);
    const [petError, setPetError] = useState('');

    useEffect(() => {
        if (show && user) {
            setPetData({
                pet_name: user.pet_name || '',
                pet_type: user.pet_type || '',
                pet_birthday: user.pet_birthday ? user.pet_birthday.split('T')[0] : '',
                pet_weight: user.pet_weight || ''
            });
        }
    }, [show, user]);

    const handleSubmit = async () => {
        if (!petData.pet_name.trim() || !petData.pet_type.trim()) {
            setPetError('Заполните обязательные поля: кличка и вид животного');
            return;
        }

        setIsSavingPet(true);
        setPetError('');

        try {
            const result = await apiPost('/api/auth/update-pet', {
                pet_name: petData.pet_name,
                pet_type: petData.pet_type,
                pet_birthday: petData.pet_birthday || null,
                pet_weight: petData.pet_weight || null
            });

            onSuccess(result);
            onHide();
            setPetData({ pet_name: '', pet_type: '', pet_birthday: '', pet_weight: '' });
            
        } catch (error) {
            setPetError(error.message || 'Ошибка сохранения');
        } finally {
            setIsSavingPet(false);
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    {user?.pet_name ? 'Редактировать данные питомца' : 'Добавить данные питомца'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {petError && <Alert variant="danger">{petError}</Alert>}

                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Кличка питомца *</Form.Label>
                        <Form.Control
                            type="text"
                            value={petData.pet_name}
                            onChange={(e) => setPetData(prev => ({ ...prev, pet_name: e.target.value }))}
                            placeholder="Введите кличку питомца"
                            disabled={isSavingPet}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Вид животного *</Form.Label>
                        <Form.Select
                            value={petData.pet_type}
                            onChange={(e) => setPetData(prev => ({ ...prev, pet_type: e.target.value }))}
                            disabled={isSavingPet}
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
                            value={petData.pet_birthday}
                            onChange={(e) => setPetData(prev => ({ ...prev, pet_birthday: e.target.value }))}
                            disabled={isSavingPet}
                        />
                        <Form.Text className="text-muted">
                            Необязательное поле
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Вес (кг)</Form.Label>
                        <Form.Control
                            type="number"
                            step="0.1"
                            min="0"
                            max="999"
                            value={petData.pet_weight}
                            onChange={(e) => setPetData(prev => ({ ...prev, pet_weight: e.target.value }))}
                            placeholder="0.0"
                            disabled={isSavingPet}
                        />
                        <Form.Text className="text-muted">
                            Необязательное поле
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide} disabled={isSavingPet}>
                    Отмена
                </Button>
                <Button variant="success" onClick={handleSubmit} disabled={isSavingPet}>
                    {isSavingPet ? (
                        <>
                            <Spinner size="sm" className="me-2" />
                            Сохранение...
                        </>
                    ) : (
                        'Сохранить'
                    )}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PetModal;