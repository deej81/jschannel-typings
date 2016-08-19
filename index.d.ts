
declare interface IChannelBuildOptions {
    window: Window;
    origin: string;
    scope: string;
    onReady?: () => void;
}

declare interface IChannelCallOptions {
    method: string;
    params: any;
    success: (result:any) => void;
    error?: (err) => void;
}

declare interface IChannelBindOptions {
    method: string;
    func:(transaction:ITransaction, data: any) => void;
}

declare interface ITransaction {
    complete(data:any): void;
    delayReturn(delayed: boolean);
    error(msg:string, description: string);
}

export interface IChannel {
    call(options: IChannelCallOptions): void;
    bind(options: IChannelBindOptions): void;
}

declare interface IJSChannel {
    build(options: IChannelBuildOptions): IChannel;
}

export var Channel: IJSChannel;




