
import {ModuleName} from '/imports/modules/forms/lib/client/module';
import templateUrl from './view';
import elements from '/imports/modules/forms/checkbox/lib/api/collection';
import {init, SetModule, State, Component, View, Inject, LocalInjectables} from 'angular2-now';

init();
SetModule(ModuleName);
@State({
    name: 'app.forms.checkbox',
    url: '/checkbox'
})
@Component({
    selector: 'meteor-forms-checkbox',
    templateUrl: templateUrl,
    providers: [
        '$scope'
    ]
})
@LocalInjectables
export class FormsCheckboxComponent {
    model = {};
    allChecked = false;
    checkbox = {
        '1': true,
        '2': false,
        '3': false,
        '4': true,
    };

    constructor() {
        this.elements = elements;
    }

    /*
        Submit form
    */
    onSubmit = () => {
        console.log(this.model);
        alert(JSON.stringify(this.model), null, 2);
    }

    /*
        Check is all checked
    */
    isChecked = (x) => {
        this.allChecked = true;
        for (var key in this.checkbox) {
            if (this.checkbox[key] === false) {
                this.allChecked = false;
            }
        }
        return this.allChecked;
    }

    /*
        Unselect/Select all
    */
    toggleAll = () => {
        if (this.allChecked === false) {
            for (var key in this.checkbox) {
                this.checkbox[key] = true;
            }
            this.allChecked = true;
        }
        else {
            for (var key in this.checkbox) {
                this.checkbox[key] = false;
            }
            this.allChecked = false;
        }
    }

    /*
        ---
    */
    isIndeterminate = () => {
        console.log('isIndeterminate');
        if (this.allChecked === false) {
            for (var key in this.checkbox) {
                if (this.checkbox[key] === true) {
                    return true;
                }
            }
        }
    }
}
