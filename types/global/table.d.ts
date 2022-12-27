declare function getrawmetatable(obect: unknown): LuaMetatable<unknown> | undefined;

declare function setrawmetatable(object: unknown, target: LuaMetatable<unknown>): void;

declare function setreadonly(table: object, value: boolean): void;

declare function setuntouched(table: object, value: boolean): void;

declare function isuntouched(table: object): boolean;

declare function makewritable(table: object): void;

declare function makereadonly(table: object): void;

declare function isreadonly(table: object): boolean;
