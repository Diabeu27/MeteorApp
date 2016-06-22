import TemplateUrl from './view';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setWrapper({
    name: 'InputWrapper',
    templateUrl: TemplateUrl
  });
}
