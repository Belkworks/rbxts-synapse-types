// input api's

declare function iswindowactive(): boolean;

declare function lockwindow(): void;

declare function unlockwindow(): void;

declare function iswindowlocked(): boolean;

declare function keypress(key: Enum.KeyCode): void;

declare function keypress(key: number): void;

declare function keyrelease(key: Enum.KeyCode): void;

declare function keyrelease(key: number): void;

declare function keyclick(key: Enum.KeyCode): void;

declare function mouse1press(x: number, y: number): void;

declare function mouse1press(): void;

declare function mouse1release(x: number, y: number): void;

declare function mouse1release(): void;

declare function mouse1click(): void;

declare function mouse2press(x: number, y: number): void;

declare function mouse2press(): void;

declare function mouse2release(x: number, y: number): void;

declare function mouse2release(): void;

declare function mouse2click(): void;

declare function mousescroll(forward: boolean, x: number, y: number): void;

declare function mousescroll(forward: boolean): void;

declare function mousemoverel(x: number, y: number, internal?: boolean): void;

declare function mousemoveabs(x: number, y: number, internal?: boolean): void;

declare function iskeydown(key: number): boolean;

declare function iskeytoggled(key: number): boolean;

declare function getmousestate(): boolean;

declare function setmousestate(new_state: boolean): void;

