import templateUrl from './view';
import {ModuleName} from '/imports/modules/forms/lib/client/module';

// Forms input
import '/imports/modules/forms/input/lib/client/component';

import {init,SetModule, State, Component, View, Inject, LocalInjectables} from 'angular2-now';
init();
SetModule(ModuleName);
@State({
  name: 'app.forms',
  url: '/forms'
})
@Component({
  selector: 'meteor-forms'
})
@View({
  templateUrl: templateUrl
})
@Inject([
  '$mdSidenav'
])
@LocalInjectables
export class FormsComponent {
  sidenav = {};

  constructor($mdSidenav){
  }
}
