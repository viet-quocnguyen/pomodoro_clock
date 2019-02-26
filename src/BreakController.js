import React, { Component } from "react";

export class BreakController extends Component {
  increaseBreakTime = () => {
    this.props.increaseBreakTime();
    if (this.props.timerRunning === false) {
      this.props.setCurrentTime(`${this.props.breakTime + 1} : 00`);
    }
  };
  decreaseBreakTime = () => {
    this.props.decreaseBreakTime();
    if (this.props.timerRunning === false) {
      if (this.props.breakTime !== 1)
        this.props.setCurrentTime(`${this.props.breakTime + 1} : 00`);
    }
  };
  render() {
    return (
      <div className="breakTime controller">
        <h3>Break Time</h3>
        <button onClick={this.increaseBreakTime}>+</button>
        <span> {this.props.breakTime} </span>
        <button onClick={this.decreaseBreakTime}>-</button>
      </div>
    );
  }
}

export default BreakController;
