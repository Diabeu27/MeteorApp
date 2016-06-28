import templateUrl from './view.html';
export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        templateUrl: templateUrl,
        name: 'select'
    });
};
