
import { stringFromDate } from "./util";

export function log(...args: any[])
{
    console.log(`[${stringFromDate(new Date())}]`, ...args);
}
