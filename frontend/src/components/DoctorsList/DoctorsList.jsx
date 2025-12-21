import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Breadcrumb, Row, Col, Form, Card } from "react-bootstrap";

import { doctorsData } from '../../data/doctorsData';
import './DoctorsList.css';

function DoctorsList() {

    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const filteredDoctors = doctorsData.filter(doctor => {
        if (!searchQuery.trim()) return true;

        const query = searchQuery.toLowerCase();
        const nameLower = doctor.name.toLowerCase();
        const fullInfoLower = doctor.fullInfo.toLowerCase();

        if (nameLower.includes(query)) return true;
        if (fullInfoLower.includes(query)) return true;

        for (let spec of doctor.specialties) {
            if (spec.toLowerCase().includes(query)) return true;
        }

        return false;
    });

    const hasSearchQuery = searchQuery.trim().length > 0;

    return (
        <>
            <Container className='my-3 p-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item active>Врачи</Breadcrumb.Item>
                </Breadcrumb>

                <h1 className='mb-4'>Команда</h1>

                <div className='mb-5'>
                    <p>
                        В нашей команде - только опытные специалисты, увлеченные своей профессией.
                        Наша многолетняя практика подтверждает, что опыт и чуткое отношение
                        к животным являются основой успешного лечения.
                    </p>
                </div>

                <div className='mb-5'>
                    <Form>
                        <Form.Group controlId="searchDoctors">
                            <Form.Control
                                type="text"
                                placeholder="Поиск специалиста"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="py-3"
                            />
                            <div className="m-1">
                                <Form.Text className="text-muted">
                                    Введите имя, фамилию или специальность врача (например: "хирург", "терапевт")
                                </Form.Text>
                            </div>
                        </Form.Group>
                    </Form>
                </div>

                {hasSearchQuery && (
                    <div className='mb-4'>
                        <p>Найдено врачей: {filteredDoctors.length}</p>
                    </div>
                )}

                <Row xs={1} md={2} lg={3} xl={4} className="g-4 mb-5">
                    {filteredDoctors.map((doctor) => (
                        <Col key={doctor.id}>
                            <Card className='doctor-card h-100'
                                onClick={() => navigate(`/doctor/${doctor.id}`)}
                                style={{ cursor: 'pointer' }}>
                                <Card.Img
                                    variant="top"
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="doctor-image"
                                />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="doctor-name">{doctor.name}</Card.Title>
                                    <Card.Text className="doctor-specialties flex-grow-1">
                                        {doctor.specialties.map((spec, index) => (
                                            <span key={index} className="specialty-item">
                                                {spec}{index < doctor.specialties.length - 1 ? ', ' : ''}
                                            </span>
                                        ))}
                                    </Card.Text>
                                    {doctor.experience && (
                                        <Card.Text className="doctor-experience">
                                            <strong>Стаж работы:</strong> {doctor.experience}
                                        </Card.Text>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default DoctorsList;