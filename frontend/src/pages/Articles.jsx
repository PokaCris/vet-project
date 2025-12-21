import { useState } from 'react';
import { Container, Breadcrumb, Row, Col, Pagination, Button, Collapse, Form } from 'react-bootstrap';
import { articlesData } from '../data/articlesData';
import './Articles.css';

function Articles() {
    const [activePage, setActivePage] = useState(1);
    const [openCollapse, setOpenCollapse] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredArticles = articlesData.filter(article => {
        if (!searchQuery.trim()) return true;

        const query = searchQuery.toLowerCase();
        const titleLower = article.title.toLowerCase();
        const descriptionLower = article.shortDescription.toLowerCase();
        const contentLower = article.fullContent.toLowerCase();

        if (titleLower.includes(query)) return true;
        if (descriptionLower.includes(query)) return true;
        if (contentLower.includes(query)) return true;

        return false;
    });

    const hasSearchQuery = searchQuery.trim().length > 0;
    const articlesPerPage = 3;
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    
    const startIndex = (activePage - 1) * articlesPerPage;
    const currentArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

    const handleToggleCollapse = (id) => {
        setOpenCollapse(openCollapse === id ? null : id);
    };

    return (
        <>
            <Container className='my-3 p-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item active>Статьи</Breadcrumb.Item>
                </Breadcrumb>
            </Container>

            <Container className='articles-page-container'>
                <Row className='mb-5'>
                    <Col>
                        <h1 className='articles-title mb-4'>Полезные статьи о питомцах</h1>

                        <div className='mb-5'>
                            <p className='articles-intro'>
                                В этом разделе мы собрали полезную информацию о здоровье, уходе и воспитании 
                                домашних животных. Наши статьи помогут вам лучше понимать своих питомцев 
                                и обеспечивать им качественную жизнь.
                            </p>
                        </div>

                        <div className='mb-5'>
                            <Form>
                                <Form.Group controlId="searchArticles">
                                    <Form.Control
                                        type="text"
                                        placeholder="Поиск по статьям"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="py-3"
                                    />
                                    <div className="m-1">
                                        <Form.Text className="text-muted">
                                            Введите ключевые слова для поиска статей (например: "зубы", "вакцинация", "стресс")
                                        </Form.Text>
                                    </div>
                                </Form.Group>
                            </Form>
                        </div>

                        {hasSearchQuery && (
                            <div className='mb-4 d-flex justify-content-end'>
                                <div className='articles-counter'>
                                    Статьи {startIndex + 1}-{Math.min(startIndex + articlesPerPage, filteredArticles.length)} из {filteredArticles.length}
                                </div>
                            </div>
                        )}

                        <div className='mb-5'>
                            {currentArticles.map((article) => (
                                <div key={article.id} className='mb-5 articles-item'>
                                    <Row className='align-items-center'>
                                        <Col md={5} lg={4} className='mb-4 mb-md-0'>
                                            <div className='articles-square-image-container'>
                                                <img
                                                    src={article.image}
                                                    alt={article.title}
                                                    className='img-fluid articles-square-image'
                                                />
                                            </div>
                                        </Col>
                                        
                                        <Col md={7} lg={8}>
                                            <div className='articles-content'>
                                                <h3 className='articles-item-title mb-3'>{article.title}</h3>
                                                <p className='articles-item-text mb-4'>
                                                    {article.shortDescription}
                                                </p>
                                                
                                                <Button
                                                    variant="outline-primary"
                                                    onClick={() => handleToggleCollapse(article.id)}
                                                    aria-controls={`collapse-${article.id}`}
                                                    aria-expanded={openCollapse === article.id}
                                                    className='articles-btn-more'
                                                >
                                                    {openCollapse === article.id ? 'Скрыть подробности' : 'Читать подробнее'}
                                                </Button>
                                                
                                                <Collapse in={openCollapse === article.id}>
                                                    <div id={`collapse-${article.id}`} className='mt-4'>
                                                        <div className='articles-collapse-content p-4'>
                                                            <div 
                                                                dangerouslySetInnerHTML={{ __html: article.fullContent }}
                                                            />
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <Row className='mt-5'>
                                <Col>
                                    <div className='d-flex justify-content-center'>
                                        <Pagination className='articles-pagination'>
                                            <Pagination.First 
                                                onClick={() => setActivePage(1)} 
                                                disabled={activePage === 1}
                                            />
                                            <Pagination.Prev 
                                                onClick={() => setActivePage(prev => Math.max(prev - 1, 1))}
                                                disabled={activePage === 1}
                                            />
                                            
                                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                                <Pagination.Item
                                                    key={page}
                                                    active={page === activePage}
                                                    onClick={() => setActivePage(page)}
                                                >
                                                    {page}
                                                </Pagination.Item>
                                            ))}
                                            
                                            <Pagination.Next 
                                                onClick={() => setActivePage(prev => Math.min(prev + 1, totalPages))}
                                                disabled={activePage === totalPages}
                                            />
                                            <Pagination.Last 
                                                onClick={() => setActivePage(totalPages)}
                                                disabled={activePage === totalPages}
                                            />
                                        </Pagination>
                                    </div>
                                </Col>
                            </Row>
                        )}

                        <div className='articles-info p-4 mt-5'>
                            <h3 className='articles-info-title mb-3'>Важная информация</h3>
                            <p className='mb-0'>
                                Материалы в этом разделе носят ознакомительный характер. 
                                Для точной диагностики и лечения обратитесь к ветеринарному врачу. 
                                Мы регулярно обновляем статьи, чтобы предоставлять вам самую актуальную информацию.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Articles;