import React, { useRef, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const SmoothScroll = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let scrollInstance = null;

    if (containerRef.current) {
      scrollInstance = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        multiplier: 1,
      });
    }

    return () => {
      if (scrollInstance) {
        scrollInstance.destroy();
      }
    };
  }, [containerRef]); 

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
};

export default SmoothScroll;
