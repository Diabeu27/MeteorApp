import templateUrl from './view';
import {ModuleName} from '/imports/startup/client/module';
import {$Service as NavigationService} from './service';
import './directive';
import {init,SetModule,Component,View, Inject, LocalInjectables} from 'angular2-now';

init();
export var $Component = {
  Name: 'meteor-navigation',
  templateUrl: templateUrl
}
SetModule(ModuleName)
@Component({
  selector: $Component.Name
})
@View({
  templateUrl: templateUrl
})
@Inject([
  '$scope',
  'SidenavService',
  NavigationService.Name
])
@LocalInjectables
export class MeteorNavigation {
  constructor($scope){
    this.sidenav = this.SidenavService.Init();
  }
}
