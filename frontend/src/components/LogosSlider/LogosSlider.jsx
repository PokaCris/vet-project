import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Container, Row, Col, Button } from 'react-bootstrap';

import valta from '../../assets/brands/valta.png';
import triol from '../../assets/brands/triol.jpg';
import royal from '../../assets/brands/royal.png';
import purina from '../../assets/brands/purina.png';
import ivanko from '../../assets/brands/ivanko.jpg';
import bayer from '../../assets/brands/bayer.jpg';
import animalid from '../../assets/brands/animalid.png';

import './LogosSlider.css';

const LogosSlider = () => {
    const navigate = useNavigate();

    const logos = [
        { id: 1, src: valta, alt: 'Valta' },
        { id: 2, src: triol, alt: 'Triol' },
        { id: 3, src: royal, alt: 'Royal Canin' },
        { id: 4, src: purina, alt: 'Purina' },
        { id: 5, src: ivanko, alt: 'Ivanko' },
        { id: 6, src: bayer, alt: 'Bayer' },
        { id: 7, src: animalid, alt: 'Animal ID' },
    ];

    const duplicatedLogos = [...logos, ...logos];

    const handleButtonClick = () => {
    navigate('/about');
    
    setTimeout(() => {
        scroller.scrollTo('partnersElem', {
            duration: 800,
            delay: 0,
            smooth: true,
            offset: -100,
        });
    }, 400);
};

    return (
        <>
            <Container className="logos-section text-center py-5 mb-4">
                <Row>
                    <h1 className="mb-4">
                        Наши <span className="colored-text">партнеры</span>
                    </h1>
                    <p className="section-subtitle">
                        Мы сотрудничаем с лучшими производителями ветеринарных препаратов и кормов
                    </p>
                </Row>

                <Row className="mt-4">
                    <Col>
                        <div className="slider-wrapper">
                            <div className="slider">
                                <div className="slide-track">
                                    {duplicatedLogos.map((logo, index) => (
                                        <div className="slide" key={`${logo.id}-${index}`}>
                                            <img
                                                src={logo.src}
                                                height="80"
                                                width="200"
                                                alt={logo.alt}
                                                className="logo-img"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col className="text-center">
                        <Button
                            variant="light"
                            size="lg"
                            className='btn-style'
                            onClick={handleButtonClick}
                        >
                            Все наши партнеры
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default LogosSlider;