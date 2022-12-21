declare function getgenv(): Record<string, unknown>;

declare function getrenv(): Record<string, unknown>;

declare function getreg(): Record<string, unknown> & unknown[];

declare function getgc(include_tables?: boolean): unknown[];

// TODO: proper options
declare function filtergc(type: string, options: object, return_one?: boolean): unknown[] | undefined;

declare function getinstances(): readonly Instance[];

declare function getnilinstances(): readonly Instance[];

declare function getscripts(): readonly LuaSourceContainer[];

declare function getloadedmodules(): readonly ModuleScript[];

declare function fireclickdetector(detector: ClickDetector): void;

declare function fireproximityprompt(prompt: ProximityPrompt): void;

declare function firetouchinterest(part: Instance, to_touch: Instance, toggle: boolean): void;
