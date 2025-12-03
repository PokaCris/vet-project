import { Container, Breadcrumb, Row, Col } from 'react-bootstrap';

import './AllServices.css';

function LaboratoryDetails() {
    return (
        <>
            <Container className='my-3 p-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/services">Услуги</Breadcrumb.Item>
                    <Breadcrumb.Item active>Лабораторные исследования</Breadcrumb.Item>
                </Breadcrumb>
            </Container>

            <Container className='all-services-page-container'>
                <Row className='mb-5'>
                    <Col>
                        <h1 className='all-services-title mb-4'>Лабораторные исследования</h1>

                        <div className='mb-5'>
                            <p className='all-services-text'>
                                Лабораторная диагностика — один из самых точных методов оценки состояния здоровья
                                животных. Современные анализы позволяют выявить заболевания на ранних стадиях,
                                контролировать эффективность лечения и проводить профилактические обследования.
                            </p>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Основные виды анализов</h2>

                            <div className='mt-4'>
                                <Row>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Анализ крови</h5>
                                            <p className='mb-0'>
                                                Общий и биохимический анализ для оценки состояния органов,
                                                выявления воспалений и нарушений метаболизма
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Анализ мочи</h5>
                                            <p className='mb-0'>
                                                Оценка работы почек, выявление инфекций мочевыводящих путей,
                                                контроль обменных процессов
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Анализ кала</h5>
                                            <p className='mb-0'>
                                                Диагностика паразитарных инфекций, оценка работы ЖКТ,
                                                выявление скрытых кровотечений
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <div className='p-3 all-services-border-rounded all-services-h-100'>
                                            <h5>Цитологические исследования</h5>
                                            <p className='mb-0'>
                                                Исследование клеточного состава тканей, выявление опухолевых
                                                процессов и воспалений
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Что показывают анализы</h2>
                            <div className='mt-4'>
                                <Row>
                                    <Col md={6} className='mb-4'>
                                        <div className='p-3'>
                                            <h4 className='mb-3'>Анализ крови</h4>
                                            <ul className='all-services-list'>
                                                <li><strong>Общий анализ:</strong> уровень гемоглобина, эритроцитов, лейкоцитов, тромбоцитов</li>
                                                <li><strong>Биохимия:</strong> функция печени (АЛТ, АСТ, билирубин), почек (креатинин, мочевина)</li>
                                                <li><strong>Электролиты:</strong> баланс натрия, калия, кальция, фосфора</li>
                                                <li><strong>Белковый обмен:</strong> общий белок, альбумин, глобулины</li>
                                                <li><strong>Гормоны:</strong> оценка работы щитовидной железы, надпочечников</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md={6} className='mb-4'>
                                        <div className='p-3'>
                                            <h4 className='mb-3'>Анализ мочи</h4>
                                            <ul className='all-services-list'>
                                                <li><strong>Физические свойства:</strong> цвет, прозрачность, плотность, pH</li>
                                                <li><strong>Химический анализ:</strong> белок, глюкоза, кетоны, билирубин</li>
                                                <li><strong>Микроскопия осадка:</strong> клетки, кристаллы, цилиндры, бактерии</li>
                                                <li><strong>Бактериологический посев:</strong> выявление инфекций и чувствительность к антибиотикам</li>
                                                <li><strong>Функция почек:</strong> оценка концентрационной способности</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Процесс взятия анализов</h2>
                            <div className='mt-4'>
                                <Row>
                                    <Col md={4} className='mb-3'>
                                        <div className='text-center p-3'>
                                            <div className='all-services-step-number'>1</div>
                                            <h6>Подготовка</h6>
                                            <p className='all-services-small mb-0'>Голодная диета 8-12 часов для биохимии</p>
                                        </div>
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <div className='text-center p-3'>
                                            <div className='all-services-step-number'>2</div>
                                            <h6>Взятие материала</h6>
                                            <p className='all-services-small mb-0'>Безболезненный забор крови и других материалов</p>
                                        </div>
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <div className='text-center p-3'>
                                            <div className='all-services-step-number'>3</div>
                                            <h6>Исследование</h6>
                                            <p className='all-services-small mb-0'>Анализ на современном оборудовании</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Дополнительные исследования</h2>
                            <div className='mt-4'>
                                <Row>
                                    <Col md={6}>
                                        <div className='p-3'>
                                            <h5 className='mb-3'>Специализированные анализы:</h5>
                                            <ul className='all-services-list'>
                                                <li><strong>Гормональные панели:</strong> диагностика эндокринных нарушений</li>
                                                <li><strong>Аллергопанели:</strong> выявление пищевых и экологических аллергенов</li>
                                                <li><strong>Коагулограмма:</strong> оценка свертываемости крови</li>
                                                <li><strong>ПЦР-диагностика:</strong> выявление вирусных и бактериальных инфекций</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className='p-3'>
                                            <h5 className='mb-3'>Профилактические скрининги:</h5>
                                            <ul className='all-services-list'>
                                                <li><strong>Ежегодный check-up:</strong> для животных старше 7 лет</li>
                                                <li><strong>Предоперационное обследование:</strong> перед наркозом</li>
                                                <li><strong>Контроль лечения:</strong> оценка эффективности терапии</li>
                                                <li><strong>Плановые обследования:</strong> для пород группы риска</li>
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
                                            Для получения точных результатов анализов крови необходима голодная диета
                                            8-12 часов. Свежесть образца мочи и кала также влияет на достоверность
                                            исследования — материал должен быть доставлен в лабораторию в течение 2-3 часов.
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <h2 className='all-services-section-title mb-3'>Сроки готовности анализов</h2>
                            <div className='mt-4'>
                                <Row>
                                    <Col md={4} className='mb-3'>
                                        <div className='p-3 text-center'>
                                            <h5>Экспресс-анализы</h5>
                                            <p className='mb-0'>15-30 минут</p>
                                            <small className='text-muted'>Общий анализ крови, мочи</small>
                                        </div>
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <div className='p-3 text-center'>
                                            <h5>Стандартные анализы</h5>
                                            <p className='mb-0'>1-2 дня</p>
                                            <small className='text-muted'>Биохимия, гормоны, ПЦР</small>
                                        </div>
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <div className='p-3 text-center'>
                                            <h5>Специализированные</h5>
                                            <p className='mb-0'>3-7 дней</p>
                                            <small className='text-muted'>Бакпосев, гистология</small>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='p-4 all-services-bg-light all-services-border-rounded'>
                            <h3 className='all-services-summary-title mb-3'>Лаборатория VetClinic</h3>
                            <p className='mb-0'>
                                Наша лаборатория оснащена современным автоматизированным оборудованием,
                                позволяющим получать точные результаты в кратчайшие сроки. Мы сотрудничаем
                                с ведущими ветеринарными лабораториями для выполнения сложных специализированных
                                исследований. Все анализы проводятся с соблюдением строгих стандартов качества.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LaboratoryDetails;