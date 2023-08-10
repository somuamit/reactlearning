import React from 'react';

function ParentChildComp1() {
  const handleClick = () => {
    console.log("Button clicked in parent component");
  };

  return (
    <ChildComponent message="Hello from parent using function" handleClick={handleClick} />
  );
  }

  // Child component
function ChildComponent(props) {
  return <button onClick={props.handleClick}>{props.message}</button>;
  }

  export default ParentChildComp1;