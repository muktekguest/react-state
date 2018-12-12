import React, { Component } from "react";

class Button extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };
  }

  addIncrement = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={ this.addIncrement }>Like { this.state.counter }</button>
      </React.Fragment>
    );
  }
}

export default Button;
