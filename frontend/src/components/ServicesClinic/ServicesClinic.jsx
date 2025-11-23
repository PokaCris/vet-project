import { Container, Card, Row, Col } from 'react-bootstrap';
import therapy from "../../assets/services_img/therapy.jpg";
import surgery from "../../assets/services_img/surgery.jpg";
import dermatology from "../../assets/services_img/dermatology.jpg";
import dentistry from "../../assets/services_img/dentistry.jpg";
import laboratory from "../../assets/services_img/laboratory.jpg";
import diagnostics from "../../assets/services_img/diagnostics.jpg";

import './ServicesClinic.css';

const cardData = [
    {
        title: 'Терапия',
        text: 'Оказание общей медицинской помощи и лечение различных заболеваний.',
        image: therapy,
    },
    {
        title: 'Хирургия',
        text: 'Проведение операций и хирургических вмешательств для лечения заболеваний.',
        image: surgery,
    },
    {
        title: 'Дерматология',
        text: 'Диагностика и лечение кожных заболеваний, волос и ногтей.',
        image: dermatology,
    },
    {
        title: 'Диагностика',
        text: 'Проведение различных диагностических процедур для выявления заболеваний.',
        image: diagnostics,
    },
    {
        title: 'Стоматология',
        text: 'Предоставление услуг по уходу за зубами и полостью рта.',
        image: dentistry,
    },
    {
        title: 'Лаборатория',
        text: 'Выполнение лабораторных анализов для диагностики и мониторинга здоровья.',
        image: laboratory,
    },
];

function ServicesClinic() {
    return (
        <>
            <Container fluid className="text-center animal-types-container">
                <Row>
                    <h1 className="mb-4">Коротко о <span className="colored-text">важном</span></h1>
                    <p>Мы расскажем с какими проблемами вы можете столкнуться и когда необоходио обратиться  врачу</p>
                </Row>
            </Container>
            <Container className='my-5'>
                <Row xs={2} md={2} lg={3} className="g-4">
                    {cardData.map((card, index) => (
                        <Col key={index}>
                            <Card className='service-card'>
                                <Card.Img variant="top" src={card.image} alt={card.title} />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text className='card-description'>{card.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default ServicesClinic;