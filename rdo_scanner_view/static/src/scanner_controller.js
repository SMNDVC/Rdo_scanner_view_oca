/** @odoo-module **/
import { Component, onMounted, useRef } from "@odoo/owl";
import { CustomBarcodeScanner } from "./custom_barcode_scanner";
import { registry } from "@web/core/registry";
import { standardFieldProps } from "@web/views/fields/standard_field_props"

export class ScannerController extends Component {
    static template = 'rdo_scanner_view.ScannerController';
    static components = {
        CustomBarcodeScanner,
    };
    static value = ''
    static props = {
        standardFieldProps,
    }
    
    constructor() {
        super(...arguments);
        this.onBarcodeScanned = this.onBarcodeScanned.bind(this);
    }
    
    updateValue(value) {
        this.props.record.update({ [this.props.name]: value });
    }

    onBarcodeScanned(ev) {
        console.log('Barcode scanned:', ev)
        const element = document.getElementById('scanned_value')
        const customInput = document.getElementById('customInput')
        if (element) {
            element.innerText = ev
            if (customInput) {
                customInput.value = ev;
            }
        }
        this.updateValue(ev)
    }

    showModal() {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.style.display = 'block';
            document.getElementById('customInput').focus();
        }
    }

    hideModal() {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    handleSaveChanges() {
        const inputValue = document.getElementById('customInput').value;
        const element = document.getElementById('scanned_value')
        if (element) {
            element.innerText = inputValue
        }
        this.hideModal();
        this.updateValue(inputValue)
    }
    
}

export const ScannerWidget = {    component: ScannerController ,};
registry.category("fields").add("rdo_scanner_widget", ScannerWidget);