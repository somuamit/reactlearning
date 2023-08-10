import React, { createContext, useState } from "react";


function ParentChildComp3() {
  const [message, setMessage] = useState("Hello from parent using State");

return <ChildComponent message={message} setMessage={setMessage} />;
  };

  

// Child component
function ChildComponent(props) {
  return (
    <div>
      <div>{props.message}</div>
      <button onClick={() => props.setMessage("Hello from child")}>
        Update message
      </button>
    </div>
  );
}

  export default ParentChildComp3;