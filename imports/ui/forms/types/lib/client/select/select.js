import templateUrl from "./view.html";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        templateUrl: templateUrl,
        name: "select",
        wrapper: ["labelWrapper","messagesWrapper","inputWrapper"],
        defaultOptions: {
            templateOptions: {
                theme: "default"
            },
            ngModelAttrs: {
                disabled: {
                    attribute: "ng-disabled"
                },
                ariaLabel: {
                    attribute: 'aria-label'
                },
                mdOnOpen: {
                    statement: "md-on-open"
                },
                mdOnClose: {
                    statement: "md-on-close"
                },
                mdContainerClass: {
                    attribute: "md-container-class"
                }
            }
        },
        apiCheck: (check) => ({
            templateOptions: {
                theme: check.string,
                placeholder: check.string.optional,
                label: check.string.optional,
                required: check.bool.optional,
                disabled: check.bool.optional,
                ariaLabel: check.string.optional,
                mdOnOpen: check.func.optional,
                mdOnClose: check.func.optional,
                mdContainerClass: check.string.optional,
                options: check.arrayOf(check.object).optional,
                groups: check.arrayOf(check.object).optional
            }
        })
    });
};
