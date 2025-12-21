import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRubleSign, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';

import therapy from "../../assets/services_img/therapy.jpg";
import surgery from "../../assets/services_img/surgery.jpg";
import dermatology from "../../assets/services_img/dermatology.jpg";
import dentistry from "../../assets/services_img/dentistry.jpg";
import laboratory from "../../assets/services_img/laboratory.jpg";
import diagnostics from "../../assets/services_img/diagnostics.jpg";
import rub from "../../assets/rub.png";


import './ServicesClinic.css';

const cardData = [
    {
        title: 'Терапия',
        text: 'Оказание общей медицинской помощи и лечение различных заболеваний.',
        image: therapy,
        price: 'Первичный прием от 1500',
        link: 'consultation'
    },
    {
        title: 'Хирургия',
        text: 'Проведение операций и хирургических вмешательств для лечения заболеваний.',
        image: surgery,
        price: 'Кастрация от 3500',
        link: 'surgery'
    },
    {
        title: 'Дерматология',
        text: 'Диагностика и лечение кожных заболеваний, волос и ногтей.',
        image: dermatology,
        price: 'Консультация от 1600',
        link: 'dermatology'
    },
    {
        title: 'Диагностика',
        text: 'Проведение различных диагностических процедур для выявления заболеваний.',
        image: diagnostics,
        price: 'УЗИ от 1700',
        link: 'diagnostics'
    },
    {
        title: 'Стоматология',
        text: 'Предоставление услуг по уходу за зубами и полостью рта.',
        image: dentistry,
        price: 'Лечение кариеса от 1800',
        link: 'dentistry'
    },
    {
        title: 'Лаборатория',
        text: 'Выполнение лабораторных анализов для диагностики и мониторинга здоровья.',
        image: laboratory,
        price: 'Анализы от 700',
        link: 'tests'
    },
];

function ServicesClinic() {
    const navigate = useNavigate();

    const handleCardClick = (sectionId) => {
        navigate('/price-clinic');

        setTimeout(() => {
            scroller.scrollTo(sectionId, {
                duration: 800,
                delay: 0,
                smooth: true,
                offset: -100,
            });
        }, 300);
    };

    const handleAllServicesClick = () => {
        navigate('/price-clinic');
    };

    return (
        <>
            <Container fluid className="my-5 text-center animal-types-container">
                <Row>
                    <h1 className="mb-4">Коротко о <span className="colored-text">важном</span></h1>
                    <p>Мы расскажем с какими проблемами вы можете столкнуться и когда необоходио обратиться  врачу</p>
                </Row>
            </Container>
            <Container className='my-5'>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {cardData.map((card, index) => (
                        <Col key={index}>
                            <div className="text-decoration-none cursor-pointer"
                                onClick={() => handleCardClick(card.link)}>
                                <Card className='service-card-main'>
                                    <Card.Img variant="top" src={card.image} alt={card.title} />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>{card.title}</Card.Title>
                                        <Card.Text className='card-description'>{card.text}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer className='d-flex flex-row align-items-center'>
                                        <img src={rub} alt="руб" className="rub-style me-2" />
                                        <span>{card.price}</span>
                                    </Card.Footer>
                                </Card>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row className="justify-content-center my-4">
                    <Col xs={12} md={6} className="text-center">
                        <Button
                            variant="light"
                            size="lg"
                            className='btn-style-serve'
                            onClick={handleAllServicesClick}
                        >
                            Стоимость всех услуг клиники
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ServicesClinic;