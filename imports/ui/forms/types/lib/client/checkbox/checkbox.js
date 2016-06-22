
import templateUrl from './view.html';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    templateUrl: templateUrl,
    name: 'checkbox',
    defaultOptions: {
      templateOptions: {
        theme: 'default',
        disabled: false,
        label: "Check me!",
        placeholder: "Check me!",
        checked: false,
        className: ''
      },
      // if hideExpression is set then it is not checked when appear
      expressionProperties: {
        'templateOptions.className': ($viewValue, $modelValue, scope) => {
          if ($modelValue === true){
            if (scope.to.className.indexOf("md-checked") == -1)
              scope.to.className = scope.to.className+' md-checked';
          }
          else {
            scope.to.className = scope.to.className.replace(" md-checked", "");
          }
          return scope.to.className;
        }
      },
      ngModelAttrs: {
        mdIndeterminate: {
          attribute: 'md-indeterminate'
        },
        mdNoInk: {
          attribute: 'md-no-ink'
        },
        ngTrueValue: {
          bound: 'ng-true-value'
        },
        ngFalseValue: {
          bound: 'ng-false-value'
        },
        ngChecked: {
          bound: 'ng-checked'
        },
        disabled: {
          bound: 'ng-disabled'
        },
      }
    }
  });
}
