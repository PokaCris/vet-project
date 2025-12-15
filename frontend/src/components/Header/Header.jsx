import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faCircleUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import api from '../../api/index';
import AuthModal from '../AuthModal/AuthModal';
import logo from '../../assets/logo.jpg';
import './Header.css';

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [showAuthModal, setShowAuthModal] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await api.get('/auth/me');
                setUser(response.data || null);
            } catch (error) {
                setUser(null);
            }
        };

        checkAuth();
        
        const handleStorage = (event) => {
            if (event.key === 'auth_logout') {
                setUser(null);
                if (location.pathname === '/personal-page') {
                    navigate('/');
                }
            }
        };
        
        window.addEventListener('storage', handleStorage);
        
        return () => window.removeEventListener('storage', handleStorage);
    }, [location.pathname, navigate]);

    const handleAuthSuccess = (userData) => {
        setUser(userData);
        setTimeout(() => {
            window.location.href = '/personal-page';
        }, 1000);
    };

    const handleLogout = async () => {
        try {
            await api.post('/auth/logout');
        } catch (error) {
            console.error('Ошибка выхода:', error);
        }

        setUser(null);
        
        localStorage.setItem('auth_logout', Date.now().toString());
        localStorage.removeItem('auth_logout');

        window.location.href = '/';
    };

    return (
        <>
            <div className="pre-header text-center p-1 d-flex justify-content-around cursor-default">
                <span><FontAwesomeIcon icon={faLocationDot} /> г.Краснодар, ул.Центральная, д.10/4</span>
                <span><FontAwesomeIcon icon={faClock} /> Режим работы с 8:00 до 20:00</span>
            </div>

            <Navbar variant="light" bg="light" expand="lg" className="header">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='logo d-flex align-items-center'>
                        <img src={logo} width="35" height="35" className="rounded-circle me-3" alt="Logo" />
                        <span className='my-logo'>VetClinic</span>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                <img src={logo} width="35" height="35" className="rounded-circle me-3" alt="Logo" /> VetClinic
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="ms-auto">
                                <Nav.Link as={Link} to="/services">Услуги</Nav.Link>
                                <Nav.Link as={Link} to="/price-clinic">Цены</Nav.Link>
                                <Nav.Link as={Link} to="/doctors">Врачи</Nav.Link>
                                <Nav.Link as={Link} to="/contacts">Контакты</Nav.Link>
                                
                                {user ? (
                                    <>
                                        <Nav.Link as={Link} to="/personal-page" className="login-btn">
                                            <FontAwesomeIcon icon={faCircleUser} size="lg" className="me-1" />
                                        </Nav.Link>
                                        <Nav.Link onClick={handleLogout} className="logout-btn ms-2">
                                            <FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" />
                                        </Nav.Link>
                                    </>
                                ) : (
                                    <Nav.Link onClick={() => setShowAuthModal(true)}>
                                        <FontAwesomeIcon icon={faCircleUser} size="lg" /> Войти
                                    </Nav.Link>
                                )}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            
            <AuthModal show={showAuthModal} onHide={() => setShowAuthModal(false)} onSuccess={handleAuthSuccess} />
        </>
    );
}

export default Header;