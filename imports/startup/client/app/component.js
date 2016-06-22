
import templateUrl from './view';
import '/imports/navigation/lib/client/component';
import '/imports/navigation/lib/client/service';
import { SetModule, init, Component, View, State, Inject, bootstrap, options, LocalInjectables } from 'angular2-now';
options({
  controllerAs: 'vm'
});
init();
export var $Component = {
  State: 'app',
  Name: 'app'
}
import {ModuleName} from '/imports/startup/client/module';
SetModule(ModuleName)
@State({
  name: $Component.State,
  abstract: true
})
@Component({
  selector: $Component.Name
})
@View({
  templateUrl: templateUrl
})
@Inject([
  '$q',
  'SidenavService',
  'NavigationService'
])
@LocalInjectables
export class AppComponent {
  constructor(){
    this.sidenav = this.SidenavService.Init();
    this.navigation = this.NavigationService.Init();
  }
}
bootstrap(AppComponent);
