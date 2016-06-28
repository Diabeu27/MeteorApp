import wrappers from './wrappers';
import types from './types';
import {init,SetModule} from 'angular2-now';

init();
export const ModuleName = 'FormsTypes';
SetModule(ModuleName,[]).config((formlyConfigProvider) => {
    // Set wrappers
    _.each(wrappers, (wrappers) => {
        wrappers(formlyConfigProvider);
    });
    // Set types
    _.each(types, (types) => {
        types(formlyConfigProvider);
    });
}).run(() => {
});
