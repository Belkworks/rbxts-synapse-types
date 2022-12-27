declare function getgenv(): Record<string, unknown>;

declare function getrenv(): Record<string, unknown>;

declare function getreg(): Record<string, unknown> & unknown[];

declare function getgc(include_tables?: boolean): unknown[];

type FunctionFilterOpts = {
	Name?: string;
	Constants?: unknown[];
	Upvalues?: unknown[];
	IgnoreSyn?: boolean;
	Proto?: unknown;
	Environment?: unknown;
};

type TableFilterOpts = {
	Keys: unknown[];
	Values: unknown[];
	KeyValuePairs: { [key: string]: unknown };
	Metatable: unknown;
};

declare function filtergc(type: "function", options: FunctionFilterOpts, return_one?: false): Callback[];
declare function filtergc(type: "function", options: FunctionFilterOpts, return_one: true): Callback | undefined;

declare function filtergc(type: "table", options: TableFilterOpts, return_one?: false): object[];
declare function filtergc(type: "table", options: TableFilterOpts, return_one: true): object | undefined;

declare function getinstances(): readonly Instance[];

declare function getnilinstances(): readonly Instance[];

declare function getscripts(): readonly LuaSourceContainer[];

declare function getloadedmodules(): readonly ModuleScript[];

declare function fireclickdetector(detector: ClickDetector): void;

declare function fireproximityprompt(prompt: ProximityPrompt): void;

declare function firetouchinterest(part: Instance, to_touch: Instance, toggle: boolean): void;
