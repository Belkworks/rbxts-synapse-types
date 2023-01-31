declare function newcclosure(closure: Callback, name?: string): Callback;

declare function clonefunction(to_clone: Callback): Callback;

declare function hookfunction(to_hook: Callback, hook: (...args: any[]) => any): Callback;

declare function restorefunction(to_restore: Callback): void;

declare function isfunctionhooked(f: Callback): boolean;

declare function hookmetamethod(instance: Instance, metamethod: string, hook: Callback): Callback;

declare function getnamecallmethod(): string;

declare function setstackhidden(closure: Callback, hidden?: boolean): void;

declare function setstackhidden(level: number, hidden?: boolean): void;

declare function hookproto(to_hook: defined, hook: Callback): void;

declare function restoreproto(to_restore: defined): void;

declare function hooksignal(signal: RBXScriptSignal, callback: Callback): void;

declare function restoresignal(signal: RBXScriptSignal): void;

declare function issignalhooked(signal: RBXScriptSignal): boolean;

declare namespace syn.oth {
    function hook(target: Callback, hook: Callback): Callback;
    function unhook(target: Callback, hook_or_callback?: Callback): boolean;
    function get_root_callback(): Callback;
    function is_hook_thread(): boolean;
    function get_original_thread(): thread;
}

type FilterBase = {
    Filter: Callback;
};

type NotFilter = {
    Target: FilterBase;
};

type AnyFilter = {
    Filters: FilterBase[];
};

type AllFilter = {
    Filters: FilterBase[];
};

type TypeFilter = {
    ArgumentIndex: number;
    ArgumentType: string;
};

type NamecallFilter = {
    NamecallMethod: string;
};

type InstanceTypeFilter = {
    ArgumentIndex: number;
    InstanceType: string;
};

type InstanceNameFilter = {
    ArgumentIndex: number;
    InstanceName: string;
};

type ArgumentFilter = {
    ArgumentIndex: number;
    Argument: any;
    StripNull: boolean;
};

type userdata = any;

type UserdataTypeFilter = {
    ArgumentIndex: number;
    UserdataType: userdata;
};

type ArgCountFilter = {
    ArgumentCount: number;
};

type CallerFilter = {
    Invert: boolean;
};

declare function getfilter(filter: FilterBase, original_function: Callback, filter_function: Callback): Callback;
