interface Timer {
	Enabled: boolean;
	RepetitionCount: number;
	Interval: Duration;
	readonly TimeLeft: Duration;
	readonly LastElapsed: Duration;

	OnElapsed: SynSignal;
}

interface TimerConstructor {
	new (): Timer;
}

declare const Timer: TimerConstructor;
