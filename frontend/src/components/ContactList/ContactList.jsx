import { useState } from 'react';
import { Container, Breadcrumb, Row, Col, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';

import building1 from '../../assets/contacts/build1.jpg';
import building2 from '../../assets/contacts/build2.jpg';
import building3 from '../../assets/contacts/build3.jpg';

import './ContactList.css';

function ContactList() {
    const [mapLoaded, setMapLoaded] = useState(false);
    const [carouselIndex, setCarouselIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setCarouselIndex(selectedIndex);
    };

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
            title: 'Главный вход',
            description: 'Вход в нашу современную клинику'
        },
        {
            id: 2,
            image: building2,
            alt: 'Регистратура ветклиники',
            title: 'Наша регистратура клиники',
            description: 'Удобный вход для посетителей с питомцами'
        },
        {
            id: 3,
            image: building3,
            alt: 'Смотровой кабинет',
            title: 'Смотровой кабинет',
            description: 'Современное здание с оборудованными кабинетами'
        }
    ];

    return (
        <>
            <Container className='contact-container my-3 p-3'>
                <Breadcrumb className="contact-breadcrumb">
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item active>Контакты</Breadcrumb.Item>
                </Breadcrumb>

                <div className="contact-page-container">
                    <h1 className='contact-main-title mb-5'>Контакты</h1>
                    <div className='contact-intro mb-5'>
                        <p>
                            Мы всегда рады помочь вам и вашим питомцам! Наша клиника находится
                            в удобном месте с парковкой. При необходимости можно вызвать врача на дом.
                        </p>
                    </div>
                    <Row className="contact-main-row mb-5 d-flex align-items-center">
                        <Col lg={5} className="mb-4 mb-lg-0">
                            <div className="contact-cards-wrapper">
                                {contacts.map((contact) => (
                                    <div key={contact.id} className="contact-info-card p-4 mb-3">
                                        <div className="d-flex align-items-start">
                                            <div className="contact-info-icon me-4">
                                                <FontAwesomeIcon
                                                    icon={contact.icon}
                                                    className="contact-info-icon-svg"
                                                />
                                            </div>
                                            <div className="contact-info-content">
                                                <h5 className="contact-info-title mb-2">{contact.title}</h5>
                                                {contact.link ? (
                                                    <a
                                                        href={contact.link}
                                                        className="contact-info-link d-block mb-1"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {contact.info}
                                                    </a>
                                                ) : (
                                                    <p className="contact-info-text mb-1">{contact.info}</p>
                                                )}
                                                <p className="contact-info-desc text-muted small mb-0">
                                                    {contact.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col>

                        <Col lg={7}>
                            <h4 className="contact-clinic-title mb-4">Наша клиника</h4>
                            <div className="clinic-carousel-wrapper">
                                <Carousel
                                    activeIndex={carouselIndex}
                                    onSelect={handleSelect}
                                    fade
                                    indicators
                                    controls
                                    interval={3000}
                                    className="clinic-carousel"
                                >
                                    {carouselItems.map((item) => (
                                        <Carousel.Item key={item.id}>
                                            <div className="clinic-carousel-img-container">
                                                <img
                                                    src={item.image}
                                                    alt={item.alt}
                                                    className="clinic-carousel-img"
                                                />
                                            </div>
                                            <Carousel.Caption className="clinic-carousel-caption">
                                                <h3 className="clinic-carousel-title">{item.title}</h3>
                                                <p className="clinic-carousel-description">{item.description}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                    <div className="contact-map-section mb-5">
                        <h4 className="contact-map-title mb-4">Мы на карте</h4>
                        <div className="contact-map-container">
                            {!mapLoaded && (
                                <div className="contact-map-loading">
                                    <p>Загрузка карты...</p>
                                </div>
                            )}
                            <iframe
                                title="Карта расположения ветклиники"
                                src="https://yandex.ru/map-widget/v1/?z=16&ll=38.976885%2C45.039266&pt=38.976885%2C45.039266%2Cpm2gnm~Ветклиника%20VetClinic"
                                width="100%"
                                height="400"
                                className="contact-map-iframe"
                                allowFullScreen
                                loading="lazy"
                                onLoad={() => setMapLoaded(true)}
                            ></iframe>
                        </div>
                    </div>
                    <div className="contact-directions mb-5">
                        <h4 className="contact-directions-title mb-4">Как добраться</h4>
                        <Row>
                            <Col md={6}>
                                <h6 className="contact-transport-title">На автомобиле</h6>
                                <p className="contact-transport-text text-muted">
                                    Удобная парковка на 15 машиномест. Въезд с ул. Центральной.
                                    GPS-координаты: 45.039266, 38.976885
                                </p>
                            </Col>
                            <Col md={6}>
                                <h6 className="contact-transport-title">Общественным транспортом</h6>
                                <p className="contact-transport-text text-muted">
                                    Автобусы: 2, 7, 14, 25 (остановка "Центральный парк").
                                    Троллейбусы: 4, 9 (остановка "Улица Центральная").
                                </p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default ContactList;