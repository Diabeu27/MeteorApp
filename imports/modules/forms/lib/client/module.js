// Forms
import '/imports/ui/forms/lib/client/module';
import {init,SetModule,options} from 'angular2-now';
options({controllerAs: 'vm'});

init();
export const ModuleName = 'ModuleForms';
SetModule(ModuleName,[
  'Forms'
]).config(() => {

});
