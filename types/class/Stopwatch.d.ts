interface Stopwatch {
	readonly ElapsedTime: Duration;

	Start(): void;
	Stop(): void;
	Reset(): void;
}

interface StopwatchConstructor {
	new (): Stopwatch;
}

declare const Stopwatch: StopwatchConstructor;
