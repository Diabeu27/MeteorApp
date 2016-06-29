export default [
    {
        title: 'Default',
        description: 'Default radio option',
        js: '',
        field: [{
            type: 'radio',
            key: 'radio[1]',
            templateOptions: {
                theme: 'meteor',
                options: [
                    {label: 'First', ngValue: 'First value'},
                    {label: 'Second', ngValue: 'Second value'},
                    {label: 'Third', ngValue: 'Third value'}
                ]
            }
        }]
    },
    {
        title: 'Class changed',
        description: 'Radio options with second class md-primary',
        js: '',
        field: [{
            type: 'radio',
            key: 'radio[2]',
            templateOptions: {
                theme: 'meteor',
                options: [
                    {label: 'First', ngValue: 'First value'},
                    {label: 'Second', ngValue: 'Second value', className: 'md-primary'},
                    {label: 'Third', ngValue: 'Third value'}
                ]
            }
        }]
    },
    {
        title: 'Option disabled',
        description: 'Radio options with second disabled',
        js: '',
        field: [{
            type: 'radio',
            key: 'radio[3]',
            templateOptions: {
                theme: 'meteor',
                options: [
                    {label: 'First', ngValue: 'First value'},
                    {label: 'Second', ngValue: 'Second value', className: 'md-primary', ngDisabled: true},
                    {label: 'Third', ngValue: 'Third value'}
                ]
            }
        }]
    },
    {
        title: 'ng-class',
        description: 'Radio options with ng-class with md-primary in title "First" option',
        js: '',
        form: 'form[4]',
        field: [{
            type: 'radio',
            key: 'radio[4]',
            templateOptions: {
                theme: 'meteor',
                options: [
                    {label: 'First', ngValue: 'First value', ngClass: (option) => {
                        console.log('ngClass executed');
                        if (option.label == 'First')
                            return 'md-primary';
                    }},
                    {label: 'Second', ngValue: 'Second value', className: 'md-primary'},
                    {label: 'Third', ngValue: 'Third value'}
                ]
            }
        }]
    }
];
