import React from 'react';

function ParentChildComp() {
    return <ChildComponent message="Hello from parent" />;
  }

  // Child component
function ChildComponent(props) {
    return <div>{props.message}</div>;
  }

  export default ParentChildComp;