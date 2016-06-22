
import TemplateUrl from './view';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setWrapper({
    name: 'MessagesWrapper',
    templateUrl: TemplateUrl
  })
}
