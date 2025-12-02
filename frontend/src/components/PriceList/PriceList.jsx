import { Container, Breadcrumb, Tabs, Tab } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';

import "./PriceList.css";


function PriceList() {

    const buttons = [
        { text: 'Стоимость приема ветеринара', id: 'consultation' },
        { text: 'Стоимость диагностики', id: 'diagnostics' },
        { text: 'Цена вакцинации', id: 'vaccination' },
        { text: 'Цена кастрации/стерилизации', id: 'castration' },
        { text: 'Цены на хирургические операции', id: 'surgery' },
        { text: 'Цены на ветеринарную стоматологию', id: 'dentistry' },
        { text: 'Стоимость приема дерматолога', id: 'dermatology' },
        { text: 'Стоимость ветеринарной офтальмологии', id: 'ophthalmology' },
        { text: 'Стоимость анализов', id: 'tests' },
        { text: 'Анестезия', id: 'anesthesia' },
    ];

    const priceData = {
        consultation: [
            { service: 'Первичный прием терапевта', price: '1500' },
            { service: 'Повторный прием терапевта', price: '1000' },
            { service: 'Экстренный прием', price: '2000' },
            { service: 'Профилактический осмотр', price: '800' },
            { service: 'Консультация по уходу', price: '500' },
            { service: 'Вызов врача на дом', price: '2500' },
        ],
        diagnostics: {
            ultrasound: [
                { service: 'УЗИ брюшной полости', price: '2500' },
                { service: 'УЗИ сердца', price: '3000' },
                { service: 'УЗИ почек', price: '1800' },
                { service: 'УЗИ органов малого таза', price: '2200' },
                { service: 'УЗИ щитовидной железы', price: '1700' },
                { service: 'УЗИ суставов', price: '1900' },
            ],
            xray: [
                { service: 'Рентгенография одной области', price: '1200' },
                { service: 'Рентгенография с контрастом', price: '3500' },
                { service: 'Рентген конечностей', price: '1500' },
                { service: 'Рентген грудной клетки', price: '1800' },
                { service: 'Рентген позвоночника', price: '2000' },
                { service: 'Рентген черепа', price: '2200' },
            ],
            endoscopy: [
                { service: 'Гастроскопия', price: '4500' },
                { service: 'Колоноскопия', price: '5000' },
                { service: 'Бронхоскопия', price: '5500' },
                { service: 'Эндоскопическая биопсия', price: '6000' },
                { service: 'Диагностическая лапароскопия', price: '8000' },
                { service: 'Удаление инородного тела эндоскопом', price: '7000' },
            ]
        },
        vaccination: [
            { service: 'Комплексная вакцинация', price: '1200' },
            { service: 'Вакцина от бешенства', price: '800' },
            { service: 'Вакцина от инфекционных заболеваний', price: '1000' },
            { service: 'Ежегодная ревакцинация', price: '1100' },
            { service: 'Импортная комплексная вакцина', price: '1500' },
            { service: 'Вакцинация с паспортом', price: '1300' },
        ],
        castration: [
            { service: 'Кастрация кота', price: '3500' },
            { service: 'Стерилизация кошки', price: '4500' },
            { service: 'Кастрация кобеля', price: '5000' },
            { service: 'Стерилизация суки', price: '6000' },
            { service: 'Лапароскопическая стерилизация', price: '8000' },
            { service: 'Послеоперационное наблюдение', price: '1000' },
        ],
        surgery: {
            cats: [
                { service: 'Кастрация кота', price: '3500' },
                { service: 'Стерилизация кошки', price: '4500' },
                { service: 'Удаление молочных желез у кошки', price: '6000' },
            ],
            dogs: [
                { service: 'Кастрация кобеля', price: '5000' },
                { service: 'Стерилизация суки', price: '6000' },
                { service: 'Удаление молочных желез у собаки', price: '8000' },
            ],
            general: [
                { service: 'Наложение швов', price: '2000' },
                { service: 'Удаление новообразований', price: '4000' },
                { service: 'Операция при переломах', price: '8000' },
            ]
        },
        dentistry: [
            { service: 'Снятие зубного камня', price: '2500' },
            { service: 'Лечение кариеса', price: '1800' },
            { service: 'Удаление зуба', price: '1200' },
            { service: 'Стоматологический осмотр', price: '500' },
            { service: 'Пломбирование зуба', price: '2200' },
            { service: 'Лечение периодонтита', price: '3000' },
        ],
        dermatology: [
            { service: 'Консультация дерматолога', price: '1600' },
            { service: 'Диагностика кожных заболеваний', price: '1400' },
            { service: 'Лечение аллергического дерматита', price: '2200' },
            { service: 'Диагностика и лечение паразитов кожи', price: '1800' },
            { service: 'Цитологическое исследование кожи', price: '1200' }
        ],
        ophthalmology: [
            { service: 'Осмотр офтальмолога', price: '1200' },
            { service: 'Лечение конъюнктивита', price: '1800' },
            { service: 'Операция на веках', price: '5000' },
            { service: 'Диагностика зрения', price: '1500' },
            { service: 'Лечение катаракты', price: '15000' },
            { service: 'Удаление инородного тела из глаза', price: '2500' },
        ],
        tests: [
            { service: 'Общий анализ крови', price: '800' },
            { service: 'Биохимический анализ крови', price: '1500' },
            { service: 'Анализ мочи', price: '600' },
            { service: 'Гормональные исследования', price: '2000' },
            { service: 'Анализ на паразитов', price: '700' },
            { service: 'Цитологическое исследование', price: '1200' },
        ],
        anesthesia: [
            { service: 'Общая анестезия (первый час)', price: '2000' },
            { service: 'Каждый последующий час анестезии', price: '800' },
            { service: 'Местная анестезия', price: '500' },
            { service: 'Эпидуральная анестезия', price: '1500' },
        ],
    };

    const tableConfig = [
        {
            id: 'consultation',
            title: 'Терапия',
            note: 'В прием входит: осмотр, консультация, назначение лечения, контроль состояния',
            addBefore: "Подробнее о том, как проходит",
            linkText: "прием ветеринарного врача",
            linkUrl: "/vet-priem",
            addAfter: "в ветклинике."
        },
        {
            id: 'diagnostics',
            title: 'Диагностика',
            note: 'Все диагностические процедуры проводятся на современном оборудовании экспертного класса',
            tabs: [
                { key: 'ultrasound', title: 'УЗИ' },
                { key: 'xray', title: 'Рентген' },
                { key: 'endoscopy', title: 'Эндоскопия' }
            ]
        },
        {
            id: 'vaccination',
            title: 'Вакцинация',
            note: 'Перед вакцинацией обязателен осмотр терапевта и дегельминтизация за 10-14 дней'
        },
        {
            id: 'castration',
            title: 'Кастрация/Стерилизация',
            note: 'В стоимость входит: операция, наркоз, послеоперационный уход'
        },
        {
            id: 'surgery',
            title: 'Хирургические операции',
            note: 'Все операции проводятся под общим наркозом с предоперационной диагностикой',
            tabs: [
                { key: 'cats', title: 'Хирургия кошек' },
                { key: 'dogs', title: 'Хирургия собак' },
                { key: 'general', title: 'Общая хирургия' }
            ]
        },
        {
            id: 'dentistry',
            title: 'Стоматология',
            note: 'Стоматологические процедуры проводятся под седацией для комфорта животного'
        },
        {
            id: 'dermatology',
            title: 'Дерматология',
            note: 'Диагностика и лечение кожных заболеваний, аллергий и паразитов'
        },
        {
            id: 'ophthalmology',
            title: 'Офтальмология',
            note: 'Специализированный прием ветеринара-офтальмолога с современным оборудованием'
        },
        {
            id: 'tests',
            title: 'Лабораторные исследования',
            note: 'Результаты большинства анализов готовы в течение 1-2 рабочих дней'
        },
        {
            id: 'anesthesia',
            title: 'Анестезия',
            note: 'Все виды анестезии проводятся с индивидуальным подбором препаратов и постоянным мониторингом жизненных показателей животного'
        },
    ];

    return (
        <>
            <Container className='my-3 p-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item active>Цены</Breadcrumb.Item>
                </Breadcrumb>

                <h4 className="mb-3">Цены на ветеринарные услуги в клинике</h4>
                <h5 className="fw-bold mb-4">Прайс-лист</h5>

                <div className="price-list-btn d-flex flex-wrap justify-content-start gap-2">
                    {buttons.map((btn) => (
                        <ScrollLink
                            key={btn.id}
                            to={btn.id}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className="btn btn-outline-primary text-nowrap"
                            style={{ cursor: 'pointer' }}>
                            {btn.text}
                        </ScrollLink>
                    ))}
                </div>

                <div className="price-tables mt-5">
                    {tableConfig.map((section) => (
                        <div key={section.id} id={section.id} className="price-section mb-5">
                            <h4 className="fw-bold mb-4">{section.title}</h4>

                            {section.tabs ? (
                                <Tabs defaultActiveKey={section.tabs[0].key} className="mb-3">
                                    {section.tabs.map((tab) => (
                                        <Tab key={tab.key} eventKey={tab.key} title={tab.title}>
                                            <table className="price-table">
                                                <thead>
                                                    <tr>
                                                        <th>Услуга</th>
                                                        <th>Стоимость, руб.</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {priceData[section.id][tab.key].map((item, index) => (
                                                        <tr key={index}>
                                                            <td>{item.service}</td>
                                                            <td>{item.price}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </Tab>
                                    ))}
                                </Tabs>
                            ) : (
                                <table className="price-table">
                                    <thead>
                                        {section.addBefore && section.linkText && section.linkUrl && section.addAfter && (
                                            <p>
                                                {section.addBefore}{' '}
                                                <a href={section.linkUrl} className="text-success">
                                                    {section.linkText}
                                                </a>{' '}
                                                {section.addAfter}
                                            </p>
                                        )}
                                        <tr>
                                            <th>Услуга</th>
                                            <th>Стоимость, руб.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {priceData[section.id].map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.service}</td>
                                                <td>{item.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}

                            <p className="text-muted small">* {section.note}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
}

export default PriceList;