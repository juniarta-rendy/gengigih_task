import React from 'react';

export const SelectButton = ({ url }) => {
  return (
    <button
      style={{
        padding: '12px 32px',
        borderRadius: '4px',
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
