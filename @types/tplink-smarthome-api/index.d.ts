
declare module "tplink-smarthome-api"
{
    export class Client
    {
        getDevice(options: {host: string}): Promise<Device>;
    }

    export class Device
    {
        setPowerState(value: boolean): Promise<boolean>;
    }
}
