import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollPagesUp() {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/price-clinic') return;
        
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollPagesUp;