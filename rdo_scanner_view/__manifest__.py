{
    'name': 'Basic Scanner view',
    'version': '1.0',
    'category': 'Tools',
    'summary': 'A module to create a scanner view',
    'description': 'This module adds a custom scanner view to Odoo.',
    'depends': ['base', 'web', 'barcodes'],
    'data': [
        'views/scanner_view.xml',
        'wizard/scanner_wizard.xml',
        'security/ir.model.access.csv',
    ],
    'assets': {
        'web.assets_backend': [
            
            # bootstrap
            ('include', 'web._assets_helpers'),
            'web/static/src/scss/pre_variables.scss',
            'web/static/lib/bootstrap/scss/_variables.scss',
            ('include', 'web._assets_bootstrap_backend'),

            # required for fa icons
            'web/static/src/libs/fontawesome/css/font-awesome.css',
            
            # include base files from framework
            ('include', 'web._assets_core'),

            'rdo_scanner_view/static/src/**/*',

        ],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
    'auto_upgrade': True
}
