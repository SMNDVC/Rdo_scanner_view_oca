/** @odoo-module **/

import { registry } from "@web/core/registry";
import { ScannerController } from "@rdo_scanner_view/scanner_controller";

const ScannerView = {
    type: "scanner",
    display_name: "Scanner",
    icon: "fa fa-picture-o",
    multiRecord: true,
    Controller: ScannerController,
};

registry.category("views").add("scanner", ScannerView);
