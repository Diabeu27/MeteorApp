import templateUrl from './view';
import {ModuleName} from '/imports/modules/forms/lib/client/module';
// Forms input examples
import '/imports/modules/forms/input/lib/client/component';
// Forms checkbox examples
import '/imports/modules/forms/checkbox/lib/client/component';
// Forms chips examples
import '/imports/modules/forms/chips/lib/client/component';
// Forms datepicker examples
import '/imports/modules/forms/datepicker/lib/client/component';
// Forms radio examples
import '/imports/modules/forms/radio/lib/client/component';
// Forms select examples
import '/imports/modules/forms/select/lib/client/component';

import {init,SetModule, State, Component, View, Inject, LocalInjectables} from 'angular2-now';
init();
SetModule(ModuleName);
@State({
    name: 'app.forms',
    url: '/forms'
})
@Component({
    selector: 'meteor-forms',
    templateUrl: templateUrl,
    providers: [
        '$mdSidenav'
    ]
})
@LocalInjectables
export class FormsComponent {
    constructor(){
    }
}
