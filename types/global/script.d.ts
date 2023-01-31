// script api's

declare function loadstring(source: string, chunk_name?: string): Callback;

declare function checkcaller(): boolean;

declare function checkcallstack(type: string, level?: number): boolean;

declare function issynapsefunction(f: Callback): boolean;

declare function islclosure(f: Callback): boolean;

declare function decompile(target: Callback | LuaSourceContainer): string;

declare function getscriptthread(script: Instance): thread;

declare function getsenv(script: Instance): table;

declare function getscriptfunction(script: Instance): Callback;

declare function getscripthash(script: LuaSourceContainer): string;

declare function getfunctionhash(script: Callback): string;

declare function getscriptname(script: Instance): string;

declare function dumpbytecode(target: Callback | LuaSourceContainer): string;

declare function getcallingscript(): Instance | undefined;

declare function issynapsethread(thread: thread): boolean;

declare function setsynapsethread(set_to_synapse: boolean, target_thread?: thread): void;

