import { Container, Breadcrumb } from 'react-bootstrap';

function DentistryDetails() {
    return (
        <>
            <Container className='my-3 p-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/services">Услуги</Breadcrumb.Item>
                    <Breadcrumb.Item active>Стоматология</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
        </>
    )
}

export default DentistryDetails;