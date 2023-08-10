import React, { Component } from 'react';  
import PropTypes from 'prop-types';
function Person(props) {
    return <div>{props.name} is {props.age} years old.</div>;
  }

  Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(Number)]).isRequired
  };

  export default Person;