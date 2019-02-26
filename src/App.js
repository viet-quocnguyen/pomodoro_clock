import React, { Component } from "react";
import TimeControllers from "./TimerControllers";
import Timer from "./Timer";
import Sound from "./Sound";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cycle: "Working",
      workTime: 25,
      breakTime: 5,
      sound: "on",
      timerId: 0,
      timerRunning: false,
      currentTime: "25 : 00"
    };
  }
  startTimer = duration => {
    this.setState({
      timerRunning: true
    });

    // convert duration (min) to seconds
    let time = duration * 60;
    let minutes;
    let seconds;
    let runningTimer = setInterval(() => {
      if (this.state.timerRunning === false) {
        clearInterval(this.state.timerId);
      }
      time--;
      this.setState({
        timerId: runningTimer
      });
      minutes = Math.floor(time / 60);

      seconds = time - minutes * 60;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      this.setState({
        currentTime: `${minutes} : ${seconds}`
      });

      if (time === 0) {
        if (this.state.sound === "on") {
          window.open("https://www.youtube.com/watch?v=IPXIgEAGe4U", "_blank");
        }
        if (this.state.cycle === "Working") {
          this.setState({
            cycle: "Break",
            timerRunning: false
          });
          clearInterval(this.state.timerId);
          this.startTimer(this.state.breakTime);
        } else {
          this.setState({
            cycle: "Working",
            timerRunning: false
          });
          clearInterval(this.state.timerId);
          this.startTimer(this.state.workTime);
        }
      }
    }, 1000);
  };
  increaseWorkTime = () => {
    this.setState({
      workTime: this.state.workTime + 1
    });
  };

  decreaseWorkTime = () => {
    if (this.state.workTime === 1) {
      this.setState({
        workTime: 1
      });
    } else {
      this.setState({
        workTime: this.state.workTime - 1
      });
    }
  };

  increaseBreakTime = () => {
    this.setState({
      breakTime: this.state.breakTime + 1
    });
  };

  decreaseBreakTime = () => {
    if (this.state.breakTime === 1) {
      this.setState({
        breakTime: 1
      });
    } else {
      this.setState({
        breakTime: this.state.breakTime - 1
      });
    }
  };
  setCurrentTime = time => {
    this.setState({
      currentTime: time
    });
  };
  setTimerRunning = () => {
    this.setState({
      timerRunning: !this.state.timerRunning
    });
  };
  setSound = sound => {
    this.setState({
      sound: sound
    });
  };

  render() {
    return (
      <div className="main">
        <h1>POMODORO CLOCK</h1>
        <Timer
          workTime={this.state.workTime}
          breakTime={this.state.breakTime}
          currentTime={this.state.currentTime}
          cycle={this.state.cycle}
          timerRunning={this.state.timerRunning}
          timerId={this.state.timerId}
          setCurrentTime={this.setCurrentTime}
          setTimerRunning={this.setTimerRunning}
          startTimer={this.startTimer}
        />
        <TimeControllers
          workTime={this.state.workTime}
          breakTime={this.state.breakTime}
          increaseWorkTime={this.increaseWorkTime}
          decreaseWorkTime={this.decreaseWorkTime}
          increaseBreakTime={this.increaseBreakTime}
          decreaseBreakTime={this.decreaseBreakTime}
          timerRunning={this.state.timerRunning}
          setCurrentTime={this.setCurrentTime}
        />
        <Sound setSound={this.setSound} sound={this.state.sound} />
      </div>
    );
  }
}

export default App;
