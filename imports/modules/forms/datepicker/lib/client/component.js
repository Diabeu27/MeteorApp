import templateUrl from './view';
import {ModuleName} from '/imports/modules/forms/lib/client/module';

import '/imports/modules/forms/datepicker/lib/both/date.collection';
import '/imports/modules/forms/datepicker/lib/both/collection';
import {init,SetModule,State,Component,View,Inject,LocalInjectables} from 'angular2-now';

init();
SetModule(ModuleName)
@State({
  name: 'app.forms.datepicker',
  url: '/datepicker'
})
@Component({
  selector: 'meteor-forms-datepicker'
})
@View({
  templateUrl: templateUrl
})
@LocalInjectables
export class FormsDatepickerComponent {
  constructor(){
  }
}
