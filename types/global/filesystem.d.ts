declare function readfile(path: string): string;

declare function readfileasync(path: string): string;

declare function writefile(path: string, content: string): void;

declare function writefileasync(path: string, content: string): void;

declare function appendfile(path: string, content: string): void;

declare function appendfileasync(path: string, content: string): void;

declare function loadfile(path: string): LuaTuple<[Callback?, string?]>;

declare function loadfileasync(path: string): LuaTuple<[Callback?, string?]>;

declare function listfiles(folder?: string): string[];

declare function isfile(path: string): boolean;

declare function isfolder(path: string): boolean;

declare function makefolder(path: string): boolean;

declare function delfolder(path: string): void;

declare function getsynasset(path: string): string;


type SaveInstanceOptions = {
    FileName?: string;
    IgnoreArchivable?: boolean;
    SavePlayerCharacters?: boolean;
    SavePlayers?: boolean;
    DisableCompression?: boolean;
    Decompile?: boolean;
    DecompileJobless?: boolean;
    SaveNonCreatable?: boolean;
    NilInstances?: boolean;
    CopyToClipboard?: boolean;
    IgnoreList?: Instance[];
};

declare function saveinstance(instance: Instance | Record<string, unknown>, options?: SaveInstanceOptions): boolean;

declare function saveplace(options?: SaveInstanceOptions): boolean;

