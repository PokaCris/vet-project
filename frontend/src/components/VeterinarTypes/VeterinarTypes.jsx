import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

import ivanImg from '../../assets/veterinars/1.png';
import petrImg from '../../assets/veterinars/2.png';
import mariaImg from '../../assets/veterinars/3.png';

import leftArrow from '../../assets/arrows/left-arrow.png';
import rightArrow from '../../assets/arrows/right-arrow.png';

import './VeterinarTypes.css';

const doctorsData = [
    {
        name: 'Иван Иванов',
        position: 'Ветеринар-офтальмолог',
        imageUrl: ivanImg
    },
    {
        name: 'Петр Петров',
        position: 'Ветеринар-хирург',
        imageUrl: petrImg
    },
    {
        name: 'Мария Смирнова',
        position: 'Дерматолог',
        imageUrl: mariaImg
    },
];

function DoctorCard({ name, position, imageUrl }) {
    return (
        <Card className="doctor-card d-flex flex-column align-items-center justify-content-between p-3 mx-auto">
            {imageUrl && (
                <Card.Img
                    variant="top"
                    src={imageUrl}
                    className="doctor-image mb-3"
                />
            )}
            <div className="card-content">
                <div>
                    <h5 className="mb-2">{name}</h5>
                    <p className="mb-3">{position}</p>
                </div>
                <Button variant="secondary" className="more-btn w-100">
                    Подробнее
                </Button>
            </div>
        </Card>
    );
}

function VeterinarTypes() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);
    const totalCards = doctorsData.length;

    useEffect(() => {
        const updateView = () => {
            if (window.innerWidth <= 768) {
                setVisibleCards(1);
            } else {
                setVisibleCards(3);
            }
        };

        updateView();
        window.addEventListener('resize', updateView);

        return () => window.removeEventListener('resize', updateView);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalCards);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    };

    const displayedDoctors = [];
    for (let i = 0; i < visibleCards; i++) {
        displayedDoctors.push(doctorsData[(currentIndex + i) % totalCards]);
    }

    return (
        <>
            <Container fluid className="text-center animal-types-container">
                <Row>
                    <h1 className="mb-4">
                        Наши <span className="colored-text">Врачи</span>
                    </h1>
                    <p>Познакомьтесь с нашими специалистами</p>
                </Row>
            </Container>
            <Container fluid className="mb-5 type-doctors">
                <Row className="align-items-center">
                    <Col xs={2} className="text-end">
                        <Button onClick={prevSlide} className="arrow-button btn-light">
                            <img src={leftArrow} alt="Previous" className="arrow-image" />
                        </Button>
                    </Col>
                    <Col xs={8} className="d-flex justify-content-center">
                        <Row className="g-3">
                            {displayedDoctors.map((doctor, index) => (
                                <Col key={index} xs={12} md={4} className="d-flex justify-content-center">
                                    <DoctorCard
                                        name={doctor.name}
                                        position={doctor.position}
                                        imageUrl={doctor.imageUrl}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col xs={2} className="text-start">
                        <Button onClick={nextSlide} className="arrow-button btn-light">
                            <img src={rightArrow} alt="Next" className="arrow-image" />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default VeterinarTypes;