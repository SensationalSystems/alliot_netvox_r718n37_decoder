function Decoder(bytes, port) {

    var params = {
        "bytes": bytes
    }

    // Handle current measurement
    if (bytes[2] === 0x01) {
        params.protocol_version = bytes[0]
        params.report_type = bytes[2]
        params.battery = bytes[3] / 10
        params.current1 = (bytes[4] << 8 | bytes[5])
        params.current2 = (bytes[6] << 8 | bytes[7])
        params.current3 = (bytes[8] << 8 | bytes[9])
    }

    // Handle startup message
    if (bytes[2] === 0x00) {
        params.protocol_version = bytes[0]
        params.report_type = bytes[2]
        params.software_version = bytes[3]
        params.hardware_version = bytes[4]
    }

    return params

}