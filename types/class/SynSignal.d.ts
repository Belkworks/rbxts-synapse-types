interface SynConnection {
	Disconnect(): void;
}

interface SynSignal<T extends any[] = []> {
	Connect(callback: (...args: T) => void): SynConnection;
	Wait(): LuaTuple<T>;
	Fire(...args: T): void;

	// TODO: __call metamethod
}

interface SynSignalConstructor {
	new (): SynSignal;
}

declare const SynSignal: SynSignalConstructor;
