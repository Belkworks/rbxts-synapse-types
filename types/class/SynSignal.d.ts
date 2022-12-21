interface SynSignal<T extends unknown[] = []> {
	Connect(callback: (...args: T) => void): void;
	Wait(): LuaTuple<T>;
	Fire(...args: T): void;

	// TODO: __call metamethod
}

interface SynSignalConstructor {
	new (): SynSignal;
}

declare const SynSignal: SynSignalConstructor;
