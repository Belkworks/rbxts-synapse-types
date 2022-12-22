interface Value<T> {
	Set(value: T): void;
	Get(): T;
}

interface ValueConstructor {
	new <T>(value: T): Value<T>;
}

declare const Value: ValueConstructor;
