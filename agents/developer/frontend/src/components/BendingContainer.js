// src/components/BendingContainer.js
import React, { useRef, useEffect } from 'react';

function BendingContainer({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Handler for mousemove
    const handleMouseMove = (e) => {
      // Calculate the center of the screen
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // How far the cursor is from the center
      const offsetX = e.clientX - centerX;
      const offsetY = e.clientY - centerY;

      // Adjust these divisors to control tilt intensity
      const rotateX = +((offsetY / 50).toFixed(2)); // + makes it a positive or negative number
      const rotateY = -((offsetX / 50).toFixed(2)); // - inverts horizontal tilt

      // Apply perspective and rotation
      if (containerRef.current) {
        containerRef.current.style.transform = `
          perspective(1000px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg)
        `;
      }
    };

    // Attach event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup on unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    // src/components/BendingContainer.js
<div
  ref={containerRef}
  style={{
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    overflow: 'hidden',    // if you want to hide edges
    transition: 'transform 0.1s ease-out',
    transformStyle: 'preserve-3d',
    background: 'url("https://images.pexels.com/photos/17483906/pexels-photo-17483906/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-the-concept-of-artificial-general-intelligence-agi-it-was-created-by-domhnall-malone-as-part-of-the-visua.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"") center/cover no-repeat',
  }}
>
  <div style={{ position: 'relative', zIndex: 2 }}>
    {children}
  </div>
</div>

  );
}

export default BendingContainer;
