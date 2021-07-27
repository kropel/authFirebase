import React, { Component } from "react";

class Clock extends Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("update clock");
      this.setState({
        date: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount() ");
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { date } = this.state;
    return <div>{date.toTimeString()}</div>;
  }
}

class App extends Component {
  state = {
    showClock: true
  };

  toggleClock = () => {
    this.setState(state => ({ showClock: !state.showClock }));
  };

  render() {
    const { showClock } = this.state;

    return (
      <div>
        <button onClick={this.toggleClock}>Show/hide clock</button>
        {showClock && <Clock />}
      </div>
    );
  }
}

export default App;
