declare function setclipboard(data: string | number | Instance | Instance[]): boolean;

declare function setfflag(fflag: string, value: string): boolean;

declare function identifyexecutor(): LuaTuple<[string, string]>;

declare function unlockmodulescript(module: ModuleScript): void;
