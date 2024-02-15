import React from 'react';

const BigButton = () => {
  return (
    <div>
      {/* This link will open in the same tab/window */}
      <a href="https://github.com/Albee89" target="_blank" rel="noopener noreferrer">
        Click me to browse
      </a>

      {/* Or, you can use a button with an onClick event to navigate programmatically */}
      <button
        className="bigBtn"
        onClick={() => {
          window.location.href = 'https://github.com/Albee89';
        }}
      >
        BROWSE
      </button>
    </div>
  );
};

export default BigButton;