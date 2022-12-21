interface Timer {
	Start(): void;
	Stop(): void;
	Reset(): void;

	Nanoseconds(): number;
	Microseconds(): number;
	Milliseconds(): number;
	Seconds(): number;
	Minutes(): number;
	Hours(): number;
}

interface TimerConstructor {
	new (): Timer;
}

declare const Timer: TimerConstructor;
