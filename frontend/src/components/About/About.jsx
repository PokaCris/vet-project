import { Container, Breadcrumb, Row, Col } from 'react-bootstrap';

import number1 from '../../assets/numbers/7500.png';
import number2 from '../../assets/numbers/9.png';
import number3 from '../../assets/numbers/50000.png';

import valtaLogo from '../../assets/brands/valta.png';
import ivankoLogo from '../../assets/brands/ivanko.jpg';
import royalCaninLogo from '../../assets/brands/royal.png';
import purinaLogo from '../../assets/brands/purina.png';
import bayerLogo from '../../assets/brands/bayer.jpg';
import triolLogo from '../../assets/brands/triol.jpg';
import animalIdLogo from '../../assets/brands/animalid.png';

import './About.css';

function About() {
    return (
        <>
            <Container className='my-3 p-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item active>О нас</Breadcrumb.Item>
                </Breadcrumb>

                <Row className='mb-5 about-page-container'>
                    <Col>
                        <h1 className='about-title mb-4'>О нашей клинике</h1>

                        <div className='mb-5'>
                            <p className='about-text'>
                                VetClinic — это современный ветеринарный центр, где забота о здоровье питомцев 
                                сочетается с передовыми медицинскими технологиями. Наша команда объединяет 
                                опытных специалистов, которые ежедневно спасают жизни и возвращают радость 
                                домашним животным и их владельцам.
                            </p>
                            <p className='about-text'>
                                Мы верим, что каждый питомец заслуживает профессионального ухода и внимательного 
                                отношения. В VetClinic созданы все условия для точной диагностики, эффективного 
                                лечения и комфортного восстановления животных.
                            </p>
                        </div>

                        <div className='mb-5'>
                            <h2 className='about-section-title mb-4'>VetClinic в цифрах</h2>
                            <Row className='g-4'>
                                <Col md={4} className='text-center'>
                                    <div className='about-number-card p-4'>
                                        <div className='about-number-image mb-3'>
                                            <img 
                                                src={number1} 
                                                alt="7500 операций" 
                                                className='img-fluid rounded'
                                            />
                                        </div>
                                        <h3 className='about-number-title my-3'>7500 операций</h3>
                                        <p className='about-number-text'>
                                            Успешно проведенных хирургических вмешательств различной сложности
                                        </p>
                                    </div>
                                </Col>
                                
                                <Col md={4} className='text-center'>
                                    <div className='about-number-card p-4'>
                                        <div className='about-number-image mb-3'>
                                            <img 
                                                src={number2} 
                                                alt="9 лет работы" 
                                                className='img-fluid rounded'
                                            />
                                        </div>
                                        <h3 className='about-number-title mb-3'>9 лет на рынке</h3>
                                        <p className='about-number-text'>
                                            Стабильной работы с командой профессиональных ветеринарных специалистов
                                        </p>
                                    </div>
                                </Col>
                                
                                <Col md={4} className='text-center'>
                                    <div className='about-number-card p-4'>
                                        <div className='about-number-image mb-3'>
                                            <img 
                                                src={number3} 
                                                alt="50000 питомцев" 
                                                className='img-fluid rounded'
                                            />
                                        </div>
                                        <h3 className='about-number-title mb-3'>50000 питомцев</h3>
                                        <p className='about-number-text'>
                                            Получили помощь и вернулись к здоровой жизни благодаря современному оборудованию
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div id="partnersElem" className='mb-5'>
                            <h2 className='about-section-title mb-4'>Наши партнеры</h2>
                            <p className='about-text mb-4'>
                                Мы сотрудничаем только с проверенными поставщиками и производителями, 
                                чтобы гарантировать высочайшее качество лечения и ухода за вашими питомцами.
                            </p>

                            <div className='mt-4'>
                                <Row className='g-4'>

                                    <Col md={6} className='mb-4'>
                                        <div className='about-partner-card p-4'>
                                            <div className='d-flex align-items-center mb-0'>
                                                <div className='about-partner-logo me-3 align-self-start'>
                                                    <img src={valtaLogo} alt="Валта Пет Продактс" className='img-fluid' />
                                                </div>
                                                <div className='align-self-center'>
                                                    <h4 className='about-partner-title mb-2'>Валта Пет Продактс</h4>
                                                    <p className='about-partner-text mb-0'>
                                                        Крупнейший поставщик зоотоваров в России с 19-летним опытом. 
                                                        Представляет более 40 мировых брендов из США, Европы и Азии.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md={6} className='mb-4'>
                                        <div className='about-partner-card p-4'>
                                            <div className='d-flex align-items-start mb-0'>
                                                <div className='about-partner-logo me-3'>
                                                    <img src={ivankoLogo} alt="Иванко" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <h4 className='about-partner-title mb-2'>Иванко</h4>
                                                    <p className='about-partner-text mb-0'>
                                                        20 лет на рынке с безупречной репутацией. Специализируется на 
                                                        импорте и оптовой торговле качественными кормами и аксессуарами.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md={6} className='mb-4'>
                                        <div className='about-partner-card p-4'>
                                            <div className='d-flex align-items-start mb-0'>
                                                <div className='about-partner-logo me-3'>
                                                    <img src={royalCaninLogo} alt="Royal Canin" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <h4 className='about-partner-title mb-2'>Royal Canin</h4>
                                                    <p className='about-partner-text mb-0'>
                                                        Мировой лидер в производстве кормов премиум-класса. 
                                                        Более 50 лет научных разработок для здоровья животных.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md={6} className='mb-4'>
                                        <div className='about-partner-card p-4'>
                                            <div className='d-flex align-items-start mb-0'>
                                                <div className='about-partner-logo me-3'>
                                                    <img src={purinaLogo} alt="Nestle Purina" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <h4 className='about-partner-title mb-2'>Nestle Purina</h4>
                                                    <p className='about-partner-text mb-0'>
                                                        Глобальная компания с вековой историей. Разрабатывает 
                                                        инновационные решения в области питания домашних питомцев.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md={6} className='mb-4'>
                                        <div className='about-partner-card p-4'>
                                            <div className='d-flex align-items-start mb-0'>
                                                <div className='about-partner-logo me-3'>
                                                    <img src={bayerLogo} alt="Bayer" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <h4 className='about-partner-title mb-2'>Bayer Animal Health</h4>
                                                    <p className='about-partner-text mb-0'>
                                                        Ведущий мировой производитель ветеринарных препаратов. 
                                                        Более 100 лет инноваций в защите здоровья животных.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md={6} className='mb-4'>
                                        <div className='about-partner-card p-4'>
                                            <div className='d-flex align-items-start mb-0'>
                                                <div className='about-partner-logo me-3'>
                                                    <img src={triolLogo} alt="Триол" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <h4 className='about-partner-title mb-2'>Группа компаний Триол</h4>
                                                    <p className='about-partner-text mb-0'>
                                                        Производитель и поставщик высококачественных зоотоваров. 
                                                        Сотрудничает с 60+ зарубежными компаниями.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md={12} className='mb-4'>
                                        <div className='about-partner-card p-4'>
                                            <div className='d-flex align-items-start mb-0'>
                                                <div className='about-partner-logo me-3'>
                                                    <img src={animalIdLogo} alt="Animal-ID" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <h4 className='about-partner-title mb-2'>Animal-ID</h4>
                                                    <p className='about-partner-text mb-0'>
                                                        Всероссийская база данных чипированных животных. 
                                                        Официальная система идентификации для международных переездов.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='about-summary p-4'>
                            <h3 className='about-summary-title mb-3'>Наша философия</h3>
                            <p className='mb-0'>
                                В VetClinic мы сочетаем профессиональный подход с искренней заботой. 
                                Каждый наш пациент получает индивидуальное внимание, основанное на последних 
                                достижениях ветеринарной медицины. Мы гордимся доверием тысяч владельцев 
                                и продолжаем развиваться, чтобы быть лучшими в своем деле.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default About;