import templateUrl from './view.html';
export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        templateUrl: templateUrl,
        name: 'chips',
        wrapper: ['messagesWrapper'],
        defaultOptions: {
            defaultValue: [],
            templateOptions: {
                theme: 'default',
                disabled: false,
                placeholder: 'Chiaaaps'
            },
            ngModelAttrs: {
                secondaryPlaceholder: {
                    attribute: 'secondary-placeholder'
                },
                mdEnableChipEdit: {
                    attribute: 'md-enable-chip-edit'
                },
                mdMaxChips: {
                    attribute: 'md-max-chips'
                },
                mdOnAdd: {
                    statement: 'md-on-add'
                },
                mdOnRemove: {
                    statement: 'md-on-remove'
                },
                mdOnSelect: {
                    statement: 'md-on-select'
                },
                deleteHint:{
                    attribute: 'delete-hint'
                },
                deleteButtonLabel: {
                    attribute: 'delete-button-label'
                },
                mdSeparatorKeys: {
                    statement: 'md-separator-keys'
                }
            }
        }/*,
        apiCheck: (check) => ({
        })
        */
    });
};
