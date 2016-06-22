
import template from './view.html';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    templateUrl: template
    ,name: 'select'
  });
}
