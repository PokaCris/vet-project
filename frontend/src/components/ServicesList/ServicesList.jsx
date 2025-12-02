import { Container, Breadcrumb, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStethoscope, faXRay, faSyringe, faUserDoctor, faBone, faTeeth,
    faAllergies, faEye, faFlask, faHeartPulse
} from '@fortawesome/free-solid-svg-icons';

import "./ServicesList.css";

function ServicesList() {

    const servicesData = [
        {
            id: 'therapy',
            title: 'Терапия',
            icon: faStethoscope,
            description: 'Диагностика и лечение заболеваний внутренних органов, консультации, профилактические осмотры',
            link: '/services/therapy'
        },
        {
            id: 'diagnostics',
            title: 'Диагностика',
            icon: faXRay,
            description: 'УЗИ, рентген, эндоскопия, ЭКГ и другие современные методы обследования',
            link: '/services/diagnostics'
        },
        {
            id: 'vaccination/anesthesia',
            title: 'Вакцинация/Анестезия',
            icon: faSyringe,
            description: 'Профилактические прививки и современные виды обезболивания',
            link: '/services/vaccination-anesthesia'
        },
        {
            id: 'castration',
            title: 'Кастрация/Стерилизация',
            icon: faUserDoctor,
            description: 'Плановые и экстренные операции, современные методы, послеоперационное наблюдение',
            link: '/services/castration'
        },
        {
            id: 'surgery',
            title: 'Хирургия',
            icon: faBone,
            description: 'Операции любой сложности, включая онкологические, ортопедические и абдоминальные',
            link: '/services/surgery'
        },
        {
            id: 'dentistry',
            title: 'Стоматология',
            icon: faTeeth,
            description: 'Лечение зубов и десен, чистка, удаление, протезирование для животных',
            link: '/services/dentistry'
        },
        {
            id: 'dermatology',
            title: 'Дерматология',
            icon: faAllergies,
            description: 'Диагностика и лечение кожных заболеваний, аллергий, паразитарных инфекций',
            link: '/services/dermatology'
        },
        {
            id: 'ophthalmology',
            title: 'Офтальмология',
            icon: faEye,
            description: 'Лечение заболеваний глаз, микрохирургия, диагностика зрения',
            link: '/services/ophthalmology'
        },
        {
            id: 'laboratory',
            title: 'Лабораторные исследования',
            icon: faFlask,
            description: 'Анализы крови, мочи, гистология, цитология, генетические тесты',
            link: '/services/laboratory'
        },
    ];

    return (
        <>
            <Container className='my-3 p-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item active>Услуги</Breadcrumb.Item>
                </Breadcrumb>

                <Container>
                    <h1 className="mb-4">Услуги ветеринарной клиники</h1>

                    <div className="mb-5">
                        <p>
                            Мы предлагаем полный спектр ветеринарных услуг — от стандартных профилактических процедур
                            до сложных диагностических исследований и хирургических операций.
                            В нашей клинике доступны как базовые услуги, так и специализированные направления,
                            такие как эндоскопические исследования или стоматологическое лечение.
                        </p>
                        <p>
                            Рекомендуем перед выбором любой процедуры проконсультироваться с нашим специалистом.
                            Это поможет определить необходимость, оптимальные сроки и возможные противопоказания
                            для вашего питомца, обеспечив максимально эффективный и безопасный результат.
                        </p>
                    </div>
                </Container>

                <Container className="text-center animal-types-container mb-5">
                    <Row>
                        <h1 className="mb-4">Все услуги <span className="colored-text">ветклиники</span></h1>
                        <p>Выберите направление, чтобы узнать подробности о процедурах, показаниях и подготовке</p>
                    </Row>
                </Container>
            </Container>

            <Container className='mb-5'>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {servicesData.map((service, index) => (
                        <Col key={service.id}>
                            <Link
                                to={service.link}
                                className="text-decoration-none"
                            >
                                <Card className='service-card h-100 py-3'>
                                    <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                                        <div className="service-icon mb-3">
                                            <FontAwesomeIcon
                                                icon={service.icon}
                                                size="2x"
                                                className="text-success"
                                            />
                                        </div>
                                        <Card.Title className="mb-3">{service.title}</Card.Title>
                                        <Card.Text className='card-description flex-grow-1'>
                                            {service.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default ServicesList;