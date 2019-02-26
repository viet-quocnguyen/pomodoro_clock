import React, { Component } from "react";

export class Timer extends Component {
  timer = () => {
    if (this.props.timerRunning === true) {
      clearInterval(this.props.timerId);
      this.props.setCurrentTime("25 : 00");
      this.props.setTimerRunning();
    } else {
      this.props.cycle === "Working"
        ? this.props.startTimer(this.props.workTime)
        : this.props.startTimer(this.props.breakTime);
    }
  };
  render() {
    let display = "Start";
    if (this.props.timerRunning === true) {
      display = "Stop";
    }
    return (
      <div className="timer">
        <span>{this.props.currentTime}</span>
        <span>{this.props.cycle}</span>
        <button id="start" onClick={this.timer}>
          {display}
        </button>
      </div>
    );
  }
}

export default Timer;
