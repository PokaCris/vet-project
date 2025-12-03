import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

import main1 from '../../assets/main_img/main.jpg';
import main2 from '../../assets/main_img/main2.jpg';
import main3 from '../../assets/main_img/main3.jpg';
import './MainImg.css';

const images = [main1, main2, main3];

function MainImg() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="main-img-container">
            <img
                src={images[activeIndex]}
                alt={`Main ${activeIndex + 1}`}
                className="d-block w-100 h-100 main-image"
            />
            <Container className="main-inner-container">
                <Row className="h-100 align-items-center">
                    <Col md={6} className="text-start ps-5 text-white">
                        <h1>Профессиональная ветеринарная помощь с заботой о каждом питомце</h1>
                        <p>Краткое и привлекательное описание предложения.</p>
                        <Button variant="light" size="lg">
                            Записаться на прием
                            <FontAwesomeIcon icon={faPaw} className='ms-2' />
                        </Button>
                    </Col>
                    <Col md={6}></Col>
                </Row>
            </Container>
            <div className="dots-container">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    >
                    </span>
                ))}
            </div>
        </div>
    );
}

export default MainImg;