import React, { Component } from "react";
import "./counter.css";

export default class index extends Component {
  state = {
    count: 0
  };

  handleDec = e => {
    this.setState({ count: this.state.count - 1 });
  };

  handleInc = e => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <button onClick={this.handleDec}>-</button>
        {this.state.count}
        <button onClick={this.handleInc}>+</button>
      </>
    );
  }
}
