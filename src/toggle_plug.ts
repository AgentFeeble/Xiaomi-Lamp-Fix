
import { Client } from "tplink-smarthome-api";

import { delay } from "./delay";
import { log } from "./log";
import { pingHost } from "./ping";
import { secondsToMillis } from "./seconds_to_millis";

/// Returned promise resolves to `true` if the plug was toggled
export async function togglePlugIfNecessary(client: Client, lampIp: string, plugIp: string)
{
    log(`checking availability of lamp.`);
    const isAvailable = await pingHost(lampIp);
    log(`lamp ${isAvailable ? "is available." : "is not available."}`);

    if (!isAvailable)
    {
        await togglePlug(client, plugIp);
        return true;
    }
    return false;
}

async function togglePlug(client: Client, plugIp: string)
{
    const toggleDelay = secondsToMillis(2);

    log('toggling plug off and on.');
    const device = await client.getDevice({host: plugIp});

    log('retrieved plug, about to toggle off.');
    await device.setPowerState(false);
    log('device powered off.');

    await delay(toggleDelay);

    log('about to toggle back on.');
    await device.setPowerState(true);
    log('device powered on.');
}
