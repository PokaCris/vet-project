import { Container, Breadcrumb, Row, Col } from 'react-bootstrap';
import MakeAppointment from '../../components/MakeAppointment/MakeAppointment';

import './AllServices.css';

function TherapyDetails() {
    return (
        <>
            <Container className='my-3 p-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/services">Услуги</Breadcrumb.Item>
                    <Breadcrumb.Item active>Терапия</Breadcrumb.Item>
                </Breadcrumb>
            </Container>

            <Container className='all-services-page-container'>
                <Row className='mb-5'>
                    <Col>
                        <h1 className='all-services-title mb-4'>Терапия</h1>

                        <div className='mb-5'>
                            <p className='all-services-text'>
                                Диагностика и лечение домашних питомцев — это искусство, требующее не только медицинских знаний,
                                но и глубокого понимания поведения животных. Наши питомцы не могут рассказать о своих ощущениях,
                                поэтому ветеринары клиники VetClinic становятся настоящими детективами в поисках причин недомогания.
                            </p>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Прием ветеринарного терапевта</h2>
                            <p className='all-services-text mb-4'>
                                Наш опытный терапевт способен оценить общее состояние вашего питомца.
                                Первичный прием включает не только осмотр, но и сбор подробного анамнеза,
                                что позволяет понять полную картину здоровья животного.
                            </p>

                            <div className='mt-4'>
                                <h4 className='all-services-list-title mb-3'>Что включает ветеринарный осмотр:</h4>
                                <Row>
                                    <Col md={6}>
                                        <ul className='all-services-list'>
                                            <li>Визуальная диагностика — оценка положения тела и поведения</li>
                                            <li>Дыхательная система — контроль ритма и характера дыхания</li>
                                            <li>Конституция тела — анализ пропорций и мышечной массы</li>
                                            <li>Кожный покров — проверка состояния шерсти и кожи</li>
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul className='all-services-list'>
                                            <li>Жизненные показатели — измерение температуры и пульса</li>
                                            <li>Слизистые оболочки — осмотр носа, глаз, пасти и ушей</li>
                                            <li>Внешний осмотр — исследование конечностей и грудной клетки</li>
                                            <li>Пальпация — прощупывание живота и других областей</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Консультации специалистов</h2>
                            <p className='all-services-text mb-4'>
                                Для подтверждения диагноза мы разрабатываем индивидуальный план обследования.
                                Наша клиника оснащена оборудованием для проведения анализов и инструментальных исследований.
                            </p>

                            <div className='mt-4'>
                                <h4 className='all-services-list-title mb-3'>Когда нужна консультация узкого специалиста:</h4>
                                <Row>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded'>
                                            <h5>Ветеринар-хирург</h5>
                                            <p className='mb-0'>При необходимости оперативного вмешательства или травмах</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded'>
                                            <h5>Ветеринар-офтальмолог</h5>
                                            <p className='mb-0'>При проблемах со зрением или заболеваниях глаз</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded'>
                                            <h5>Дерматолог</h5>
                                            <p className='mb-0'>При кожных заболеваниях, аллергиях или паразитах</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded'>
                                            <h5>Стоматолог</h5>
                                            <p className='mb-0'>При проблемах с зубами, деснами или полостью рта</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='p-4 all-services-bg-light all-services-border-rounded'>
                            <h3 className='all-services-summary-title mb-3'>Наш подход к терапии</h3>
                            <p className='mb-0'>
                                В клинике VetClinic мы не просто лечим симптомы — мы ищем и устраняем первопричину заболевания.
                                Каждый питомец получает персонального врача, который сопровождает его на всех этапах лечения,
                                от первичного осмотра до полного выздоровления.
                            </p>
                        </div>
                    </Col>
                </Row>
                
                <MakeAppointment />
            </Container>
        </>
    )
}

export default TherapyDetails;