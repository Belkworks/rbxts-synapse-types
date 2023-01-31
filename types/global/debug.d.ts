declare namespace debug {
	function getupvalues(fi: Callback | number): defined[];

	function getupvalue(fi: Callback | number, upvalue: number): unknown | undefined;

	function setupvalue(fi: Callback | number, upvalue: number, value: unknown): void;

	function getconstants(f: Callback | number, pseudo_indices?: boolean): defined[];

	function getconstant(f: Callback | number, index: number): unknown;

	function setconstant(f: Callback | number, index: number, value: unknown): void;

	function getmetatable(object: unknown): LuaMetatable<unknown> | undefined;

	function setmetatable(object: unknown, target: LuaMetatable<unknown>): void;

	function getregistry(): Record<string, unknown> & unknown[];

	function getinfo(f: Callback | number, what?: string): defined;

}