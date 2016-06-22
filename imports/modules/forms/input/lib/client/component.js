
import templateUrl from './view';
import {ModuleName} from '/imports/modules/forms/lib/client/module';
import InputsCollection from '/imports/modules/forms/input/api/collection';
import {init, SetModule, State, Component, View, Inject, LocalInjectables} from 'angular2-now';

init();
SetModule(ModuleName);
@State({
  name: 'app.forms.input',
  url: '/input'
})
@Component({
  selector: 'meteor-forms-element'
})
@View({
  templateUrl: templateUrl
})
@LocalInjectables
export class FormsElementComponent {
  form = '';
  model = {
    firstname: 'Obi Wan'
  };
  elements = [];
  constructor(){
    this.elements = InputsCollection;
  }
}
