(function () {
    'use strict';

    // Internal modules
    angular.module('app.factories', [
        'toastr'          // Mensagens(angular-toastr)  - https://github.com/Foxandxss/angular-toastr 
    ]);

    angular.module('bmSexMoveApp', [

        // Angular Modules
        'ngRoute'         // Rotas do AngularJS - https://docs.angularjs.org/api/ngRoute
      , 'ngAnimate'

      // Internal modules
      , 'app.factories'

      // External modules
      , 'restangular'            // Restangular REST - https://github.com/mgonto/restangular
    //   , 'angular-loading-bar'    // Loading quando houver requisições (https://github.com/chieffancypants/angular-loading-bar)

      
    ])
    .config(['$routeProvider',  '$locationProvider', 'RestangularProvider', '$httpProvider',
     function (routeProvider, locationProvider, RestangularProvider, httpProvider) {


            // Configurações de interceptors http
            httpProvider.interceptors.push('httpInterceptorFactory');

            // Configurações Restangular
            RestangularProvider.setBaseUrl('http://dev-sexmoveapi.boma.com.br');
            RestangularProvider.setDefaultHeaders({ 'Content-Type': 'application/json' });

            // Configura barra de loading
            // cfpLoadingBarProvider.includeSpinner = true;
            // cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
            // // cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Custom Loading Message...</div>'; 

            locationProvider.html5Mode(true);
        }]);

})();