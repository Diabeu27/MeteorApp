
import {ModuleName} from '/imports/modules/forms/lib/client/module';

import templateUrl from './view';
import {init, SetModule, State, Component, View, Inject, LocalInjectables} from 'angular2-now';
init();
SetModule(ModuleName);
@State({
  name: 'app.forms.checkbox',
  url: '/checkbox'
})
@Component({
  selector: 'meteor-forms-checkbox'
})
@View({
  templateUrl: templateUrl
})
@LocalInjectables
export class FormsCheckboxComponent {
  constructor(){

  }
}
