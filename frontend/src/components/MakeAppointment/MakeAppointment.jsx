import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

import AppointmentModal from '../AppointmentModal/AppointmentModal';
import imgMakeAppointment from '../../assets/zapis.png';
import './MakeAppointment.css';

function MakeAppointment() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='wrapper-for-hidden'>
            <Container className="make-appointment-wrapper">
                <Row>
                    <Col md={6} className="d-flex flex-column justify-content-center">
                        <div className="make-appointment-content">
                            <h2 className="make-appointment-title mb-4">
                                Запишитесь на первичный<br />
                                приём для консультации<br />
                                с врачом
                            </h2>

                            <p className="make-appointment-text mb-5">
                                Не откладывайте профилактику<br />
                                и лечение заболеваний питомца,<br />
                                оставьте заявку и мы свяжемся с вами.
                            </p>

                            <Button
                                variant="light"
                                size="lg"
                                className='btn-style mb-5'
                                onClick={() => setShowModal(true)}>
                                Записаться на прием
                                <FontAwesomeIcon icon={faPaw} className='ms-2' />
                            </Button>
                        </div>
                    </Col>

                    <Col md={6} className="make-appointment-image-col">
                        <div className="make-appointment-image ps-5">
                            <img
                                src={imgMakeAppointment}
                                alt={`MakeAppointment`}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>

            <AppointmentModal
                show={showModal}
                handleClose={() => setShowModal(false)}
            />
        </div>
    );
}

export default MakeAppointment;