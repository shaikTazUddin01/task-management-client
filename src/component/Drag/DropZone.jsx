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
        padding: '20px',
        minHeight: '100px',
        width: '200px',
        textAlign: 'center',
      }}
      className='shadow-md shadow-orange-500 rounded-xl border border-orange-300'
    >
      <h2 className='text-xl font-bold'>{zoneName}</h2>
      {children}
    </div>
  );
};

export default DropZone;
