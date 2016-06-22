
import {ModuleName} from '/imports/modules/forms/lib/client/module';

import templateUrl from './view';
import {init, SetModule, State, Component, View, Inject, LocalInjectables} from 'angular2-now';
init();
SetModule(ModuleName);
@State({
  name: 'work.forms.select',
  url: '/checkbox'
})
@Component({
  selector: 'wieldo-forms-select'
})
@View({
  templateUrl: templateUrl
})
@Inject(['LayoutService'])
@LocalInjectables
export class FormsSelectComponent {
  constructor(){

  }
}
