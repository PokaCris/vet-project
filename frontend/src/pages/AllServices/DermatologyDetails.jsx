import { Container, Breadcrumb, Row, Col } from 'react-bootstrap';

import './AllServices.css';

function DermatologyDetails() {
    return (
        <>
            <Container className='my-3 p-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/services">Услуги</Breadcrumb.Item>
                    <Breadcrumb.Item active>Дерматология</Breadcrumb.Item>
                </Breadcrumb>
            </Container>

            <Container className='all-services-page-container'>
                <Row className='mb-5'>
                    <Col>
                        <h1 className='all-services-title mb-4'>Дерматология</h1>

                        <div className='mb-5'>
                            <p className='all-services-text'>
                                Ветеринар-дерматолог специализируется на диагностике и лечении заболеваний
                                кожных покровов животного. К нему обращаются при появлении зуда, расчесов,
                                облысения, изменения цвета шерсти. Дерматологические заболевания возникают
                                из-за инфекций, паразитов, аллергий и вирусов.
                            </p>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Когда обратиться к дерматологу</h2>
                            <p className='all-services-text mb-3'>
                                Обратиться к специалисту рекомендуется при таких симптомах:
                            </p>
                            <Row>
                                <Col md={6}>
                                    <ul className='all-services-list'>
                                        <li>Зуд разной интенсивности</li>
                                        <li>Покраснение или высыпания на коже</li>
                                        <li>Неравномерный рост или изменение цвета шерсти</li>
                                        <li>Облысение на отдельных участках тела</li>
                                        <li>Появление перхоти</li>
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <ul className='all-services-list'>
                                        <li>Ломкость и расслоение когтей</li>
                                        <li>Неприятный запах от кожи или шерсти</li>
                                        <li>Избыточное вылизывание отдельных частей тела</li>
                                        <li>Повышенная жирность шерсти</li>
                                        <li>Уплотнения или наросты на коже</li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Распространенные заболевания</h2>

                            <div className='mt-4'>
                                <Row>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Дерматиты</h5>
                                            <p className='mb-0'>Воспаление кожи из-за аллергии, паразитов или стресса</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Демодекоз</h5>
                                            <p className='mb-0'>Поражение подкожным клещом демодекс</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Грибковые инфекции</h5>
                                            <p className='mb-0'>Лишай (дерматофитоз) и другие грибковые поражения</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Атопический дерматит</h5>
                                            <p className='mb-0'>Наследственное заболевание с сильным зудом</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Методы диагностики</h2>
                            <div className='mt-4'>
                                <Row>
                                    <Col md={4} className='mb-3'>
                                        <div className='text-center p-3'>
                                            <div className='all-services-step-number'>1</div>
                                            <h6>Осмотр и анамнез</h6>
                                            <p className='all-services-small mb-0'>Визуальный осмотр и сбор информации</p>
                                        </div>
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <div className='text-center p-3'>
                                            <div className='all-services-step-number'>2</div>
                                            <h6>Соскобы кожи</h6>
                                            <p className='all-services-small mb-0'>Выявление клещей и грибков</p>
                                        </div>
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <div className='text-center p-3'>
                                            <div className='all-services-step-number'>3</div>
                                            <h6>Лабораторные исследования</h6>
                                            <p className='all-services-small mb-0'>Анализы крови, цитология, биопсия</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Подготовка к приему</h2>
                            <div className='mt-4'>
                                <Row>
                                    <Col md={6}>
                                        <div className='p-3'>
                                            <h5 className='mb-3'>Что нельзя делать:</h5>
                                            <ul className='all-services-list'>
                                                <li>Не обрабатывать пораженные участки самостоятельно</li>
                                                <li>Не удалять корочки и следы выделений</li>
                                                <li>Не мыть питомца за 2-3 дня до приема</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className='p-3'>
                                            <h5 className='mb-3'>Что подготовить:</h5>
                                            <ul className='all-services-list'>
                                                <li>Информация о рационе и образе жизни</li>
                                                <li>Данные об обработках от паразитов</li>
                                                <li>Результаты предыдущих анализов</li>
                                                <li>Голодная диета за 8-10 часов при анализах крови</li>
                                            </ul>
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
                                            Не медлите с визитом к врачу, если к кожным симптомам добавляются
                                            отказ от еды, повышение температуры, снижение активности или
                                            агрессивное поведение питомца.
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='p-4 all-services-bg-light all-services-border-rounded'>
                            <h3 className='all-services-summary-title mb-3'>Диагностика в VetClinic</h3>
                            <p className='mb-0'>
                                В нашей клинике используется современное оборудование для точной диагностики:
                                лампа Вуда для выявления грибков, микроскопы для исследования соскобов,
                                лаборатория для анализов крови. Каждое животное получает индивидуальный
                                подход и комплексное лечение.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DermatologyDetails;