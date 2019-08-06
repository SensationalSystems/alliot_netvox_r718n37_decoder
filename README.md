# The Things Network decoder function for Netvox 3-phase current monitor

To use this:
* create a TTN application and register your devices using the TTN console
* in your application, choose "Payload Formats" from the navigation
* paste the decoder function into the textarea

The unit sends a few different payloads that are well documented. A startup packet is sent when the unit is first installed, or reboots. Current readings are sent every hour by default.

This code is MIT licensed, and it works fine in our testing. We don't claim it to be excellent, pull requests are encouraged!