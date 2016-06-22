
import '/imports/ui/forms/types/lib/client/module';
import {init, SetModule} from 'angular2-now';

init();
export const ModuleName = 'Forms';
SetModule(ModuleName, [
  ,'formly'
  ,'FormsTypes'
  ,'ngMessages'
  ,'ngAria'
  ,'ngAnimate'
  ,'ngMaterial'
]).run((formlyValidationMessages) => {

  //formlyValidationMessages.addTemplateOptionValueMessage(name, prop, prefix, suffix, alternate);

  formlyValidationMessages.addTemplateOptionValueMessage('max', 'max', 'The max value allowed is', '', 'Too big');
  formlyValidationMessages.addTemplateOptionValueMessage('min', 'min', 'The min value allowed is', '', 'Too small');
  formlyValidationMessages.addTemplateOptionValueMessage('minlength', 'minlength', '', 'is the minimum length', 'Too short');
  formlyValidationMessages.addTemplateOptionValueMessage('maxlength', 'maxlength', '', 'is the maximum length', 'Too long');
  formlyValidationMessages.addTemplateOptionValueMessage('pattern', 'patternValidationMessage', '', '', 'Invalid Input');

  formlyValidationMessages.messages.required = ($viewValue, $modelValue, scope) => {
		if (scope.to.label)
			return scope.to.label + ' is required';
		else {
			return 'This field is required';
		}
  };
});
