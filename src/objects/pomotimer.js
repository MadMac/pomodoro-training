import { observable, computed } from "mobx"

class PomoTimer {
	@observable seconds = 0;

	@computed get timeleft() {
		return (25 * 60) - this.seconds;
	}

	@computed get timeleftForUI() {
		
		let fullSeconds = 25 * 60 - this.seconds;
		
		let minutes = Math.floor(fullSeconds / 60);

		let seconds = Math.ceil(fullSeconds % (60 * 60) % 60);

		if (seconds < 10) {
			seconds = "0" + seconds.toString();
		}

		return minutes + " : " + seconds;
	}
}

export default PomoTimer;