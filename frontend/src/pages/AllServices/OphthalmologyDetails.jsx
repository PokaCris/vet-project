import { Container, Breadcrumb, Row, Col } from 'react-bootstrap';
import MakeAppointment from '../../components/MakeAppointment/MakeAppointment';

import './AllServices.css';

function OphthalmologyDetails() {
    return (
        <>
            <Container className='my-3 p-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/services">Услуги</Breadcrumb.Item>
                    <Breadcrumb.Item active>Офтальмология</Breadcrumb.Item>
                </Breadcrumb>
            </Container>

            <Container className='all-services-page-container'>
                <Row className='mb-5'>
                    <Col>
                        <h1 className='all-services-title mb-4'>Офтальмология</h1>

                        <div className='mb-5'>
                            <p className='all-services-text'>
                                Ветеринарная офтальмология занимается диагностикой и лечением заболеваний глаз у животных.
                                Своевременное обращение к профильному специалисту помогает сохранить питомцу зрение
                                и предотвратить серьезные осложнения.
                            </p>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Распространенные заболевания глаз</h2>

                            <div className='mt-4'>
                                <Row>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Конъюнктивит</h5>
                                            <p className='mb-0'>Воспаление слизистой оболочки с покраснением и слезотечением</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Катаракта</h5>
                                            <p className='mb-0'>Помутнение хрусталика, приводящее к ухудшению зрения</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Глаукома</h5>
                                            <p className='mb-0'>Повышение внутриглазного давления, опасное для зрительного нерва</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Кератит</h5>
                                            <p className='mb-0'>Воспаление роговицы с помутнением и болью</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Когда обратиться к врачу</h2>
                            <p className='all-services-text mb-3'>
                                Помощь ветеринарного офтальмолога необходима при следующих симптомах:
                            </p>
                            <ul className='all-services-list'>
                                <li>Покраснение глаз или век</li>
                                <li>Гнойные или слизистые выделения</li>
                                <li>Сильное слезотечение</li>
                                <li>Помутнение глаз или изменение цвета</li>
                                <li>Прищуривание или светобоязнь</li>
                                <li>Травмы глаза или век</li>
                            </ul>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Методы диагностики</h2>

                            <Row>
                                <Col md={6}>
                                    <div className='p-3'>
                                        <h5 className='mb-3'>Основные исследования:</h5>
                                        <ul className='all-services-list'>
                                            <li>Биомикроскопия с щелевой лампой</li>
                                            <li>Измерение внутриглазного давления (тонометрия)</li>
                                            <li>Осмотр глазного дна (офтальмоскопия)</li>
                                            <li>Тест Ширмера для оценки слезопродукции</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className='p-3'>
                                        <h5 className='mb-3'>Дополнительные тесты:</h5>
                                        <ul className='all-services-list'>
                                            <li>Флюоресцеиновая проба на проходимость слезных каналов</li>
                                            <li>УЗИ глазного яблока</li>
                                            <li>Электроретинография</li>
                                            <li>Тесты на остроту зрения</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Лечение и реабилитация</h2>
                            <p className='all-services-text mb-3'>
                                Лечение подбирается индивидуально и может включать:
                            </p>
                            <div className='mt-4'>
                                <Row>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3'>
                                            <h5>Медикаментозное лечение:</h5>
                                            <ul className='all-services-list'>
                                                <li>Глазные капли и мази</li>
                                                <li>Антибиотики и противовоспалительные</li>
                                                <li>Препараты для снижения давления</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3'>
                                            <h5>Хирургическое лечение:</h5>
                                            <ul className='all-services-list'>
                                                <li>Удаление катаракты</li>
                                                <li>Операции при глаукоме</li>
                                                <li>Коррекция век и ресниц</li>
                                                <li>Травмы и инородные тела</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='p-4 all-services-bg-light all-services-border-rounded'>
                            <h3 className='all-services-summary-title mb-3'>Подготовка к приему</h3>
                            <p className='mb-3'>
                                Перед посещением офтальмолога:
                            </p>
                            <ul className='all-services-list mb-0'>
                                <li>Не смывайте выделения из глаз</li>
                                <li>Возьмите ветеринарный паспорт</li>
                                <li>Соблюдайте обычный режим кормления</li>
                                <li>Для собак – поводок и намордник, для кошек – переноска</li>
                            </ul>
                        </div>
                    </Col>
                </Row>

                <MakeAppointment />
            </Container>
        </>
    )
}

export default OphthalmologyDetails;