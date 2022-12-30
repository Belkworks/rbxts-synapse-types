declare function newcclosure(closure: Callback, name?: string): Callback;

declare function clonefunction(to_clone: Callback): Callback;

// TODO: filter types
declare function hookfunction(to_hook: Callback, hook: (...args: any[]) => any): Callback;

declare function restorefunction(to_restore: Callback): void;

declare function isfunctionhooked(f: Callback): boolean;
