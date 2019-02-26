import React, { Component } from "react";
import WorkController from "./WorkController";
import BreakController from "./BreakController";

export class TimerControllers extends Component {
  render() {
    return (
      <div className="timer-controllers">
        <WorkController
          workTime={this.props.workTime}
          increaseWorkTime={this.props.increaseWorkTime}
          decreaseWorkTime={this.props.decreaseWorkTime}
          timerRunning={this.props.timerRunning}
          setCurrentTime={this.props.setCurrentTime}
        />
        <BreakController
          breakTime={this.props.breakTime}
          increaseBreakTime={this.props.increaseBreakTime}
          decreaseBreakTime={this.props.decreaseBreakTime}
          timerRunning={this.props.timerRunning}
          setCurrentTime={this.props.setCurrentTime}
        />
      </div>
    );
  }
}

export default TimerControllers;
