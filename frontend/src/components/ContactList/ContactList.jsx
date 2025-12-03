import { useState } from 'react';
import { Container, Breadcrumb, Row, Col, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';

import building1 from '../../assets/contacts/build1.jpg';
import building2 from '../../assets/contacts/build2.jpg';
import building3 from '../../assets/contacts/build3.jpeg';

import './ContactList.css';

function ContactList() {
    const [mapLoaded, setMapLoaded] = useState(false);

    const contacts = [
        {
            id: 1,
            icon: faPhone,
            title: 'Телефон',
            info: '8-800-999-88-77',
            link: 'tel:88009998877',
            description: 'Бесплатный звонок по России'
        },
        {
            id: 2,
            icon: faEnvelope,
            title: 'Email',
            info: 'VetClinic@mail.ru',
            link: 'mailto:VetClinic@mail.ru',
            description: 'Ответим в течение 24 часов'
        },
        {
            id: 3,
            icon: faLocationDot,
            title: 'Адрес',
            info: 'г. Краснодар, ул. Центральная, д. 10/4',
            link: 'https://yandex.ru/maps/-/CDUzZPVv',
            description: 'Рядом с центральным парком'
        },
        {
            id: 4,
            icon: faClock,
            title: 'Режим работы',
            info: 'с 8:00 до 20:00',
            link: null,
            description: 'Без выходных и перерывов'
        }
    ];

    const carouselItems = [
        {
            id: 1,
            image: building1,
            alt: 'Главный вход в ветклинику',
            title: 'Главный вход'
        },
        {
            id: 2,
            image: building2,
            alt: 'Здание ветклиники',
            title: 'Наша клиника'
        },
        {
            id: 3,
            image: building3,
            alt: 'Входная группа',
            title: 'Входная группа'
        }
    ];

    return (
        <>
            <Container className='my-3 p-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item active>Контакты</Breadcrumb.Item>
                </Breadcrumb>
            </Container>

            <Container>
                <h1 className='mb-5'>Контакты</h1>

                <div className='mb-5'>
                    <p>
                        Мы всегда рады помочь вам и вашим питомцам! Наша клиника находится 
                        в удобном месте с парковкой. При необходимости можно вызвать врача на дом.
                    </p>
                </div>

                <Row className="mb-5">
                    <Col lg={5} className="mb-4 mb-lg-0">
                        <div className="contact-cards-column">
                            {contacts.map((contact) => (
                                <div key={contact.id} className="contact-card-horizontal p-4 mb-3">
                                    <div className="d-flex align-items-start">
                                        <div className="contact-icon-wrapper me-4">
                                            <FontAwesomeIcon 
                                                icon={contact.icon} 
                                                className="contact-icon" 
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h5 className="contact-title mb-2">{contact.title}</h5>
                                            {contact.link ? (
                                                <a 
                                                    href={contact.link} 
                                                    className="contact-info d-block mb-1"
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                >
                                                    {contact.info}
                                                </a>
                                            ) : (
                                                <p className="contact-info mb-1">{contact.info}</p>
                                            )}
                                            <p className="contact-description text-muted small mb-0">
                                                {contact.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                    
                    <Col lg={7}>
                        <h4 className="mb-4">Наша клиника</h4>
                        <Carousel fade indicators={false} className="building-carousel">
                            {carouselItems.map((item) => (
                                <Carousel.Item key={item.id}>
                                    <img
                                        className="d-block w-100"
                                        src={item.image}
                                        alt={item.alt}
                                    />
                                    <Carousel.Caption>
                                        <h5>{item.title}</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>

                <div className="mb-5">
                    <h4 className="mb-4">Мы на карте</h4>
                    <div className="map-container">
                        {!mapLoaded && (
                            <div className="map-placeholder">
                                <p>Загрузка карты...</p>
                            </div>
                        )}
                        <iframe
                            title="Карта расположения ветклиники"
                            src="https://yandex.ru/map-widget/v1/?ll=38.976885%2C45.039266&z=16&l=map&pt=38.976885%2C45.039266%2Cpm2gnm&text=Ветклиника%20%22VetCare%22"
                            width="100%"
                            height="400"
                            style={{ border: 'none' }}
                            allowFullScreen
                            loading="lazy"
                            onLoad={() => setMapLoaded(true)}
                        ></iframe>
                    </div>
                    <div className="mt-3">
                        <p className="text-muted small mb-0">
                            Нажмите на метку для подробной информации о клинике
                        </p>
                    </div>
                </div>

                <div className="additional-info mb-5">
                    <h4 className="mb-4">Как добраться</h4>
                    <Row>
                        <Col md={6}>
                            <h6>На автомобиле</h6>
                            <p className="text-muted">
                                Удобная парковка на 15 машиномест. Въезд с ул. Центральной.
                                GPS-координаты: 45.039266, 38.976885
                            </p>
                        </Col>
                        <Col md={6}>
                            <h6>Общественным транспортом</h6>
                            <p className="text-muted">
                                Автобусы: 2, 7, 14, 25 (остановка "Центральный парк"). 
                                Троллейбусы: 4, 9 (остановка "Улица Центральная").
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}

export default ContactList;