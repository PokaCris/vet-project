import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Offcanvas, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faCircleUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import { useAuth } from '../../context/AuthContext';
import AuthModal from '../AuthModal/AuthModal';
import logo from '../../assets/header/logo.jpg';
import './Header.css';

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, loading, logout } = useAuth();
    const [showAuthModal, setShowAuthModal] = useState(false);

    const isParentActive = (paths) => {
        return paths.some(path => location.pathname.startsWith(path));
    };

    const otherPaths = ['/about', '/articles'];
    const userPaths = ['/personal-page', '/profile'];

    const handleAuthSuccess = (userData) => {
        setTimeout(() => {
            window.location.href = '/personal-page';
        }, 1000);
    };

    const handleLogout = async () => {
        await logout();

        if (location.pathname === '/personal-page') {
            navigate('/');
        }
    };

    return (
        <>
            <div className="pre-header text-center p-1 d-flex justify-content-around cursor-default">
                <span><FontAwesomeIcon icon={faLocationDot} /> г.Краснодар, ул.Центральная, д.10/4</span>
                <span><FontAwesomeIcon icon={faClock} /> Режим работы с 8:00 до 20:00</span>
            </div>

            <Navbar variant="light" bg="light" expand="lg" className="header">
                <Container>
                    <Navbar.Brand>
                        <Nav.Link as={Link} to="/" className='logo d-flex align-items-center' eventKey="/">
                            <img src={logo} width="35" height="35" className="rounded-circle me-3" alt="Logo" />
                            <span className='my-logo'>VetClinic</span>
                        </Nav.Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                <img src={logo} width="35" height="35" className="rounded-circle me-3" alt="Logo" /> VetClinic
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav activeKey={location.pathname} className="ms-auto">
                                <Nav.Link as={Link} to="/services" eventKey="/services">Услуги</Nav.Link>
                                <Nav.Link as={Link} to="/price-clinic" eventKey="/price-clinic">Цены</Nav.Link>
                                <Nav.Link as={Link} to="/doctors" eventKey="/doctors">Врачи</Nav.Link>
                                <Nav.Link as={Link} to="/contacts" eventKey="/contacts">Контакты</Nav.Link>

                                <NavDropdown
                                    title="Другое"
                                    id="offcanvas-nav-dropdown"
                                    menuVariant="light"
                                    align="end"
                                    active={isParentActive(otherPaths)}
                                >
                                    <NavDropdown.Item as={Link} to="/about" eventKey="/about">О нас</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to="/articles" eventKey="/articles">Статьи</NavDropdown.Item>
                                </NavDropdown>

                                {!loading && user ? (
                                    <NavDropdown
                                        title={<FontAwesomeIcon icon={faCircleUser} size="xl" />}
                                        id="user-nav-dropdown"
                                        menuVariant="light"
                                        align="end"
                                        active={isParentActive(userPaths)}
                                        className="no-arrow"
                                    >
                                        <NavDropdown.Item as={Link} to="/personal-page">
                                            <FontAwesomeIcon icon={faCircleUser} className="me-2" />
                                            Профиль
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={handleLogout}>
                                            <FontAwesomeIcon icon={faArrowRightFromBracket} className="me-2" />
                                            Выйти
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                ) : (
                                    <Nav.Link
                                        onClick={() => setShowAuthModal(true)}
                                        eventKey="/login"
                                    >
                                        <FontAwesomeIcon icon={faCircleUser} size="xl" /> {loading ? '...' : 'Войти'}
                                    </Nav.Link>
                                )}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <AuthModal
                show={showAuthModal}
                onHide={() => setShowAuthModal(false)}
                onSuccess={handleAuthSuccess}
            />
        </>
    );
}

export default Header;