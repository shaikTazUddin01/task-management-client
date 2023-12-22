import React from 'react';

const DraggableItem = ({ _id, content }) => {
  const dragStart = event => {
    event.dataTransfer.setData('text/plain', _id);
  };

  return (
    <div
      draggable
      onDragStart={dragStart}
      style={{
        border: '1px solid #ddd',
        padding: '10px',
        margin: '5px',
        cursor: 'move',
        backgroundColor: 'lightblue',
      }}
    >
      {content}
    </div>
  );
};

export default DraggableItem;
