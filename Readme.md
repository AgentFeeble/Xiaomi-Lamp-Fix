# Xiaomi Bedside Lamp 2 Fix

I have this nifty [Xiaomi smart lamp](https://www.mi.com/global/product/mi-bedside-lamp-2/), a pretty cool lamp which comes factory fitted with an annoying glitch. It has this habit of randomly ditching my Wi-Fi party, and the only fix is a reboot, reducing it to a regular old lamp from the dark ages. Ain't nobody got time to push lamp buttons.

Enter my trusty sidekick, the [TP-Link smart plug](https://www.tp-link.com/za/home-networking/smart-plug/hs100/). This little guy is here to take care of the rebooting shenanigans for me.

This project will ping the lamp every minute, and if it doesn't respond, use the tplink-smarthome-api to restart it. The lamp and plug IP addresses have been hard coded because I don't need the headache of trying to figure out how to resolve them dynamically.
