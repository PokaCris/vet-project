import { useState, useEffect } from 'react';
import { Container, Breadcrumb, Row, Col, Pagination, Button, Collapse, Form, Alert } from 'react-bootstrap';
import { articlesData } from '../../data/articlesData';

import './Articles.css';

function Articles() {
    const [activePage, setActivePage] = useState(1);
    const [openCollapse, setOpenCollapse] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredArticles = articlesData.filter(article => {
        if (!searchQuery.trim()) return true;

        const query = searchQuery.toLowerCase().trim();

        const searchInText = (text) => text.toLowerCase().includes(query);

        if (searchInText(article.title)) return true;
        if (searchInText(article.shortDescription)) return true;

        if (article.sections) {
            for (let section of article.sections) {
                if (section.title && searchInText(section.title)) return true;
                if (section.content && searchInText(section.content)) return true;
                if (section.items) {
                    for (let item of section.items) {
                        if (searchInText(item)) return true;
                    }
                }
            }
        }

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

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setActivePage(1);
    };

    const scrollToArticle = (articleId) => {
        const articleIndex = filteredArticles.findIndex(article => article.id === articleId);
        if (articleIndex === -1) return;

        const targetPage = Math.floor(articleIndex / articlesPerPage) + 1;
        const needsPageChange = targetPage !== activePage;

        if (needsPageChange) {
            setActivePage(targetPage);
        }

        const performScroll = () => {
            setOpenCollapse(articleId);
            setTimeout(() => {
                const articleElement = document.getElementById(`collapse-${articleId}`);
                if (articleElement) {
                    articleElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }
            }, 100);
        };

        if (needsPageChange) {
            setTimeout(performScroll, 100);
        } else {
            performScroll();
        }
    };

    useEffect(() => {
        window.scrollToArticle = scrollToArticle;

        const handleStoredScroll = () => {
            const scrollData = localStorage.getItem('articleScrollData');
            if (!scrollData) return;

            try {
                const data = JSON.parse(scrollData);
                const now = Date.now();

                if (now - data.timestamp < 5000) {
                    setTimeout(() => scrollToArticle(data.articleId), 300);
                }

                localStorage.removeItem('articleScrollData');
            } catch (e) {
                console.error('Ошибка при обработке данных скролла:', e);
            }
        };

        handleStoredScroll();

        return () => {
            delete window.scrollToArticle;
        };
    }, [activePage, filteredArticles]);

    const renderSection = (section, index) => {
        switch (section.type) {
            case 'text':
                return (
                    <div key={index}>
                        {section.title && <h5 className="section-title">{section.title}</h5>}
                        {section.content && <p>{section.content}</p>}
                    </div>
                );

            case 'subtitle':
                return <h6 key={index} className="section-subtitle">{section.title}</h6>;

            case 'list':
                return (
                    <ul key={index} className="section-list">
                        {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                        ))}
                    </ul>
                );

            case 'orderedList':
                return (
                    <ol key={index} className="section-ordered-list">
                        {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                        ))}
                    </ol>
                );

            case 'tip':
                return (
                    <Alert key={index} variant="info" className="section-tip">
                        <strong>{section.content}</strong>
                    </Alert>
                );

            case 'warning':
                return (
                    <Alert key={index} variant="warning" className="section-warning">
                        <strong>{section.content}</strong>
                    </Alert>
                );

            case 'success':
                return (
                    <Alert key={index} variant="success" className="section-success">
                        <strong>{section.content}</strong>
                    </Alert>
                );

            default:
                return null;
        }
    };

    return (
        <>
            <Container className='my-3 p-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item active>Статьи</Breadcrumb.Item>
                </Breadcrumb>

                <Row className='mb-5 articles-page-container'>
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
                                        onChange={handleSearchChange}
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
                            <div className='mb-4'>
                                <p>Найдено статей: <strong>{filteredArticles.length}</strong></p>
                            </div>
                        )}

                        {filteredArticles.length === 0 ? (
                            <div className='text-center py-5'>
                                <h4>Статьи не найдены</h4>
                                <p>Попробуйте изменить запрос поиска</p>
                            </div>
                        ) : (
                            <>
                                <div className='mb-5'>
                                    {currentArticles.map((article) => (
                                        <div key={article.id} className='mb-5 articles-item'>
                                            <Row className='align-items-center'>
                                                <Col md={5} lg={4} className='mb-4 mb-md-0 d-flex justify-content-center'>
                                                    <div className='articles-image-wrapper'>
                                                        <div className='articles-image-container'>
                                                            <img
                                                                src={article.image}
                                                                alt={article.title}
                                                                className='articles-image'
                                                            />
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={7} lg={8}>
                                                    <div className='articles-content'>
                                                        <h3 className='articles-item-title mb-3'>{article.title}</h3>
                                                        <p className='articles-item-text mb-4'>
                                                            {article.shortDescription}
                                                        </p>

                                                        <Button
                                                            variant="outline-success"
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
                                                                    {article.sections && article.sections.map((section, index) => (
                                                                        renderSection(section, index)
                                                                    ))}
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

                                                    {(() => {
                                                        const pages = [];
                                                        let startPage = Math.max(1, Math.min(activePage - 1, totalPages - 2));
                                                        let endPage = Math.min(totalPages, startPage + 2);

                                                        for (let page = startPage; page <= endPage; page++) {
                                                            pages.push(
                                                                <Pagination.Item
                                                                    key={page}
                                                                    active={page === activePage}
                                                                    onClick={() => setActivePage(page)}
                                                                >
                                                                    {page}
                                                                </Pagination.Item>
                                                            );
                                                        }
                                                        return pages;
                                                    })()}

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
                            </>
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