const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const legacy = require('zigbee-herdsman-converters/lib/legacy');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const tuya = require('zigbee-herdsman-converters/lib/tuya');
const e = exposes.presets;
const ea = exposes.access;

// const definitions: Definition[] = [
const definition = {
    fingerprint: tuya.fingerprint('TS0601', ['_TZE200_mby4kbtq']),
    model: 'TS0601_gas_sensor_1',
    vendor: 'TuYa',
    description: 'Gas sensor',
    fromZigbee: [tuya.fz.datapoints],
    toZigbee: [tuya.tz.datapoints],
    configure: tuya.configureMagicPacket,
    exposes: [e.gas(), tuya.exposes.selfTest(), tuya.exposes.selfTestResult(), tuya.exposes.faultAlarm(), tuya.exposes.silence()],
    meta: {
        tuyaDatapoints: [
            [1, 'gas', tuya.valueConverter.trueFalse0],
            [13, 'self_test', tuya.valueConverter.raw],
            [11, 'self_test_result', tuya.valueConverter.selfTestResult],
            [10, 'fault_alarm', tuya.valueConverter.trueFalse1],
            [16, 'silence', tuya.valueConverter.raw],
        ],
    },
};

module.exports = definition;