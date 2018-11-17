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
		this.props.pomoTimer.seconds += 100;
	}

	render() {

		const percentageCircle = 230 - 230 * this.props.pomoTimer.timeleftPercentage;
		const timerStyle = {
			clipPath: 'polygon(0px 230px,230px 230px,230px ' + percentageCircle + 'px,0px ' + percentageCircle + 'px)',
		};

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
					<button id="start-timer" onClick={() => this.startTimer()}>Start</button>
					<button id="stop-timer" onClick={()=>this.stopTimer()}>Stop</button>
				</div>
			</div>
		)
	}
};

export default Timer;