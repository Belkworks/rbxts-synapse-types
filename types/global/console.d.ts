// console api

declare function rconsoletop(should_be_top: boolean): void;

declare function rconsoleprint(data: string, async?: boolean, escape?: boolean): void;

declare function rconsoleinfo(data: string, async?: boolean): void;

declare function rconsolewarn(data: string, async?: boolean): void;

declare function rconsoleerr(data: string, async?: boolean): void;

declare function rconsoleclear(): void;

declare function rconsolename(): void;

declare function rconsoleinput(): string;

declare function rconsolehide(): void;

declare function rconsoleshow(): void;

declare function rconsolehidden(): boolean;

declare function printconsole(data: string, r: number, g: number, b: number): void;

declare function printconsole(data: string): void;

declare function printconsole(data: string, color: Color3): void;

declare function clearconsole(): void;

