import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';
import gsap from 'gsap';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);

    useEffect(() => {
        const onMouseMove = (e) => {
            const { clientX, clientY } = e;

            gsap.to(dotRef.current, {
                x: clientX,
                y: clientY,
                duration: 0.1,
            });

            gsap.to(outlineRef.current, {
                x: clientX - 16,
                y: clientY - 16,
                duration: 0.3,
            });
        };

        window.addEventListener('mousemove', onMouseMove);
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot"></div>
            <div ref={outlineRef} className="cursor-outline"></div>
        </>
    );
};

export default CustomCursor;
