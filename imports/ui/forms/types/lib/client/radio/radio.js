import templateUrl from "./view";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        templateUrl: templateUrl,
        name: "radio",
        defaultOptions: {
            templateOptions: {
                theme: "default"
            },
            ngModelAttrs: {
                mdNoInk: {
                    attribute: "md-no-ink"
                }
            }
        },
        apiCheck: (check) => ({
            templateOptions: {
                theme: check.string.optional,
                disabled: check.bool.optional,
                options: check.arrayOf(check.object).optional
            }
        })
    });
};
