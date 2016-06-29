
export default [
    {
        title: '1. Placeholder',
        description: 'Chips with placeholder defined',
        js: '',
        field: [{
            type: 'chips',
            key: 'chips[1]',
            defaultValue: [
                'First','Second','Third'
            ],
            templateOptions: {
                placeholder: 'test'
            }
        }]
    },
    {
        title: '2. Secondary placeholder',
        description: 'Chips with secondary placeholder defined',
        js: '',
        field: [{
            type: 'chips',
            key: 'chips[2]',
            defaultValue: [
                'My','new','car'
            ],
            templateOptions: {
                secondaryPlaceholder: 'My secondary placeholder'
            }
        }]
    },
    {
        title: '3. Max chips',
        description: 'Limited chips by 5',
        js: '',
        form: 'form',
        field: [{
            type: 'chips',
            key: 'chips[3]',
            defaultValue: [
                'My','new','car'
            ],
            name: 'Limited',
            templateOptions: {
                mdMaxChips: 5
            },
            validation: {
                messages: {
                    mdMaxChips: () => {
                        return 'Max chips exceed';
                    }
                }
            }
        }]
    },
    {
        title: '2. Secondary placeholder',
        description: 'Chips with secondary placeholder defined',
        js: '',
        field: [{
            type: 'chips',
            key: 'chips[2]',
            defaultValue: [
                'My','new','car'
            ],
            templateOptions: {
                secondaryPlaceholder: 'My secondary placeholder'
            }
        }]
    }
];
