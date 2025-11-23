import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faCircleUser } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/logo.jpg';

import './Header.css';

function Header() {
    const location = useLocation();

    const isParentActive = (paths) => {
        return paths.some(p => location.pathname.startsWith(p));
    };
    const otherPaths = ['/about', '/articles'];

    return (
        <>
            <div className="pre-header text-center p-1 d-flex justify-content-around cursor-default">
                <span><FontAwesomeIcon icon={faLocationDot} /> г.Краснодар, ул.Центральная, д.10/4</span>
                <span><FontAwesomeIcon icon={faClock} /> Режим работы с 8:00 до 20:00</span>
            </div>

            <Navbar variant="dark" bg="dark" expand="lg" className="header">
                <Container>
                    <Navbar.Brand className="d-flex align-items-center">
                        <Nav.Link as={Link} to="/" className='logo'>
                            <img
                                src={logo}
                                width="35"
                                height="35"
                                className="d-inline-block align-top rounded-circle me-3"
                                alt="My logo"
                            />
                            <span>VetClinic</span>
                        </Nav.Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="offcanvasNavbar" />

                    <Navbar.Offcanvas
                        className="offcanvas-custom"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                        data-bs-theme="dark"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                <img
                                    src={logo}
                                    width="35"
                                    height="35"
                                    className="d-inline-block align-top rounded-circle me-3"
                                    alt="My logo"
                                /> VetClinic
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav activeKey={location.pathname} className="ms-auto">
                                <Nav.Link as={Link} to="/services" eventKey="/services">Услуги</Nav.Link>
                                <Nav.Link as={Link} to="/doctors" eventKey="/doctors">Врачи</Nav.Link>
                                <Nav.Link as={Link} to="/contacts" eventKey="/contacts">Контакты</Nav.Link>
                                <NavDropdown
                                    title="Другое"
                                    id="offcanvas-nav-dropdown"
                                    menuVariant="dark"
                                    active={isParentActive(otherPaths)}
                                >
                                    <NavDropdown.Item as={Link} to="/about" eventKey="/about">О нас</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to="/articles" eventKey="/articles">Статьи</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/login">
                                    <FontAwesomeIcon icon={faCircleUser} size="lg" /> Войти
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;