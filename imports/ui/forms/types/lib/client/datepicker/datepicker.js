
import templateUrl from './view';
import './style';
export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        name: 'datepicker',
        templateUrl: templateUrl,
        wrapper: ['messagesWrapper'],
        defaultOptions: {
            templateOptions: {
                theme: 'default',
                disabled: false,
                placeholder: "Enter date"
            },
            ngModelAttrs: {
              placeholder: {
                  attribute: 'md-placeholder'
              },
              disabled: {
                  bound: 'ng-disabled'
              },
              MdOpenOnFocus: {
                  bound: 'md-open-on-focus'
              },
              MdMinDate: {
                  bound: 'md-min-date'
              },
              MdMaxDate: {
                  bound: 'md-max-date'
              },
              MdDateFilter: {
                  bound: 'md-date-filter'
              },
            }
        }
    });
};
