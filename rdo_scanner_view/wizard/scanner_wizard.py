from odoo import fields, models, api

class ScannerWizard(models.TransientModel):
    _name = 'scanner.wizard'
    _description = 'Scanner Wizard'

    scanner_component = fields.Char()
    value = fields.Char()

    res_model = fields.Char()
    res_id = fields.Integer()
    res_field = fields.Char()

    @api.model
    def default_get(self, fields_list):
        res = super(ScannerWizard, self).default_get(fields_list)
        res_model = self.env.context.get('default_res_model')
        res_id = self.env.context.get('default_res_id')
        res_field = self.env.context.get('default_res_field')

        res.update({
            'res_model': res_model,
            'res_id': res_id,
            'res_field': res_field,
        })

        return res

        

    def process_scanner_data(self):
        res_model = self.env.context.get('default_res_model')
        res_id = self.env.context.get('default_res_id')
        res_field = self.env.context.get('default_res_field')

        record = self.env[res_model].browse(res_id)
        if record.exists():
            record.write({res_field: self.value})
        return True
