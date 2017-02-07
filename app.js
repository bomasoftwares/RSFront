(function () {
    'use strict';

    // Internal modules
    angular.module('app.factories', [
        'toastr'          // Mensagens(angular-toastr)  - https://github.com/Foxandxss/angular-toastr 
    ]);
    angular.module('app.directives', []);
    

    angular.module('bmSexMoveApp', [

        // Angular Modules
        'ngRoute'         // Rotas do AngularJS - https://docs.angularjs.org/api/ngRoute
      , 'ngAnimate'

      // Internal modules
      , 'app.factories'
      , 'app.directives'

      // External modules
      , 'restangular'            // Restangular REST - https://github.com/mgonto/restangular
      , 'mgcrea.ngStrap'         // Angular-Strap -  http://mgcrea.github.io/angular-strap/
      , 'angular-loading-bar'    // Angular Loading Bar - https://github.com/chieffancypants/angular-loading-bar
      
    ])
    .config(['$routeProvider',  '$locationProvider', 'RestangularProvider', '$httpProvider', 'cfpLoadingBarProvider',  
     function (routeProvider, locationProvider, RestangularProvider, httpProvider, cfpLoadingBarProvider) {


            // Configurações de interceptors http
            httpProvider.interceptors.push('httpInterceptorFactory');

            // Configurações Restangular
            RestangularProvider.setBaseUrl('http://dev-sexmoveapi.boma.com.br');
            
            RestangularProvider.setDefaultHeaders({ 'Content-Type': 'application/json' });

            routeProvider.otherwise('/user/home');
            locationProvider.html5Mode(true);

            cfpLoadingBarProvider.includeSpinner = false;
        }]);

})();