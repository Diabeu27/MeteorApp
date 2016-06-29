import {ModuleName} from '/imports/modules/forms/lib/client/module';
import templateUrl from './view';
import {init, SetModule, State, Component, View, LocalInjectables} from 'angular2-now';
init();

SetModule(ModuleName);
@State({
    name: 'app.forms.select',
    url: '/select'
})
@Component({
    selector: 'meteor-forms-select'
})
@View({
    templateUrl: templateUrl
})
@LocalInjectables
export class MeteorFormsSelectComponent {
    constructor(){
    }
}
