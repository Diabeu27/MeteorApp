export default [
    {
        title: 'Default',
        description: 'Select with typical options',
        js: '',
        field: [{
            type: 'select',
            key: 'select[1]',
            templateOptions: {
                theme: 'meteor',
                ariaLabel: 'Aria label when no label or placeholder',
                options: [
                    {name: 'First', ngValue: 'First value'},
                    {name: 'Second', ngValue: 'Second value'},
                    {name: 'Third', ngValue: 'Third value'}
                ]
            }
        }]
    },
    {
        title: 'Groups',
        description: 'Select with grouped options',
        js: '',
        field: [{
            type: 'select',
            key: 'select[2]',
            templateOptions: {
                theme: "meteor",
                ariaLabel: 'Aria label when no label or placeholder',
                groups: [
                    {
                        label: 'Group 1',
                        options: [
                            {name: 'First', ngValue: 'First value'},
                            {name: 'Second', ngValue: 'Second value'},
                            {name: 'Third', ngValue: 'Third value'}
                        ]
                    }
                ]
            }
        }]
    },
    {
        title: 'Placeholder',
        description: 'Select with defined placeholder',
        js: '',
        field: [{
            type: 'select',
            key: 'select[3]',
            templateOptions: {
                theme: "meteor",
                placeholder: "Select with placeholder",
                //multiple: '',
                groups: [
                    {
                        label: 'Group 1',
                        options: [
                            {name: 'First', ngValue: 'First value'},
                            {name: 'Second', ngValue: 'Second value'},
                            {name: 'Third', ngValue: 'Third value'}
                        ]
                    }
                ]
            }
        }]
    },
    {
        title: 'Label',
        description: 'Select with defined label',
        js: '',
        field: [{
            type: 'select',
            key: 'select[4]',
            templateOptions: {
                theme: "meteor",
                label: "Select with label",
                //multiple: '',
                groups: [
                    {
                        label: "Group 1",
                        options: [
                            {name: 'First', ngValue: 'First value'},
                            {name: 'Second', ngValue: 'Second value'},
                            {name: 'Third', ngValue: 'Third value'}
                        ]
                    }
                ]
            }
        }]
    },
    {
        title: 'Label and placeholder',
        description: 'See a difference between label and placeholder',
        js: '',
        field: [{
            type: 'select',
            key: 'select[7]',
            templateOptions: {
                required: true,
                label: "Birthday",
                placeholder: "I am placeholder",
                groups: [
                    {
                        label: "Group 1",
                        options: [
                            {name: 'First', ngValue: 'First value'},
                            {name: 'Second', ngValue: 'Second value'},
                            {name: 'Third', ngValue: 'Third value'}
                        ]
                    }
                ]
            }
        }]
    },
    {
        title: 'Required',
        description: 'Select is required',
        js: '',
        field: [{
            type: 'select',
            key: 'select[5]',
            templateOptions: {
                required: true,
                label: "Birthday",
                groups: [
                    {
                        label: "Group 1",
                        options: [
                            {name: 'First', ngValue: 'First value'},
                            {name: 'Second', ngValue: 'Second value'},
                            {name: 'Third', ngValue: 'Third value'}
                        ]
                    }
                ]
            }
        }]
    },
    {
        title: 'Disabled',
        description: 'Select is disabled',
        js: '',
        field: [{
            type: 'select',
            key: 'select[6]',
            templateOptions: {
                disabled: true,
                label: "I am disabled",
                groups: [
                    {
                        label: "Group 1",
                        options: [
                            {name: 'First', ngValue: 'First value'},
                            {name: 'Second', ngValue: 'Second value'},
                            {name: 'Third', ngValue: 'Third value'}
                        ]
                    }
                ]
            }
        }]
    },
    {
        title: "mdContainerClass",
        description: "With container class '.meteorApp'",
        js: "",
        field: [{
            type: "select",
            key: "select[8]",
            templateOptions: {
                required: true,
                label: "Birthday",
                placeholder: "I am placeholder",
                mdContainerClass: 'meteorApp',
                groups: [
                    {
                        label: "Group 1",
                        options: [
                            {name: 'First', ngValue: 'First value'},
                            {name: 'Second', ngValue: 'Second value'},
                            {name: 'Third', ngValue: 'Third value'}
                        ]
                    }
                ]
            }
        }]
    },
    {
        title: "md-on-open",
        description: "Alert on open",
        js: "",
        field: [{
            type: "select",
            key: "select[9]",
            templateOptions: {
                required: true,
                label: "Birthday",
                placeholder: "I am placeholder",
                groups: [
                    {
                        label: "Group 1",
                        options: [
                            {name: 'First', ngValue: 'First value'},
                            {name: 'Second', ngValue: 'Second value'},
                            {name: 'Third', ngValue: 'Third value'}
                        ]
                    }
                ],
                mdOnOpen: () => {
                    alert('i am opened');
                }
            }
        }]
    },
    {
        title: "md-on-close",
        description: "Alert after close",
        js: "",
        field: [{
            type: "select",
            key: "select[10]",
            templateOptions: {
                required: true,
                label: "Birthday",
                placeholder: "I am placeholder",
                groups: [
                    {
                        label: "Group 1",
                        options: [
                            {name: 'First', ngValue: 'First value'},
                            {name: 'Second', ngValue: 'Second value'},
                            {name: 'Third', ngValue: 'Third value'}
                        ]
                    }
                ],
                mdOnClose: () => {
                    alert('i am closed');
                }
            }
        }]
    }

];
