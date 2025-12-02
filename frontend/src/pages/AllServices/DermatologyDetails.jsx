import { Container, Breadcrumb } from 'react-bootstrap';

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
        </>
    )
}

export default DermatologyDetails;