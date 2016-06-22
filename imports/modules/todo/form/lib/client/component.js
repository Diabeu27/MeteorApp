import templateUrl from './view';
import {ModuleName} from '/imports/modules/todo/lib/client/module';
import TodoSchema from '/imports/modules/todo/api/schemas';
import TodoCollection from '/imports/modules/todo/api/collection';
import {init,SetModule,Component,View,Inject,LocalInjectables} from 'angular2-now';

init();
SetModule(ModuleName)
@Component({
  selector: 'meteor-todo-form',
  templateUrl: templateUrl,
  bind: {
    model: '='
  }
})
@LocalInjectables
export class MeteorTodoFromComponent {
  // valid
  valid = false;

  // name
  form = 'TodoForm';

  // edit
  id_ = null;

  // model
  model = {};

  // fields
  fields = [
    {
      type: 'input',
      key: 'name',
      templateOptions: {
        theme: 'default',
        type: 'text',
        minlength: 10,
        maxlength: 20,
        label: 'To do name',
        placeholder: 'Enter your to do action',
        required: true
      }
    },
    {
      type: 'input',
      key: 'description',
      templateOptions: {
        theme: 'default',
        type: 'text',
        minlength: 10,
        maxlength: 250,
        label: 'To do action description',
        placeholder: 'Enter your to do action description'
      }
    },
    {
      type: 'checkbox',
      key: 'completed',
      templateOptions: {
        theme: 'default',
        type: 'checkbox',
        className: 'md-primary',
        label: 'Completed',
        placeholder: 'Completed',
        mdIndeterminate: ''
      },
      hideExpression: function($viewValue, $modelValue, scope) {
        return !scope.model._id;
      }
    }
  ]

  constructor() {
    TodoCollection.attachSchema(TodoSchema);
  }

  Submit = () => {
    this.context = TodoSchema.namedContext("Todo");
    /*
    if (this.model._id){
      //this._id = this.model._id;
      //delete this.model._id;
    }
    */
    this._id = this.model._id;
    delete this.model._id;
    this.valid = this.context.validate(this.model);
    if (this.valid === true) {
      if (this._id)
        this.Update();
      else
        this.Insert(this.model);

      this.Reset();
    }
    else {
      console.log(this.context);
    }
  }

  Reset = () => {
    this.options.resetModel();
    delete this.model._id;
  }

  Insert = () => {
    TodoCollection.insert(this.model, (error, result) => {
      console.log(error);
      console.log(result);
    });
  }

  Update = () => {
    TodoCollection.update(this._id, {
      $set: this.model
    });
  }
}
