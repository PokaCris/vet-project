import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';

import { doctorsData } from '../../data/doctorsData';
import leftArrow from '../../assets/arrows/left-arrow.png';
import rightArrow from '../../assets/arrows/right-arrow.png';

import './VeterinarTypes.css';

function VeterinarTypes() {
    const [startIndex, setStartIndex] = useState(0);
    const navigate = useNavigate();

    const showDoctors = [];
    for (let i = 0; i < 3; i++) {
        const index = (startIndex + i) % doctorsData.length;
        showDoctors.push(doctorsData[index]);
    }

    const nextSlide = () => {
        setStartIndex((prev) => (prev + 1) % doctorsData.length);
    };

    const prevSlide = () => {
        setStartIndex((prev) => (prev - 1 + doctorsData.length) % doctorsData.length);
    };

    const handleDoctorClick = (doctorId) => {
        navigate(`/doctor/${doctorId}`);
    };

    const handleAllDoctorsClick = () => {
        navigate('/doctors');
    };

    const calculateExperienceYears = (experienceText) => {
        const yearMatch = experienceText.match(/\d{4}/);
        if (yearMatch) {
            const startYear = parseInt(yearMatch[0]);
            const currentYear = new Date().getFullYear();
            const years = currentYear - startYear;
            return years;
        }
        return null;
    };

    const getYearsText = (years) => {
        if (years === 1) return 'года';
        if (years > 1 && years < 5) return 'года';
        return 'лет';
    };

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
                            {showDoctors.map((doctor) => {
                                const experienceYears = calculateExperienceYears(doctor.experience);
                                
                                return (
                                    <Col key={doctor.id} xs={12} md={4} className="d-flex justify-content-center">
                                        <Card className="main-doctor-card d-flex flex-column align-items-center p-3 mx-auto"
                                            onClick={() => handleDoctorClick(doctor.id)}
                                            style={{ cursor: 'pointer' }}>
                                            
                                            {experienceYears && (
                                                <div className="experience-badge-container">
                                                    <Badge bg="success" className="experience-badge">
                                                        Стаж {experienceYears} {getYearsText(experienceYears)}
                                                    </Badge>
                                                </div>
                                            )}
                                            
                                            {doctor.image && (
                                                <Card.Img
                                                    variant="top"
                                                    src={doctor.image}
                                                    className="main-doctor-image mb-3"
                                                    alt={doctor.name}
                                                />
                                            )}
                                            <div className="main-card-content">
                                                <div>
                                                    <h5 className="doctor-name mb-3">{doctor.name}</h5>
                                                    <p className="doctor-specialties mb-4">
                                                        {doctor.specialties.slice(0, 2).join(', ')}
                                                    </p>
                                                </div>
                                                <div className="more-text-container">
                                                    <span className="more-text">Подробнее</span>
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                    
                    <Col xs={2} className="text-start">
                        <Button onClick={nextSlide} className="arrow-button btn-light">
                            <img src={rightArrow} alt="Next" className="arrow-image" />
                        </Button>
                    </Col>
                </Row>
                
                <Row className="justify-content-center mt-5">
                    <Col xs={12} md={6} lg={4} className="text-center">
                        <Button
                            variant="light"
                            size="lg"
                            className='btn-style'
                            onClick={handleAllDoctorsClick}
                        >
                            Дружная команда клиники
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default VeterinarTypes;