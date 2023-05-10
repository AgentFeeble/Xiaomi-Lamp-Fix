
export function stringFromDate(date: Date): string
{
    const year = date.getFullYear();
    const month = padNumber(date.getMonth() + 1, 2);
    const day = padNumber(date.getDate(), 2);

    const hour = padNumber(date.getHours(), 2);
    const minute = padNumber(date.getMinutes(), 2);
    const second = padNumber(date.getSeconds(), 2);
    const milli = padNumber(date.getMilliseconds(), 3);

    return `${year}/${month}/${day} ${hour}:${minute}:${second}.${milli}`;
}

export function padNumber(value: number, maxLength: number): string
{
    return `${value}`.padStart(maxLength, '0');
}
