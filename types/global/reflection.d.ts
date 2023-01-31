//Reflection APIs

declare function setscriptable(instance: Instance, property_name: string, scriptable: boolean): boolean;

declare function gethiddenproperty(instance: Instance, property_name: string): unknown;

declare function sethiddenproperty(instance: Instance, property_name: string, value: unknown): void;

declare function getproperties(instance: Instance): Record<string, unknown>;

declare function gethiddenproperties(instance: Instance): Record<string, unknown>;

declare function getpcdprop(instance: TriangleMeshPart): [string, string];

declare function getcallbackmember(instance: Instance, property: string, return_raw?: boolean): unknown;

declare function geteventmember(instance: Instance, event_name: string): RBXScriptSignal;

declare function getrendersteppedlist(): Callback[];

