import React from 'react';

const SelectButton = ({ url }) => {
  return (
    <button
      style={{
        padding: '12px 32px',
        borderRadius: '20px',
        fontSize: '16px',
        backgroundColor: 'green',
      }}
    >
      <a href={url} style={{ color: 'white', textDecoration: 'none' }}>
        Select
      </a>
    </button>
  );
};

export default SelectButton;