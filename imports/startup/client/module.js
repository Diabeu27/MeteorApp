import './core';
import './routing';

// Module Forms
import '/imports/modules/forms/lib/client/module';
import '/imports/modules/forms/lib/client/component';
// Sidenav
import '/imports/ui/sidenav/lib/client/service';
// Module To do
import '/imports/modules/todo/lib/client/module';
import '/imports/modules/todo/lib/client/component';

import {init, SetModule, options} from 'angular2-now';

// initialize
export const ModuleName = 'app';
init();
SetModule(ModuleName,[
  'Core',
  'Routing',
  'ngMaterial',

  'ModuleForms',
  'Todo',
  'Sidenav'
])
.config(($locationProvider, $mdThemingProvider, $sceProvider) => {
	$mdThemingProvider.theme('meteor');
	$mdThemingProvider.setDefaultTheme('default');
	$locationProvider.html5Mode(true);
	$sceProvider.enabled(false);
})
.run(($rootScope, $state) => {
  $rootScope.$on("$stateChangeError", (event, toState, toParams, fromState, fromParams, error) => {
  });
  $rootScope.$on("$stateChangeStart", (event, toState, toParams, fromState, fromParams) => {
  });
})
