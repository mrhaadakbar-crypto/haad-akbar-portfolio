import React, { useState, useEffect } from 'react';

// Arrow function component: mouse ke saath chalne wali light
const CursorGlow = () => {
  // Mouse ki position (shuru mein screen se bahar rakhi hai)
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    // Jab bhi mouse hile, position update karo
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMove);

    // Component hatne par listener band kar do
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    // pointer-events-none = light ke neeche ke buttons/links normal click hote rahenge
    // fixed = screen ke saath rehti hai (scroll par bhi mouse ke saath)
    // hidden md:block = mobile/touch par nahi dikhegi (wahan cursor hota hi nahi)
    // bg-[radial-gradient(...)] = beech mein roshan, kinaron par ghayab hone wali blue light
    // transition-transform duration-200 = light mouse ke peeche halka smooth chalti hai
    <div
      className="pointer-events-none fixed left-0 top-0 z-50 hidden h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18)_0%,transparent_65%)] transition-transform duration-200 ease-out will-change-transform md:block"
      // 250 = light ke size (500) ka aadha, taake light cursor ke bilkul beech mein rahe
      style={{ transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)` }}
    />
  );
};

export default CursorGlow;