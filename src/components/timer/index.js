import React, { Component } from 'react';
import './style.css';


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
		this.setState({
			timer: 0,
		})

		this.updateUiTime(25, 0);
	}

	runTimer = () => {
		this.setState({
			timer: this.state.timer + 1,
		})

		let fullSeconds = 25 * 60 - this.state.timer;
		
		let minutes = Math.floor(fullSeconds / 60);

		let seconds = Math.ceil(fullSeconds % (60 * 60) % 60);

		this.updateUiTime(minutes, seconds);
	}

	updateUiTime = (minutes, seconds) => {

		if (seconds < 10) {
			seconds = "0" + seconds.toString();
		}

		this.setState({
			uiMinutes: minutes,
			uiSeconds: seconds
		})

	}


	render() {
		return (
			<div>
				<div id="timer-time">
					<h2>
						{this.state.uiMinutes} : {this.state.uiSeconds}
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