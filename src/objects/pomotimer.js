import { observable, computed } from "mobx"

class PomoTimer {
	@observable seconds = 0;

	@computed get timeleft() {
		return (25 * 60) - this.seconds;
	}
}

export default PomoTimer;