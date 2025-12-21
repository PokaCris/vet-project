import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Breadcrumb, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faGraduationCap, faCertificate, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import MakeAppointment from '../../components/MakeAppointment/MakeAppointment';
import { doctorsData } from '../../data/doctorsData';

import './DoctorInfo.css';

function DoctorInfo() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        const foundDoctor = doctorsData.find(doc => doc.id === parseInt(id));
        setDoctor(foundDoctor);
    }, [id]);

    if (!doctor) {
        return (
            <Container className='my-3 p-3'>
                <p>Врач не найден</p>
                <Button variant="outline-primary" onClick={() => navigate('/doctors')}>
                    <FontAwesomeIcon icon={faArrowLeft} className='me-2' />
                    Вернуться к списку врачей
                </Button>
            </Container>
        );
    }

    return (
        <>
            <Container className='my-3 p-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/doctors">Врачи</Breadcrumb.Item>
                    <Breadcrumb.Item active>{doctor.name}</Breadcrumb.Item>
                </Breadcrumb>
            </Container>

            <Container className='doctor-info-page-container mb-0'>
                <Row className='mb-5'>
                    <Col lg={4} className='mb-4'>
                        <div className='doctor-info-image-container'>
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className='doctor-info-image img-fluid rounded'
                            />
                        </div>
                    </Col>

                    <Col lg={8}>
                        <h1 className='doctor-info-title mb-4'>{doctor.name}</h1>

                        <div className='mb-4'>
                            <div className='doctor-info-specialties mb-3'>
                                {doctor.specialties.map((spec, index) => (
                                    <span key={index} className='doctor-info-specialty'>
                                        {spec}
                                    </span>
                                ))}
                            </div>

                            <div className='doctor-info-experience mb-4'>
                                <FontAwesomeIcon icon={faCalendar} className='me-2' />
                                <strong>Стаж работы:</strong> {doctor.experience}
                            </div>

                            <p className='doctor-info-description'>
                                {doctor.description}
                            </p>
                        </div>

                        <div className='mb-5'>
                            <h3 className='doctor-info-section-title mb-3'>
                                <FontAwesomeIcon icon={faGraduationCap} className='me-2' />
                                Образование
                            </h3>
                            <p className='doctor-info-text'>{doctor.education}</p>
                        </div>

                        <div className='mb-5'>
                            <h3 className='doctor-info-section-title mb-3'>
                                <FontAwesomeIcon icon={faCertificate} className='me-2' />
                                Сертификаты и повышение квалификации
                            </h3>
                            <ul className='doctor-info-list'>
                                {doctor.certificates.map((cert, index) => (
                                    <li key={index}>{cert}</li>
                                ))}
                            </ul>
                        </div>

                        <div className='mb-5'>
                            <h3 className='doctor-info-section-title mb-3'>Достижения и публикации</h3>
                            <p className='doctor-info-text'>{doctor.achievements}</p>
                        </div>

                    </Col>
                </Row>

                <MakeAppointment />
            </Container>
        </>
    );
}

export default DoctorInfo;