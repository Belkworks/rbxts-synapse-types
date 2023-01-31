// websocket api's

declare class WebsocketClient {
    constructor(url_connection_string: string);
    readonly Url: string;
    Disconnect(): void;
    Connect(connection_info: table): void;
    Send(message: string, is_binary?: boolean): void;
    DataReceived: RBXScriptSignal<(payload: string, is_binary: boolean) => void>;
    ConnectionClosed: RBXScriptSignal<() => void>;
}

