interface Timer {
	Enabled: boolean;
	RepetitionCount: number;
	Interval: Duration;
	readonly TimeLeft: Duration;
	readonly LastElapsed: Duration;

	OnElapsed: SynSignal<[delta: Duration]>;
}

interface TimerConstructor {
	new (): Timer;
}

declare const Timer: TimerConstructor;
