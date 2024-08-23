/** @odoo-module **/
import { BarcodeScanner } from "@barcodes/components/barcode_scanner";

export class CustomBarcodeScanner extends BarcodeScanner {
    static template = 'rdo_scanner_view.CustomBarcodeScanner';
    async willStart() {
        // Get the list of media devices
        const devices = await navigator.mediaDevices.enumerateDevices();
        // Filter out the video input devices (cameras)
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        // Select the back camera (usually the last one)
        const backCamera = videoDevices[videoDevices.length - 1];

        // If a back camera is found, use it
        if (backCamera) {
            this.cameraId = backCamera.deviceId;
        }

        // Call the original willStart method to continue initialization
        await super.willStart();
    }

}