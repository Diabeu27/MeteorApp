
import templateUrl from './view';

export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        templateUrl: templateUrl,
        name: 'input',
        wrapper: ['messagesWrapper','inputWrapper'],
        defaultOptions: {
            templateOptions: {
                type: 'text',
                disabled: false,
                required: false,
                maxlength: null,
                minlength: null,
                step: 'any',
            },
            ngModelAttrs: {
                mdMaxlength: {
                    bound: 'md-maxlength'
                },
                disabled: {
                    bound: 'ng-disabled'
                },
                pattern: {
                    bound: 'ng-pattern'
                }
            }
        }
    });
};
