import React, { Component } from 'react';
import { observer } from "mobx-react"
import './style.css';

@observer
class Timer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			timerId: 0,
		}

	}

	startTimer = () => {
		console.log("start");

		this.props.pomoTimer.resetTimer();

		let intervalid = setInterval(this.runTimer, 1000);

		this.setState({
			timerId: intervalid,
		})
	}	

	stopTimer = () => {
		console.log("stop");

		clearInterval(this.state.timerId);

		this.props.pomoTimer.resetTimer();
	}

	runTimer = () => {
		this.props.pomoTimer.updateTime();

		if (this.props.pomoTimer.timeleft <= 0) {
			this.finishTimer();
		}
	}

	finishTimer = () => {
		console.log("Timer finished");
		clearInterval(this.state.timerId);
	}

	render() {

		const percentageCircle = 230 - 230 * this.props.pomoTimer.timeleftPercentage;
		const timerStyle = {
			clipPath: 'polygon(0px 230px,230px 230px,230px ' + percentageCircle + 'px,0px ' + percentageCircle + 'px)',
		};

		
		const isPauseDisabled = !this.props.pomoTimer.isRunning;
		const isStartDisabled = !isPauseDisabled;

		return (
			<div>
				
				<div id="timer-circle-border">
					<div id="timer-circle" style={timerStyle}>
						
					</div>

					<div id="timer-time">
						{this.props.pomoTimer.timeleftForUI}
					</div>
				</div>
				
				<div id="timer-controls">
					<button id="start-timer" onClick={() => this.startTimer()} disabled={isStartDisabled}>Start</button>
					<button id="stop-timer" onClick={()=>this.stopTimer()} disabled={isPauseDisabled}>Stop</button>
				</div>
			</div>
		)
	}
};

export default Timer;