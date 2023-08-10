import React from 'react';
function ListItems() {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const name="Mahesh";
  
    return (
      <div>
        <h1>List Items{name}</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  /*class ListItems extends React.Component{
    render() {
        const items = ['Apple', 'Banana', 'Grapes'];
        return (
            <div>
            <h1>List Items</h1>
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        );
      }
  }*/
  export default ListItems;
