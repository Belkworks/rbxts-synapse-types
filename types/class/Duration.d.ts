interface Duration {
	readonly Nanoseconds: number;
	readonly Microseconds: number;
	readonly Milliseconds: number;
	readonly Seconds: number;
	readonly Minutes: number;
	readonly Hours: number;
	readonly Days: number;
	readonly Months: number;
	readonly Years: number;
}

interface DurationConstructor {
	TimeSinceEpoch(): Duration;
	FromNanoseconds(nanoseconds: number): Duration;
	FromMicroseconds(microseconds: number): Duration;
	FromMilliseconds(milliseconds: number): Duration;
	FromSeconds(seconds: number): Duration;
	FromMinutes(minutes: number): Duration;
	FromHours(hours: number): Duration;
	FromDays(days: number): Duration;
	FromMonths(months: number): Duration;
	FromYears(years: number): Duration;
}

declare const Duration: DurationConstructor;
