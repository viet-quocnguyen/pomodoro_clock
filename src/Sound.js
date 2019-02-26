import React, { Component } from "react";

export class Sound extends Component {
  toggleSound = () => {
    this.props.sound === "on"
      ? this.props.setSound("off")
      : this.props.setSound("on");
  };
  render() {
    return (
      <div>
        <button onClick={this.toggleSound}>Alarm</button>
        <span> {this.props.sound}</span>
      </div>
    );
  }
}

export default Sound;
