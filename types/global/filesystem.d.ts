declare function readfile(path: string): string;

declare function readfileasync(path: string): string;

declare function writefile(path: string, content: string): void;

declare function writefileasync(path: string, content: string): void;

declare function appendfile(path: string, content: string): void;

declare function appendfileasync(path: string, content: string): void;

declare function loadfile(path: string): LuaTuple<[Callback?, string?]>;

declare function loadfileasync(path: string): LuaTuple<[Callback?, string?]>;

declare function listfiles(folder?: string): string[];

declare function isfile(path: string): boolean;

declare function isfolder(path: string): boolean;

declare function makefolder(path: string): boolean;

declare function delfolder(path: string): void;

declare function getsynasset(path: string): string;

// TODO: saveinstance
// bool saveinstance(instance: Instance | table, options?: table) [yields]

// TODO: saveplace
// bool saveplace(options?: table) [yields]
// Equivalent to saveinstance(game, options).
