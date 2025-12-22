import { Container, Breadcrumb, Row, Col } from 'react-bootstrap';
import MakeAppointment from '../../components/MakeAppointment/MakeAppointment';

import './AllServices.css';

function SurgeryDetails() {
    return (
        <>
            <Container className='my-3 p-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/services">Услуги</Breadcrumb.Item>
                    <Breadcrumb.Item active>Хирургия</Breadcrumb.Item>
                </Breadcrumb>
            </Container>

            <Container className='all-services-page-container'>
                <Row className='mb-5'>
                    <Col>
                        <h1 className='all-services-title mb-4'>Хирургия</h1>

                        <div className='mb-5'>
                            <p className='all-services-text'>
                                Лечение домашних животных не ограничивается консервативными методами.
                                Многие патологии, травмы и заболевания требуют хирургического вмешательства.
                                В клинике VetClinic мы проводим операции любой сложности с использованием
                                современного оборудования и безопасной анестезии.
                            </p>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Направления хирургии</h2>

                            <div className='mt-4'>
                                <Row>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Ортопедия и травматология</h5>
                                            <p className='mb-0'>Лечение переломов, вывихов, разрывов связок, протезирование</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Абдоминальная хирургия</h5>
                                            <p className='mb-0'>Операции на брюшной полости, удаление инородных тел, стерилизация</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Офтальмологическая хирургия</h5>
                                            <p className='mb-0'>Операции на глазах, веках, восстановление зрения</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Стоматологическая хирургия</h5>
                                            <p className='mb-0'>Удаление зубов, лечение травм челюстей, пластика</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Подготовка к операции</h2>

                            <Row>
                                <Col md={6}>
                                    <div className='p-3'>
                                        <h5 className='mb-3'>Плановые операции:</h5>
                                        <ul className='all-services-list'>
                                            <li>Предоперационное обследование</li>
                                            <li>Анализы крови и мочи</li>
                                            <li>УЗИ сердца при необходимости</li>
                                            <li>Голодная диета за 12-14 часов</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className='p-3'>
                                        <h5 className='mb-3'>Срочные операции:</h5>
                                        <ul className='all-services-list'>
                                            <li>Экспресс-анализы</li>
                                            <li>Осмотр анестезиолога</li>
                                            <li>Минимальная подготовка</li>
                                            <li>Немедленное вмешательство</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Как проходит операция</h2>
                            <div className='mt-4'>
                                <Row>
                                    <Col md={4} className='mb-3'>
                                        <div className='text-center p-3'>
                                            <div className='all-services-step-number'>1</div>
                                            <h6>Введение наркоза</h6>
                                            <p className='all-services-small mb-0'>Безопасная анестезия с мониторингом</p>
                                        </div>
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <div className='text-center p-3'>
                                            <div className='all-services-step-number'>2</div>
                                            <h6>Хирургическое вмешательство</h6>
                                            <p className='all-services-small mb-0'>Проведение операции специалистом</p>
                                        </div>
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <div className='text-center p-3'>
                                            <div className='all-services-step-number'>3</div>
                                            <h6>Восстановление</h6>
                                            <p className='all-services-small mb-0'>Послеоперационный уход и наблюдение</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Реабилитация</h2>
                            <p className='all-services-text mb-3'>
                                После операции животное нуждается в особом уходе. Стандартный реабилитационный период
                                длится до 10 дней и включает:
                            </p>
                            <ul className='all-services-list'>
                                <li>Ежедневная обработка швов</li>
                                <li>Применение антибиотиков по назначению</li>
                                <li>Ограничение физической активности</li>
                                <li>Использование защитного воротника или попоны</li>
                                <li>Контрольные осмотры у хирурга</li>
                            </ul>
                        </div>

                        <div className='p-4 all-services-bg-light all-services-border-rounded'>
                            <h3 className='all-services-summary-title mb-3'>Безопасность в VetClinic</h3>
                            <p className='mb-0'>
                                Все операции в нашей клинике проводятся в стерильных условиях опытными хирургами.
                                Мы используем современное оборудование для мониторинга состояния животного во время наркоза
                                и обеспечиваем круглосуточное наблюдение в послеоперационный период.
                            </p>
                        </div>
                    </Col>
                </Row>

                <MakeAppointment />
            </Container>
        </>
    )
}

export default SurgeryDetails;