import { Container, Breadcrumb, Row, Col } from 'react-bootstrap';

import './AllServices.css';

function CastrationDetails() {
    return (
        <>
            <Container className='my-3 p-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/services">Услуги</Breadcrumb.Item>
                    <Breadcrumb.Item active>Кастрация и стерилизация</Breadcrumb.Item>
                </Breadcrumb>
            </Container>

            <Container className='all-services-page-container'>
                <Row className='mb-5'>
                    <Col>
                        <h1 className='all-services-title mb-4'>Кастрация и стерилизация</h1>

                        <div className='mb-5'>
                            <p className='all-services-text'>
                                Стерилизация животных — важная операция, которая регулирует численность популяции и
                                повышает качество жизни питомцев. Она предотвращает нежелательное потомство,
                                снижает риск заболеваний и благоприятно влияет на поведение животного.
                            </p>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Преимущества процедуры</h2>

                            <div className='mt-4'>
                                <Row>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Профилактика заболеваний</h5>
                                            <p className='mb-0'>Снижение риска онкологии молочных желез, пиометры, простатита</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Улучшение поведения</h5>
                                            <p className='mb-0'>Животные становятся спокойнее, меньше проявляют агрессию</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Контроль популяции</h5>
                                            <p className='mb-0'>Предотвращение нежелательного потомства и бездомных животных</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Продление жизни</h5>
                                            <p className='mb-0'>Стерилизованные животные живут дольше и здоровее</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Оптимальный возраст</h2>
                            <div className='mt-4'>
                                <Row>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3'>
                                            <h5 className='mb-3'>Рекомендуемый возраст:</h5>
                                            <ul className='all-services-list'>
                                                <li>Кошки и коты: 6-8 месяцев</li>
                                                <li>Собаки: 6-12 месяцев (в зависимости от породы)</li>
                                                <li>До первой течки у самок</li>
                                                <li>Перед половым созреванием</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3'>
                                            <h5 className='mb-3'>Взрослые животные:</h5>
                                            <ul className='all-services-list'>
                                                <li>Требуется дополнительное обследование</li>
                                                <li>Анализы крови и УЗИ сердца</li>
                                                <li>Индивидуальный подход к наркозу</li>
                                                <li>Возможна в любом возрасте</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Подготовка к операции</h2>
                            <p className='all-services-text mb-3'>
                                Для успешной операции и быстрого восстановления:
                            </p>
                            <div className='mt-4'>
                                <Row>
                                    <Col md={4} className='mb-3'>
                                        <div className='text-center p-3'>
                                            <div className='all-services-step-number'>1</div>
                                            <h6>Обследование</h6>
                                            <p className='all-services-small mb-0'>Анализы крови, осмотр терапевта</p>
                                        </div>
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <div className='text-center p-3'>
                                            <div className='all-services-step-number'>2</div>
                                            <h6>Голодная диета</h6>
                                            <p className='all-services-small mb-0'>Не кормить 8-12 часов, вода за 4 часа</p>
                                        </div>
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <div className='text-center p-3'>
                                            <div className='all-services-step-number'>3</div>
                                            <h6>Обработка</h6>
                                            <p className='all-services-small mb-0'>Дегельминтизация и обработка от паразитов</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Послеоперационный уход</h2>
                            <div className='mt-4'>
                                <Row>
                                    <Col md={6}>
                                        <div className='p-3'>
                                            <h5 className='mb-3'>Первые сутки:</h5>
                                            <ul className='all-services-list'>
                                                <li>Покой и тепло после наркоза</li>
                                                <li>Контроль за состоянием животного</li>
                                                <li>Доступ к чистой воде</li>
                                                <li>Легкая пища небольшими порциями</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className='p-3'>
                                            <h5 className='mb-3'>Восстановление (10-14 дней):</h5>
                                            <ul className='all-services-list'>
                                                <li>Ежедневная обработка швов</li>
                                                <li>Защитный воротник при необходимости</li>
                                                <li>Ограничение физической активности</li>
                                                <li>Контрольные осмотры у врача</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Важная информация</h2>
                            <div className='mt-4'>
                                <Row className='align-items-center'>
                                    <Col md={1} className='text-center mb-3'>
                                        <div className='all-services-step-number'>!</div>
                                    </Col>
                                    <Col md={11}>
                                        <div className='p-3'>
                                            <p className='all-services-text mb-0'>
                                                После хирургического вмешательства кошке или собаке требуется особый уход
                                                для быстрого и безопасного восстановления. В первые сутки питомец может быть
                                                вялым из-за действия наркоза, поэтому важно обеспечить ему тепло, покой и
                                                доступ к чистой воде.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='p-4 all-services-bg-light all-services-border-rounded'>
                            <h3 className='all-services-summary-title mb-3'>Безопасность в VetClinic</h3>
                            <p className='mb-0'>
                                Все операции по кастрации и стерилизации проводятся в стерильных условиях опытными хирургами.
                                Мы используем современные анестетики и обеспечиваем круглосуточное наблюдение
                                за животным в послеоперационный период.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CastrationDetails;