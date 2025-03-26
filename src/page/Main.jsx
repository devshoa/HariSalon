import React, { useState, useRef } from 'react';

function App() {
  const [zoom, setZoom] = useState(1);
  const [origin, setOrigin] = useState({ x: "50%", y: "50%" });
  const imgRef = useRef(null);

  const handleDoubleClick = (e) => {
    if (!imgRef.current) return;

    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setOrigin({ x: `${x}%`, y: `${y}%` });
    setZoom(zoom === 1 ? 2 : 1); // Toggle zoom
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'rgb(37 81 53)' }}>
      <img
        ref={imgRef}
        src="../menu.svg"
        onDoubleClick={handleDoubleClick}
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: `${origin.x} ${origin.y}`,
          transition: 'transform 0.3s ease-in-out',
          cursor: 'pointer',
        }}
        alt="Menu"
      />
    </div>
  );
}

export default App;
