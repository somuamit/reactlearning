import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time + 1
      }));
    }, 1000);
    console.log('Component mounted');
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log('Component unmounted');
  }

  render() {
    return (
      <div>
        <p>Time: {this.state.time}</p>
      </div>
    );
  }
}

export default Timer;