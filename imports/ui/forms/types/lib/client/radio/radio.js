import templateUrl from "./view";
export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        templateUrl: templateUrl,
        name: "radio",
        defaultOptions: {
            templateOptions: {
                theme: "default",
                disabled: false
            },
            ngModelAttrs: {
                mdNoInk: {
                    attribute: "md-no-ink"
                }
            }
        },
        apiCheck: (check) => ({
            templateOptions: {
                theme: check.string,
                disabled: check.bool,
                options: check.arrayOf(check.object)
            }
        })
    });
};
