
import {ModuleName} from '/imports/modules/forms/lib/client/module';
import templateUrl from './view';
import elements from '/imports/modules/forms/chips/api/collection';
import {init,SetModule,State,Component,View,Inject,LocalInjectables} from 'angular2-now';

init();
SetModule(ModuleName)
@State({
    name: 'app.forms.chips',
    url: '/chips'
})
@Component({
    selector: 'meteor-forms-chips',
    templateUrl: templateUrl
})
@LocalInjectables

export class MeteorFormsChipsComponent {
    constructor() {
        this.elements = elements;
    }
}
