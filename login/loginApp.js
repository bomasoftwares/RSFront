(function () {
    'use strict';

    // Internal modules
    angular.module('app.factories', [
        'toastr'          // Mensagens(angular-toastr)  - https://github.com/Foxandxss/angular-toastr 
    ]);

    angular.module('bmSexMoveLoginApp', [

        // Angular Modules
        'ngRoute'         // https://docs.angularjs.org/api/ngRoute
      , 'ngAnimate'

        // Internal modules
      , 'app.factories'

        // External modules
      , 'restangular'            // Restangular REST - https://github.com/mgonto/restangular
      , 'angular-loading-bar'    // Angular Loading Bar - https://github.com/chieffancypants/angular-loading-bar
    ])
    
    .config(['$routeProvider', 'RestangularProvider', '$httpProvider', 'cfpLoadingBarProvider',  
     function (routeProvider, RestangularProvider, httpProvider, cfpLoadingBarProvider) {

        // Configurações Restangular
        RestangularProvider.setBaseUrl('http://api-sexmove.azurewebsites.net');
        RestangularProvider.setDefaultHeaders({ 'Content-Type': 'application/json' });
            
        cfpLoadingBarProvider.includeSpinner = true;
        cfpLoadingBarProvider.latencyThreshold = 100;
           
     }]);

})();