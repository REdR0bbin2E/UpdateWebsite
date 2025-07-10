import { useEffect } from 'react';
import { degrees, motion, transform } from 'framer-motion';
import { Navigation2 } from 'lucide-react';

function VerticalScroller() {

    const scrollByViewport = (direction) => {
        const offset = window.innerHeight;

        window.scrollBy({
            top: direction === 'down' ? -offset - 2000 : offset + 2000,
            behavior: 'smooth'
        })
    }

    const buttonStyles = {
        position: 'fixed',
        left: '97%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.8)',
        border: '6px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        borderRadius: '25%',
        padding: '10px',
        color: 'white',
        cursor: 'pointer',
        transition: 'all 0.3s ease',

    };

    const buttonStyles2 = {
        position: 'fixed',
        left: '95%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.8)',
        border: '6px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        borderRadius: '25%',
        padding: '10px',
        color: 'white',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    };

    return (
        <>
            <motion.div
                style={{ ...buttonStyles2, top: '20px' }}
                initial={{ opacity: 0, y: -200, transform: "rotate(180deg)" }}
                animate={{ opacity: 1, y: 0, transform: "rotate(180deg)" }}
                transition={{ duration: 0.5 }}
                onClick={() => scrollByViewport('up')}
            >
                <Navigation2 size={35} />
            </motion.div>

            <motion.div
                style={{ ...buttonStyles, bottom: '20px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                onClick={() => scrollByViewport('down')}
            >
                <Navigation2 size={35} />
            </motion.div>
        </>
    )

}

export default VerticalScroller;