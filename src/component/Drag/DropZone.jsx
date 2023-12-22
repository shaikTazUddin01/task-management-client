import React from 'react';

const DropZone = ({ onDrop, zoneName, children }) => {
  const allowDrop = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const draggedItemId = event.dataTransfer.getData('text/plain');
    onDrop(draggedItemId);
  };

  return (
    <div
      onDragOver={allowDrop}
      onDrop={handleDrop}
      style={{
        border: '2px dashed #aaa',
        padding: '20px',
        minHeight: '100px',
        width: '200px',
        textAlign: 'center',
      }}
    >
      <h2>{zoneName}</h2>
      {children}
    </div>
  );
};

export default DropZone;
