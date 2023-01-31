// Misc api's

type table = { [key: string]: any };

declare function setclipboard(data: string | number | Instance | table): boolean;

declare function setfflag(fflag: string, value: string): boolean;

declare function identifyexecutor(): [string, string];

declare function unlockmodulescript(module: ModuleScript): void;

declare function require(module: ModuleScript): any;

declare function messagebox(text: string, caption?: string, type?: number): number;

declare function setwindowtitle(text: string): void;

declare function setwindowicon(data: string): void;

declare function gethui(): Instance;

declare function createuitab(title: string, contents: string, icon?: string): void;

declare function newtable(narray: number, nhash: number): table;

declare function cloneref(instance: Instance): Instance;

declare enum ToastType {
    None,
    Success,
    Warning,
    Error,
    Info
}

declare namespace syn {
    function queue_on_teleport(script: string): void;
    function clear_teleport_queue(): void;
    function get_thread_identity(): number;
    function set_thread_identity(identity: number): void;
    function protect_gui(target: Instance): void;
    function unprotect_gui(target: Instance): void;
    function trampoline_call(target: Callback, call_stack: table[], thread_options: table, ...args: any[]): [boolean, ...any[]];
    function toast_notification(options: { Type: ToastType, Duration?: number, Title: string, Content: string, IconColor?: Color3 }): void;
    function ipc_send(data: any): void;
}

