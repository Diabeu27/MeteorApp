import templateUrl from './view';
import {ModuleName} from '/imports/modules/forms/lib/client/module';
import elements from '/imports/modules/forms/datepicker/api/collection';
import {init,SetModule,State,Component,View,LocalInjectables} from 'angular2-now';

init();
SetModule(ModuleName)
@State({
    name: 'app.forms.datepicker',
    url: '/datepicker'
})
@Component({
    selector: 'meteor-forms-datepicker',
    templateUrl: templateUrl
})
@LocalInjectables
export class FormsDatepickerComponent {
    constructor(){
        this.elements = elements;
    }
}
