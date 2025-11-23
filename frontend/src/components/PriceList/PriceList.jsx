import { Container, Breadcrumb, Button } from 'react-bootstrap';

import "./PriceList.css";

function PriceList() {

    const buttons = [
        { text: 'Стоимость приема ветеринара', id: 'consultation' },
        { text: 'Стоимость УЗИ', id: 'ultrasound' },
        { text: 'Стоимость рентгена', id: 'xray' },
        { text: 'Цена вакцинации', id: 'vaccination' },
        { text: 'Цена кастрации/стерилизации', id: 'castration' },
        { text: 'Цены на хирургические операции', id: 'surgery' },
        { text: 'Цены на ветеринарную стоматологию', id: 'dentistry' },
        { text: 'Стоимость анализов', id: 'tests' },
        { text: 'Стоимость ветеринарной офтальмологии', id: 'ophthalmology' },
    ];

    return (
        <div>
            <Container className='my-3 p-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item active>Услуги</Breadcrumb.Item>
                </Breadcrumb>

                <h4 className="mb-3">Цены на ветеринарные услуги в клинике</h4>
                <h5 className="fw-bold mb-4">Прайс-лист</h5>

                <div className="price-list-btn d-flex flex-wrap justify-content-start gap-2">
                    {buttons.map((btn) => (
                        <Button
                            key={btn.id}
                            variant="outline-primary"
                            className="text-nowrap"
                            href={`#${btn.id}`}
                        >
                            {btn.text}
                        </Button>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default PriceList;