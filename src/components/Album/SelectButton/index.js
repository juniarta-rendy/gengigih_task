import React from 'react';

export const SelectButton = ({ isSelected, onClick, id }) => {
  return (
    <button
      style={{
        padding: '12px 32px',
        borderRadius: '0.5rem',
        fontSize: '16px',
        backgroundColor: '#F0A500',
        outline: 'none',
        cursor: 'pointer',
      }}
      onClick={onClick}
      id={id}
    >
      {isSelected ? 'Deselect' : 'Select'}
    </button>
  );
};
