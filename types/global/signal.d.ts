// signal api's

declare function getconnections(signal: RBXScriptSignal, context?: number): RBXScriptConnection[];

declare function firesignal(signal: RBXScriptSignal, ...args: unknown[]): void;

declare function cfiresignal(signal: RBXScriptSignal, ...args: unknown[]): void;

declare function replicatesignal(signal: RBXScriptSignal, ...args: unknown[]): void;

declare function cansignalreplicate(signal: RBXScriptSignal): boolean;

declare function getsignalarguments(signal: RBXScriptSignal): unknown[];

declare function isconnectionenabled(connection: RBXScriptConnection): boolean;

declare function setconnectionenabled(connection: RBXScriptConnection, enable: boolean): void;

declare function isluaconnection(connection: RBXScriptConnection): boolean;

declare function iswaitingconnection(connection: RBXScriptConnection): boolean;

declare function getconnectionfunction(connection: RBXScriptConnection, return_raw?: boolean): unknown;

declare function getconnectionthread(connection: RBXScriptConnection): thread;

declare function isgamescriptconnection(connection: RBXScriptConnection): boolean;

