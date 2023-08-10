import React from 'react';

const InlineStyleComponent = () => {
  const styles = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
  };

  return <div style={styles}>Hello, World!</div>;
};

export default InlineStyleComponent