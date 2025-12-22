import { Container, Breadcrumb, Row, Col } from 'react-bootstrap';
import MakeAppointment from '../../components/MakeAppointment/MakeAppointment';

import './AllServices.css';

function DiagnosticsDetails() {
    return (
        <>
            <Container className='my-3 p-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/services">Услуги</Breadcrumb.Item>
                    <Breadcrumb.Item active>Диагностика</Breadcrumb.Item>
                </Breadcrumb>
            </Container>

            <Container className='all-services-page-container'>
                <Row className='mb-5'>
                    <Col>
                        <h1 className='all-services-title mb-4'>Диагностика</h1>

                        <div className='mb-5'>
                            <p className='all-services-text'>
                                Домашние питомцы не могут пожаловаться на плохое самочувствие, поэтому своевременная
                                диагностика помогает выявить заболевания на ранних стадиях. В клинике VetClinic
                                мы используем современные методы обследования для точной постановки диагноза.
                            </p>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Значимость диагностики</h2>
                            <p className='all-services-text mb-4'>
                                Регулярные диагностические обследования позволяют:
                            </p>
                            <ul className='all-services-list'>
                                <li>Выявить скрытые заболевания до появления симптомов</li>
                                <li>Поставить точный диагноз для эффективного лечения</li>
                                <li>Контролировать эффективность назначенной терапии</li>
                                <li>Предотвратить развитие серьезных осложнений</li>
                                <li>Оценить общее состояние здоровья питомца</li>
                            </ul>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Основные методы диагностики</h2>

                            <div className='mt-4'>
                                <Row>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>УЗИ исследование</h5>
                                            <p className='mb-0'>Безопасное обследование внутренних органов для выявления воспалений, опухолей и патологий</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Рентгенография</h5>
                                            <p className='mb-0'>Исследование костной системы, выявление переломов, оценка состояния легких и сердца</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Эндоскопия</h5>
                                            <p className='mb-0'>Визуальный осмотр внутренних органов через эндоскоп для диагностики ЖКТ и дыхательных путей</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>ЭКГ</h5>
                                            <p className='mb-0'>Оценка работы сердца, выявление нарушений сердечного ритма и патологий миокарда</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Как проходит диагностика</h2>

                            <Row>
                                <Col md={4} className='mb-3'>
                                    <div className='text-center p-3'>
                                        <div className='all-services-step-number'>1</div>
                                        <h6>Первичный осмотр</h6>
                                        <p className='all-services-small mb-0'>Врач проводит осмотр и собирает анамнез</p>
                                    </div>
                                </Col>
                                <Col md={4} className='mb-3'>
                                    <div className='text-center p-3'>
                                        <div className='all-services-step-number'>2</div>
                                        <h6>Назначение исследований</h6>
                                        <p className='all-services-small mb-0'>Выбор необходимых диагностических методов</p>
                                    </div>
                                </Col>
                                <Col md={4} className='mb-3'>
                                    <div className='text-center p-3'>
                                        <div className='all-services-step-number'>3</div>
                                        <h6>Постановка диагноза</h6>
                                        <p className='all-services-small mb-0'>Анализ результатов и разработка плана лечения</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Предварительное обследование</h2>
                            <p className='all-services-text mb-3'>
                                Перед инструментальными исследованиями врач проводит:
                            </p>
                            <Row>
                                <Col md={6}>
                                    <ul className='all-services-list'>
                                        <li>Визуальный осмотр общего состояния</li>
                                        <li>Пальпацию для выявления болезненных участков</li>
                                        <li>Аускультацию сердца и легких</li>
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <ul className='all-services-list'>
                                        <li>Измерение температуры и давления</li>
                                        <li>Осмотр слизистых оболочек</li>
                                        <li>Оценку рефлексов и координации</li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Когда нужна диагностика</h2>
                            <div className='mt-4'>
                                <Row>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3'>
                                            <h5 className='mb-3'>Профилактическая диагностика:</h5>
                                            <ul className='all-services-list'>
                                                <li>Плановые ежегодные осмотры</li>
                                                <li>Перед оперативными вмешательствами</li>
                                                <li>При подготовке к вакцинации</li>
                                                <li>Для животных старше 7 лет</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3'>
                                            <h5 className='mb-3'>Экстренная диагностика:</h5>
                                            <ul className='all-services-list'>
                                                <li>Травмы и падения</li>
                                                <li>Отказ от еды и воды</li>
                                                <li>Затрудненное дыхание</li>
                                                <li>Внезапная вялость или агрессия</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='p-4 all-services-bg-light all-services-border-rounded'>
                            <h3 className='all-services-summary-title mb-3'>Оборудование VetClinic</h3>
                            <p className='mb-0'>
                                Наша клиника оснащена современным диагностическим оборудованием экспертного класса.
                                Мы используем цифровые рентген-аппараты, ультразвуковые сканеры с цветным допплером
                                и видеоэндоскопы высокой четкости для точной диагностики.
                            </p>
                        </div>
                    </Col>
                </Row>

                <MakeAppointment />
            </Container>
        </>
    )
}

export default DiagnosticsDetails;