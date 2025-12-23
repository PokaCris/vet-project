import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const styles = {
    container: {
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
        padding: '40px 20px'
    },
    content: {
        textAlign: 'center',
        maxWidth: '600px',
        padding: '40px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e9ecef'
    },
    title: {
        color: '#2c3e50',
        fontWeight: '700',
        fontSize: '3rem',
        marginBottom: '20px'
    },
    subtitle: {
        color: '#339886',
        fontWeight: '600',
        fontSize: '1.8rem',
        marginBottom: '20px'
    },
    text: {
        color: '#4a5568',
        fontSize: '1.1rem',
        lineHeight: '1.6',
        marginBottom: '30px'
    },
    button: {
        backgroundColor: '#339886',
        borderColor: '#339886',
        color: 'white',
        padding: '12px 30px',
        fontWeight: '600',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
        display: 'inline-block'
    },
    emoji: {
        fontSize: '4rem',
        marginBottom: '20px',
        display: 'block'
    }
};

function NotFound() {
    return (
        <Container fluid style={styles.container}>
            <div style={styles.content}>
                <span style={styles.emoji}>😿</span>
                <h1 style={styles.title}>404</h1>
                <h2 style={styles.subtitle}>Страница не найдена</h2>
                <p style={styles.text}>
                    Извините, но страница, которую вы ищете, не существует.<br />
                    Возможно, она была перемещена или удалена.
                </p>
                <Link 
                    to="/" 
                    style={styles.button}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#2a7c6e';
                        e.target.style.borderColor = '#2a7c6e';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 5px 15px rgba(51, 152, 134, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#339886';
                        e.target.style.borderColor = '#339886';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                    }}
                >
                    Вернуться на главную
                </Link>
            </div>
        </Container>
    );
}

export default NotFound;