import { Container, Breadcrumb, Row, Col } from 'react-bootstrap';
import './AllServices.css';

function VaccinAnestDetails() {
    return (
        <>
            <Container className='my-3 p-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/services">Услуги</Breadcrumb.Item>
                    <Breadcrumb.Item active>Вакцинация и анестезия</Breadcrumb.Item>
                </Breadcrumb>
            </Container>

            <Container className='all-services-page-container'>
                <Row className='mb-5'>
                    <Col>
                        <h1 className='all-services-title mb-4'>Вакцинация и анестезия</h1>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Вакцинация животных</h2>
                            <p className='all-services-text'>
                                Вакцинация — важнейшая часть профилактики заболеваний и залог спокойной жизни владельца.
                                Прививка формирует иммунитет животного к опасным инфекциям, которые могут передаваться через
                                контакт с другими животными, прогулки или даже через обувь человека.
                            </p>

                            <div className='mt-4'>
                                <h4 className='all-services-list-title mb-3'>Преимущества вакцинации:</h4>
                                <ul className='all-services-list'>
                                    <li>Защита от смертельно опасных инфекций (бешенство, чума, парвовирус)</li>
                                    <li>Безопасность для всей семьи — некоторые инфекции передаются человеку</li>
                                    <li>Обязательное условие для выезда за границу и участия в выставках</li>
                                    <li>Снижение риска распространения заболеваний в популяции животных</li>
                                </ul>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Как проходит вакцинация</h2>
                            <Row>
                                <Col md={6}>
                                    <div className='p-3'>
                                        <h5 className='mb-3'>Подготовка:</h5>
                                        <ul className='all-services-list'>
                                            <li>Дегельминтизация за 10-14 дней до прививки</li>
                                            <li>Осмотр терапевта перед вакцинацией</li>
                                            <li>Только здоровое животное допускается к прививке</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className='p-3'>
                                        <h5 className='mb-3'>После вакцинации:</h5>
                                        <ul className='all-services-list'>
                                            <li>Возможна легкая вялость в первые сутки</li>
                                            <li>Иммунитет формируется за 14-21 день</li>
                                            <li>Ветеринарный паспорт с отметками о прививках</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Анестезия в ветеринарии</h2>
                            <p className='all-services-text'>
                                Современная анестезия обеспечивает максимальный комфорт для питомца во время процедур
                                и позволяет ветеринару сосредоточиться на выполнении своей работы.
                            </p>

                            <div className='mt-4'>
                                <h4 className='all-services-list-title mb-3'>Виды анестезии:</h4>
                                <Row>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded'>
                                            <h5>Местная анестезия</h5>
                                            <p className='mb-0'>Для минимально инвазивных процедур: обработка ран, удаление зубов</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded'>
                                            <h5>Общая анестезия</h5>
                                            <p className='mb-0'>Для сложных операций: хирургия, стоматология, диагностика</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded'>
                                            <h5>Эпидуральная</h5>
                                            <p className='mb-0'>Для операций на нижней части тела с длительным обезболиванием</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded'>
                                            <h5>Седация</h5>
                                            <p className='mb-0'>Для беспокойных животных при проведении диагностики</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='p-4 all-services-bg-light all-services-border-rounded'>
                            <h3 className='all-services-summary-title mb-3'>Безопасность в VetClinic</h3>
                            <p className='mb-0'>
                                В клинике VetClinic мы используем только сертифицированные препараты и современное оборудование
                                для мониторинга состояния животного. Каждый питомец проходит предоперационное обследование,
                                а анестезиолог контролирует все жизненные показатели во время процедуры.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default VaccinAnestDetails;