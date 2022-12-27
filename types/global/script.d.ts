declare function loadstring(source: string, chunk_name?: string): Callback;

declare function checkcaller(): boolean;

declare function issynapsefunction(f: Callback): boolean;

declare function islclosure(f: Callback): boolean;

declare function decompile(target: Callback | LuaSourceContainer): string;

declare function getscriptthread(script: Instance): thread;

declare function getsenv(script: Instance): Record<string, unknown>;

declare function getscriptfunction(script: Instance): Callback;

declare function getscripthash(script: LuaSourceContainer): string;

declare function getfunctionhash(f: Callback): string;

declare function getscriptname(script: Instance): string;

declare function issynapsethread(thread: thread): boolean;
