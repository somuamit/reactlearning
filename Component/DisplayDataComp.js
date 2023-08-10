import React from "react";

// Parent component
const DisplayDataComp = () => {
    const items = ["Item 1", "Item 2", "Item 3","Item 4"];
  
    return <Child items={items} />;
  };
  
  // Child component
  const Child = ({ items }) => {
    return (
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  };

  export default DisplayDataComp;