
import { promise as Ping } from "ping";

export async function pingHost(host: string): Promise<boolean>
{
    const response = await Ping.probe(host);
    return response.alive;
}
