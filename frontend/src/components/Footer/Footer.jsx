import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import placeholderImage from '../../assets/footer/example.jpg';
import './Footer.css';


function Footer() {
    return (
        <footer className="footer pt-3">
            <Container>
                <Row>
                    <Col md={5}>
                        <h4 className="text-uppercase">VetClinic</h4>
                        <ul className="list-unstyled">
                            <li className="mb-2">Забота о ваших питомцах - наша главная цель.</li>
                            <li className="mb-1"><FontAwesomeIcon icon={faPhone} /> 8-800-999-88-77</li>
                            <li className="mb-1"><FontAwesomeIcon icon={faEnvelope} /> VetClinic@mail.ru</li>
                            <li className="mb-1"><FontAwesomeIcon icon={faLocationDot} /> г.Краснодар, ул.Центральная, д.10/4</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h4 className="text-uppercase">Навигация</h4>
                        <ul className="list-unstyled">
                            <li><Link to="/services">Услуги</Link></li>
                            <li><Link to="/price-clinic">Цены</Link></li>
                            <li><Link to="/doctors">Врачи</Link></li>
                            <li><Link to="/contacts">Контакты</Link></li>
                        </ul>
                        <div className="my-3">
                            <a href="#" className='me-1'><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
                            <a href="#" className='me-1'><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a>
                            <a href="#" className='me-1'><FontAwesomeIcon icon={faTelegram} size="lg" /></a>
                            <a href="#" className='me-1'><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h4 className="text-uppercase">Статьи</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#" className="d-flex align-items-center mb-2">
                                    <img src={placeholderImage} alt="Заглушка" className="me-2 img-style" />
                                    <span>Интересная статья с названием 1</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="d-flex align-items-center mb-2">
                                    <img src={placeholderImage} alt="Заглушка" className="me-2 img-style" />
                                    <span>Интересная статья с названием 2</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="d-flex align-items-center mb-2">
                                    <img src={placeholderImage} alt="Заглушка" className="me-2 img-style" />
                                    <span>Интересная статья с названием 3</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="d-flex align-items-center mb-2">
                                    <img src={placeholderImage} alt="Заглушка" className="me-2 img-style" />
                                    <span>Интересная статья с названием 4</span>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <div className="footer-copyright text-light text-center py-1">
                <p>&copy; {new Date().getFullYear()} Все права защищены</p>
            </div>
        </footer>
    );
}

export default Footer;