import {ModuleName} from '/imports/modules/forms/lib/client/module';
import templateUrl from './view';
import elements from '/imports/modules/forms/radio/lib/api/collection';
import {init,SetModule,State,Component,View,Inject,LocalInjectables} from 'angular2-now';

init();
SetModule(ModuleName);
@State({
    name: 'app.forms.radio',
    url: '/radio'
})
@Component({
    selector: 'meteor-forms-radio',
    templateUrl: templateUrl
})
class MeteorFormsRadioComponent {
    model = {};
    constructor(){
        this.elements = elements;
    }

    /*
        onSubmit
    */
    onSubmit = (form) => {
        console.log(form.model);
        alert(JSON.stringify(form.model), null, 2);
    }

}
