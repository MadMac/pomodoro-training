import React, { Component } from 'react';
import { observer } from "mobx-react"
import './style.css';

@observer
class Timer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			timer: 0,
			timerId: 0,
			uiMinutes: "25",
			uiSeconds: "00",
		}

	}

	startTimer = () => {
		console.log("start");

		let intervalid = setInterval(this.runTimer, 1000);

		this.setState({
			timerId: intervalid,
		})
	}	

	stopTimer = () => {
		console.log("stop");

		clearInterval(this.state.timerId);

		this.props.pomoTimer.seconds = 0;
	}

	runTimer = () => {
		console.log(this.props.pomoTimer.timeleftForUI);
		this.props.pomoTimer.seconds += 1;
	}

	render() {

		return (
			<div>
				<div id="timer-time">
					<h2>
						{this.props.pomoTimer.timeleftForUI}
					</h2>
				</div>
				<div id="timer-circle-border">
					<div id="timer-circle"></div>
				</div>
				
				<div id="timer-controls">
					<button id="start-timer" onClick={() => this.startTimer()}>Start</button>
					<button id="stop-timer" onClick={()=>this.stopTimer()}>Stop</button>
				</div>
			</div>
		)
	}
};

export default Timer;