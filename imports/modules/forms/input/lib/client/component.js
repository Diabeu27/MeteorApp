import templateUrl from "./view";
import {ModuleName} from "/imports/modules/forms/lib/client/module";
import InputsCollection from "/imports/modules/forms/input/lib/api/collection";
import submit from "/imports/modules/forms/lib/client/helpers/on-submit";
import {init, SetModule, State, Component, LocalInjectables} from "angular2-now";

init();
SetModule(ModuleName);
@State({
    name: "app.forms.input",
    url: "/input"
})
@Component({
    selector: "meteor-forms-element",
    templateUrl: templateUrl
})
@LocalInjectables
export class FormsElementComponent {
    form = "inputForm";
    model = {
        firstname: "Obi Wan"
    };
    elements = [];
    options = {
        formState: {
            disabled: true
        }
    };
    constructor(){
        this.elements = InputsCollection;
    }
    onSubmit = (name) => {
        submit(name, this.elements);
    }
}
