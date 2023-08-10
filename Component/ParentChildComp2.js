import React, { createContext, useState, useContext } from "react";
const MyContext = createContext();

function ParentChildComp2() {
  const [message, setMessage] = useState("Hello from parent using context");

  return (
    <MyContext.Provider value={{ message, setMessage }}>
      <ChildComponent />
    </MyContext.Provider>
  );
  };

  

  // Child component
function ChildComponent(props) {
  const { message } = useContext(MyContext);

  return <div>{message}</div>;
  }

  export default ParentChildComp2;