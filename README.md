# TS0601-_TZE200_mby4kbtq-Moes-Gas-Sensor

This is a custom converter that works in Zigbee2MQTT (until the the device is officially added) for Moes gas sensor.

Here is how you add the custom converter in Home Assistant using the Zigbee2MQTT addon:
1) Remove the device if it is already added in Zigbee2MQTT;
2) With a file editor (Studio Code Server etc.) add the js file in the folder config/zigbee2mqtt (the folder should already be there);
3) Open the addon Zigbee2MQTT and define the custom converter. See the picture and fill in the correct js file name you are using:
   ![image](https://github.com/Jtef/TS0601_TZE200_sgpeacqp/assets/6143681/e15c6e54-e918-4390-b162-1b7a38ff4d90)
  
4) Restart Zigbee2MQTT addon;
5) Start pairing the device.


Please note:
* Self test switch must be manually set to False if a test was performed;
* Self test result is always checking... (not sure why);
* Silence works for an alarm and not for the self test. Must be manually set to False after it is used;
* Fault alarm - unable to test it.

Enjoy!
