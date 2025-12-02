import { Container, Breadcrumb } from 'react-bootstrap';

function SurgeryDetails() {
    return (
        <>
            <Container className='my-3 p-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/services">Услуги</Breadcrumb.Item>
                    <Breadcrumb.Item active>Хирургия</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
        </>
    )
}

export default SurgeryDetails;