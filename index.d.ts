
interface IChannelBuildOptions {
    window: Window;
    origin: string;
    scope: string;
    onReady?: () => void;
}

interface IChannelCallOptions {
    method: string;
    params: any;
    success: (result:any) => void;
    error?: (err) => void;
}

interface ITransaction {
    complete(data:any): void;
    delayReturn(delayed: boolean);
    error(msg:string, description: string);
}

interface IChannel {
    call(options: IChannelCallOptions): void;
    bind(method: string, func:(transaction:ITransaction, data: any) => void): void;
}

interface IJSChannel {
    build(options: IChannelBuildOptions): IChannel;
}

declare module "jschannel" {
    export = Channel;
}

declare var Channel: IJSChannel;




