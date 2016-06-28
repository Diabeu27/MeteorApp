import {ModuleName} from '/imports/forms/lib/client/formly/module';
import {init, SetModule} from "angular2-now";

init();
SetModule(ModuleName).run(['formlyConfig', (formlyConfig) => {
    formlyConfig.setType({
        name: 'wieldoEmail',
        extends: 'input',
        defaultOptions: {
            templateOptions: {
                type: 'email',
                label: 'Email'
            }
        }
    });
}]);
