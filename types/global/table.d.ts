/*
Table APIs
*/

declare function getrawmetatable(object: any): table | undefined;

declare function setrawmetatable(object: any, target: table): void;

declare function setreadonly(table: table, value: boolean): void;

declare function setuntouched(target: Callback | thread | table, value: boolean): void;

declare function isuntouched(target: Callback | thread | table): boolean;

declare function makewritable(table: table): void;

declare function makereadonly(table: table): void;

declare function isreadonly(table: table): boolean;

