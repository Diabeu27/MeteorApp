import templateUrl from './view.html';
import AddCheckedClassName from '/imports/ui/forms/lib/client/helpers/add-checked-classname';

export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        templateUrl: templateUrl,
        name: 'checkbox',
        defaultOptions: {
            templateOptions: {
                theme: 'default',
                label: "Check me!",
                disabled: false
                //onChange:  Conflict with ngChange
            },
            // if hideExpression is set then it is not checked when appear
            expressionProperties: {
                'templateOptions.className': ($viewValue, $modelValue, scope) => {
                    return AddCheckedClassName($viewValue,scope).to.className;
                }
            },
            ngModelAttrs: {
                disabled: {
                    bound: 'ng-disabled'
                },
                ngChange: {
                    attribute: 'ng-change'
                },
                ngChecked: {
                    attribute: 'ng-checked'
                },
                ngFalseValue: {
                    attribute: 'ng-false-value'
                },
                mdIndeterminate: {
                    attribute: 'md-indeterminate'
                },
                mdNoInk: {
                    attribute: 'md-no-ink'
                },
                ngTrueValue: {
                    attribute: 'ng-true-value'
                }
            }
        },
        apiCheck: (check) => ({
            templateOptions: {
                theme: check.string,
                label: check.string,
                disabled: check.bool,
                ngChange: check.string.optional,
                ngChecked: check.bool.optional,
                mdNoInk: check.bool.optional
            }
        })
    });
};
