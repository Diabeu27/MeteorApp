export default [
    {
        title: '1. Theme',
        description: 'Checkbox with different theme',
        js: '',
        field: [{
            type: 'checkbox',
            key: 'mdcheckbox[1]',
            templateOptions: {
                theme: 'meteorApp'
            }
        }]
    },
    {
        title: '2. Label',
        description: 'Checkbox with label defined',
        js: '',
        field: [{
            type: 'checkbox',
            key: 'mdcheckbox[2]',
            templateOptions: {
                label: 'My custom label'
            }
        }]
    },
    {
        title: '3. ngTrueValue',
        description: 'Checkbox with defined true value',
        js: '',
        field: [{
            type: 'checkbox',
            key: 'mdcheckbox[3]',
            templateOptions: {
                ngTrueValue: "'i am real'",
                label: `My true value is "i am real"`
            }
        }]
    },
    {
        title: '4. ngFalseValue',
        description: 'Checkbox with defined false value',
        js: '',
        field: [{
            type: 'checkbox',
            key: 'mdcheckbox[4]',
            templateOptions: {
                ngFalseValue: "'i am not real'",
                label: 'My false value is "i am not real" '
            }
        }]
    },
    {
        title: '5. ngTrueValue and ngFalseValue',
        description: 'Checkbox with defined true and false value',
        js: '',
        field: [{
            type: 'checkbox',
            key: 'mdcheckbox[5]',
            templateOptions: {
                ngTrueValue: "'truevalue'",
                ngFalseValue: "'falsevalue'"
            }
        }]
    },
    {
        title: '6. mdNoInk',
        description: 'Checkbox without ink on click',
        js: '',
        field: [{
            type: 'checkbox',
            key: 'mdcheckbox[6]',
            templateOptions: {
                mdNoInk: true
            }
        }]
    },
    {
        title: '7. ngChange',
        description: 'Checkbox that set label to "You changed me" on change',
        js: '',
        field: [{
            type: 'checkbox',
            key: 'mdcheckbox[7]',
            templateOptions: {
                className: 'md-primary',
                label: 'Please, click and change me',
                ngChange: 'options.templateOptions["label"] = "You changed me"'
            }
        }]
    },
    {
        title: '8.ngChecked',
        description: 'Checkbox that is checked by default',
        js: '',
        field: [{
            type: 'checkbox',
            key: 'mdcheckbox[8]',
            templateOptions: {
                ngChecked: true,
                label: 'This checkbox is checked'
            }
        }]
    },
    {
        title: '9. className',
        description: 'Checkbox with primary material design class',
        js: '',
        field: [{
            type: 'checkbox',
            key: 'mdcheckbox[9]',
            templateOptions: {
                label: 'This checkbox contains md-primary class',
                className: 'md-primary',
                checked: true
            }
        }]
    },
    {
        title: '10. All in one checkbox :)',
        description: 'Checkbox with all template options',
        js: '',
        field: [{
            type: 'checkbox',
            key: 'mdcheckbox[10]',
            templateOptions: {
                theme: 'meteorApp',
                label: 'Checkbox with all template options, great !',
                className: 'md-primary',
                ngChecked: true,
                ngChange: 'options.templateOptions["label"] = "This is so much great idea !" ',
                ngFalseValue: "'This is false value'",
                ngTrueValue: "'This is true value'"
            }
        }]
    }
];
