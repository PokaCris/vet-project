import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faCompass, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';

import { articlesData } from '../../data/articlesData';
import logo from '../../assets/header/logo.jpg';
import placeholderImage from '../../assets/footer/example.jpg';
import './Footer.css';

function Footer() {
    const [randomArticles, setRandomArticles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getRandomArticles = () => {
            const shuffled = [...articlesData].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 4);
        };
        setRandomArticles(getRandomArticles());
    }, []);

    const handleArticleClick = (articleId, e) => {
        e.preventDefault();
        
        sessionStorage.setItem('scrollToArticle', articleId);
        
        if (window.location.pathname === '/articles') {
            if (window.scrollToArticleFromFooter) {
                window.scrollToArticleFromFooter(articleId);
            }
        } else {
            navigate('/articles');
        }
    };

    return (
        <footer className="footer pt-4">
            <Container>
                <Row>
                    <Col md={5}>
                        <div className="d-flex align-items-center mb-3">
                            <h4 className="text-uppercase mb-0 me-2">VetClinic</h4>
                            <img src={logo} width="25" height="25" className="rounded-circle" alt="Logo min" />
                        </div>
                        <ul className="list-unstyled">
                            <li className="mb-3">Забота о ваших питомцах - наша главная цель.</li>
                            <li className="mb-2"><FontAwesomeIcon icon={faPhone} className="me-2" /> 8-800-999-88-77</li>
                            <li className="mb-2"><FontAwesomeIcon icon={faEnvelope} className="me-2" /> VetClinic@mail.ru</li>
                            <li className="mb-2"><FontAwesomeIcon icon={faLocationDot} className="me-2" /> г. Краснодар, ул.Центральная, д.10/4</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <div className="d-flex align-items-center mb-3">
                            <h4 className="text-uppercase mb-0 me-2">Навигация</h4>
                            <FontAwesomeIcon icon={faCompass} size='xl' />
                        </div>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/services">Услуги</Link></li>
                            <li className="mb-2"><Link to="/price-clinic">Цены</Link></li>
                            <li className="mb-2"><Link to="/doctors">Врачи</Link></li>
                            <li className="mb-3"><Link to="/contacts">Контакты</Link></li>
                        </ul>
                        <div className="my-4">
                            <a href="#" className='me-3'><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
                            <a href="#" className='me-3'><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a>
                            <a href="#" className='me-3'><FontAwesomeIcon icon={faTelegram} size="lg" /></a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex align-items-center mb-3">
                            <h4 className="text-uppercase mb-0 me-2">Статьи</h4>
                            <FontAwesomeIcon icon={faNewspaper} size='xl' />
                        </div>
                        <ul className="list-unstyled">
                            {randomArticles.map((article) => (
                                <li key={article.id}>
                                    <a 
                                        href="#" 
                                        className="d-flex align-items-center mb-3 footer-article-link"
                                        onClick={(e) => handleArticleClick(article.id, e)}
                                    >
                                        <div className="footer-article-img-container me-3">
                                            <img 
                                                src={article.image || placeholderImage} 
                                                alt={article.title} 
                                                className="img-style" 
                                            />
                                        </div>
                                        <span>{article.title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>

            <div className="footer-copyright text-light text-center py-1 d-flex justify-content-around cursor-default mt-2">
                <span>&copy; {new Date().getFullYear()} Все права защищены</span>
                <span><Link to="/privacy-policy">Политика конфиденциальности</Link></span>
            </div>
        </footer>
    );
}

export default Footer;