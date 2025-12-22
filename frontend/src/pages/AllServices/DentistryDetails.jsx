import { Container, Breadcrumb, Row, Col } from 'react-bootstrap';
import MakeAppointment from '../../components/MakeAppointment/MakeAppointment';

import './AllServices.css';

function DentistryDetails() {
    return (
        <>
            <Container className='my-3 p-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/services">Услуги</Breadcrumb.Item>
                    <Breadcrumb.Item active>Стоматология</Breadcrumb.Item>
                </Breadcrumb>
            </Container>

            <Container className='all-services-page-container'>
                <Row className='mb-5'>
                    <Col>
                        <h1 className='all-services-title mb-4'>Стоматология</h1>

                        <div className='mb-5'>
                            <p className='all-services-text'>
                                Здоровье зубов играет ключевую роль в общем благополучии домашнего питомца.
                                Ветеринарная стоматология включает комплексный уход за полостью рта,
                                удаление зубного камня, лечение и профилактику заболеваний зубов и десен.
                            </p>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Когда обратиться к стоматологу</h2>
                            <p className='all-services-text mb-3'>
                                К стоматологу необходимо обратиться, если у питомца появились:
                            </p>
                            <Row>
                                <Col md={6}>
                                    <ul className='all-services-list'>
                                        <li>Неприятный запах изо рта (галитоз)</li>
                                        <li>Затруднения при приеме пищи или отказ от еды</li>
                                        <li>Воспаление или кровоточивость десен</li>
                                        <li>Зубной налет или зубной камень</li>
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <ul className='all-services-list'>
                                        <li>Сломанные или поврежденные зубы</li>
                                        <li>Опухоли в области морды</li>
                                        <li>Болезненность при касании к пасти</li>
                                        <li>Изменение цвета зубов</li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Наши услуги</h2>

                            <div className='mt-4'>
                                <Row>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Профессиональная чистка</h5>
                                            <p className='mb-0'>Ультразвуковое удаление камня и полировка зубов под седацией</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Лечение зубов</h5>
                                            <p className='mb-0'>Пломбирование, лечение кариеса и периодонтита</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Удаление зубов</h5>
                                            <p className='mb-0'>Хирургическое удаление поврежденных зубов с анестезией</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Диагностика</h5>
                                            <p className='mb-0'>Осмотр, рентген зубов, выявление заболеваний полости рта</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Особенности для разных животных</h2>

                            <Row>
                                <Col md={6} className='mb-4'>
                                    <div className='p-3 all-services-border-rounded h-100'>
                                        <h4 className='mb-3'>Стоматология для собак</h4>
                                        <ul className='all-services-list'>
                                            <li>Частые проблемы: зубной камень, пародонтит</li>
                                            <li>Крупные породы — травмы от жевания твердых предметов</li>
                                            <li>Мелкие породы — предрасположенность к пародонтиту</li>
                                            <li>Профилактика: специальные корма и жевательные игрушки</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md={6} className='mb-4'>
                                    <div className='p-3 all-services-border-rounded h-100'>
                                        <h4 className='mb-3'>Стоматология для кошек</h4>
                                        <ul className='all-services-list'>
                                            <li>Частые проблемы: гингивит, резорбция зубов</li>
                                            <li>Заболевания часто протекают скрыто</li>
                                            <li>Хронический стоматит требует комплексного лечения</li>
                                            <li>Необходим регулярный контроль состояния</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Процедура лечения</h2>
                            <div className='mt-4'>
                                <Row>
                                    <Col md={4} className='mb-3'>
                                        <div className='text-center p-3'>
                                            <div className='all-services-step-number'>1</div>
                                            <h6>Диагностика</h6>
                                            <p className='all-services-small mb-0'>Осмотр и рентген зубов</p>
                                        </div>
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <div className='text-center p-3'>
                                            <div className='all-services-step-number'>2</div>
                                            <h6>Чистка</h6>
                                            <p className='all-services-small mb-0'>Удаление камня под седацией</p>
                                        </div>
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <div className='text-center p-3'>
                                            <div className='all-services-step-number'>3</div>
                                            <h6>Лечение</h6>
                                            <p className='all-services-small mb-0'>Пломбирование или удаление зубов</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <div className='p-4 all-services-border-rounded' style={{ borderLeft: '4px solid #ffc107' }}>
                                <Row className='align-items-center'>
                                    <Col xs={2} md={1} className='text-center'>
                                        <div className='all-services-step-number'>!</div>
                                    </Col>
                                    <Col xs={10} md={11}>
                                        <h5 className='mb-2'>Важная информация:</h5>
                                        <p className='all-services-text mb-0'>
                                            Все стоматологические процедуры проводятся под седацией для комфорта
                                            животного и безопасности проведения манипуляций. После лечения
                                            назначается курс восстановления и даются рекомендации по уходу.
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='p-4 all-services-bg-light all-services-border-rounded'>
                            <h3 className='all-services-summary-title mb-3'>Профилактика в VetClinic</h3>
                            <p className='mb-3'>
                                Рекомендуем регулярные осмотры:
                            </p>
                            <ul className='all-services-list mb-0'>
                                <li>Молодые животные — 1 раз в год</li>
                                <li>Животные старше 7 лет — каждые 6 месяцев</li>
                                <li>Породы с предрасположенностью к стоматологическим проблемам — 2 раза в год</li>
                                <li>Профессиональная чистка по показаниям</li>
                            </ul>
                        </div>
                    </Col>
                </Row>

                <MakeAppointment />
            </Container>
        </>
    )
}

export default DentistryDetails;