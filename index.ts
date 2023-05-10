
import { Client } from "tplink-smarthome-api";

import { log } from "./src/log";
import { secondsToMillis } from "./src/seconds_to_millis";
import { togglePlugIfNecessary } from "./src/toggle_plug";
import { stringFromDate } from "./src/util";

const client = new Client();

const lampIp = "192.168.0.7";
const plugIp = "192.168.0.35";

const interval = secondsToMillis(60);
const separator = '_______\n';

let resetCount = 0;
let lastResetDate: Date | null = null;

async function scheduleCheck()
{
    setTimeout(async () =>
    {
        try
        {
            const didToggle = await togglePlugIfNecessary(client, lampIp, plugIp);
            if (didToggle)
            {
                resetCount += 1;
                lastResetDate = new Date();
            }
        }
        catch (error)
        {
            log('Error: ', error);
        }

        log(`${resetCount} resets${lastResetDate == null ? "" : `, last reset on ${stringFromDate(lastResetDate)}`}; scheduling next check.`);
        console.log(separator);

        scheduleCheck();
    },
    interval);
}


log('scheduling first check.');
console.log(separator);
scheduleCheck();
