import { useState } from "react";
import { Container, Breadcrumb, Row, Col, Form, Card } from "react-bootstrap";

import doc1 from '../../assets/veterinars/1.png';
import doc2 from '../../assets/veterinars/2.png';
import doc3 from '../../assets/veterinars/3.png';
import doc4 from '../../assets/veterinars/4.png';
import doc5 from '../../assets/veterinars/5.png';


import './DoctorsList.css';

function DoctorsList() {

    const [searchQuery, setSearchQuery] = useState('');

    const doctorsData = [
        {
            id: 1,
            image: doc1,
            name: 'Петрова Марина Владимировна',
            specialties: ['Главный ветеринарный врач', 'терапевт'],
            experience: 'с 2008 года',
            fullInfo: 'Петрова Марина Владимировна. Главный ветеринарный врач, терапевт. Стаж работы: с 2008 года'
        },
        {
            id: 2,
            image: doc2,
            name: 'Иванов Сергей Александрович',
            specialties: ['Хирург', 'ортопед'],
            experience: 'с 2010 года',
            fullInfo: 'Иванов Сергей Александрович. Хирург, ортопед. Стаж работы: с 2010 года'
        },
        {
            id: 3,
            image: doc3,
            name: 'Кузнецова Анна Игоревна',
            specialties: ['Ветеринарный врач-диагност', 'УЗИ', 'рентгенолог'],
            experience: 'с 2015 года',
            fullInfo: 'Кузнецова Анна Игоревна. Ветеринарный врач-диагност, УЗИ, рентгенолог. Стаж работы: с 2015 года'
        },
        {
            id: 4,
            image: doc4,
            name: 'Смирнов Дмитрий Олегович',
            specialties: ['Вакцинолог', 'терапевт'],
            experience: 'с 2012 года',
            fullInfo: 'Смирнов Дмитрий Олегович. Вакцинолог, терапевт. Стаж работы: с 2012 года'
        },
        {
            id: 5,
            image: doc5,
            name: 'Волкова Екатерина Сергеевна',
            specialties: ['Хирург', 'стоматолог'],
            experience: 'с 2014 года',
            fullInfo: 'Волкова Екатерина Сергеевна. Хирург, стоматолог. Стаж работы: с 2014 года'
        },
        // {
        //     id: 6,
        //     image: doc6,
        //     name: 'Попов Алексей Викторович',
        //     specialties: ['Офтальмолог', 'хирург'],
        //     experience: 'с 2011 года',
        //     fullInfo: 'Попов Алексей Викторович. Офтальмолог, хирург. Стаж работы: с 2011 года'
        // },
        // {
        //     id: 7,
        //     image: doc7,
        //     name: 'Новикова Ольга Дмитриевна',
        //     specialties: ['Дерматолог', 'аллерголог'],
        //     experience: 'с 2017 года',
        //     fullInfo: 'Новикова Ольга Дмитриевна. Дерматолог, аллерголог. Стаж работы: с 2017 года'
        // },
        // {
        //     id: 8,
        //     image: doc8,
        //     name: 'Федоров Игорь Петрович',
        //     specialties: ['Лаборант', 'диагност'],
        //     experience: 'с 2019 года',
        //     fullInfo: 'Федоров Игорь Петрович. Лаборант, диагност. Стаж работы: с 2019 года'
        // },
        // {
        //     id: 9,
        //     image: doc9,
        //     name: 'Морозова Татьяна Алексеевна',
        //     specialties: ['Анестезиолог', 'реаниматолог'],
        //     experience: 'с 2013 года',
        //     fullInfo: 'Морозова Татьяна Алексеевна. Анестезиолог, реаниматолог. Стаж работы: с 2013 года'
        // },
        // {
        //     id: 10,
        //     image: doc10,
        //     name: 'Лебедев Артем Николаевич',
        //     specialties: ['Эндоскопист', 'хирург'],
        //     experience: 'с 2016 года',
        //     fullInfo: 'Лебедев Артем Николаевич. Эндоскопист, хирург. Стаж работы: с 2016 года'
        // },
        // {
        //     id: 11,
        //     image: doc11,
        //     name: 'Козлова Светлана Михайловна',
        //     specialties: ['Терапевт', 'кардиолог'],
        //     experience: 'с 2018 года',
        //     fullInfo: 'Козлова Светлана Михайловна. Терапевт, кардиолог. Стаж работы: с 2018 года'
        // },
        // {
        //     id: 12,
        //     image: doc12,
        //     name: 'Соколов Михаил Андреевич',
        //     specialties: ['Невролог', 'ортопед'],
        //     experience: 'с 2015 года',
        //     fullInfo: 'Соколов Михаил Андреевич. Невролог, ортопед. Стаж работы: с 2015 года'
        // },
        // {
        //     id: 13,
        //     image: doc13,
        //     name: 'Зайцева Елена Владимировна',
        //     specialties: ['Старший ассистент'],
        //     experience: 'с 2020 года',
        //     fullInfo: 'Зайцева Елена Владимировна. Старший ассистент. Стаж работы: с 2020 года'
        // },
        // {
        //     id: 14,
        //     image: doc14,
        //     name: 'Григорьев Павел Сергеевич',
        //     specialties: ['Ассистент хирурга'],
        //     experience: 'с 2021 года',
        //     fullInfo: 'Григорьев Павел Сергеевич. Ассистент хирурга. Стаж работы: с 2021 года'
        // },
        // {
        //     id: 15,
        //     image: doc15,
        //     name: 'Тихонова Мария Игоревна',
        //     specialties: ['Ассистент терапевта'],
        //     experience: 'с 2022 года',
        //     fullInfo: 'Тихонова Мария Игоревна. Ассистент терапевта. Стаж работы: с 2022 года'
        // }
    ];

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
            </Container>

            <Container>
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
                            <Card className='doctor-card h-100'>
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