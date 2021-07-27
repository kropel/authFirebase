import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextState.count % 2 === 0;
  }

  increment() {
    this.setState(state => ({ count: state.count + 1 }));
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        Clicks: {count}
        <button onClick={this.increment}>Button</button>
      </div>
    );
  }
}

export default App;
