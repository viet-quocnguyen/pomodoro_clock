import React, { Component } from "react";

export class WorkController extends Component {
  increaseWorkTime = () => {
    this.props.increaseWorkTime();

    if (this.props.timerRunning === false) {
      this.props.setCurrentTime(`${this.props.workTime + 1} : 00`);
    }
  };
  decreaseWorkTime = () => {
    this.props.decreaseWorkTime();
    if (this.props.timerRunning === false) {
      if (this.props.workTime !== 1)
        this.props.setCurrentTime(`${this.props.workTime - 1} : 00`);
    }
  };
  render() {
    return (
      <div className="workTime controller">
        <h3>Work Time</h3>
        <button onClick={this.increaseWorkTime}>+</button>
        <span> {this.props.workTime} </span>
        <button onClick={this.decreaseWorkTime}>-</button>
      </div>
    );
  }
}

export default WorkController;
