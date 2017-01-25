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
    ])
    
    .config(['$routeProvider', 'RestangularProvider', '$httpProvider',
     function (routeProvider, RestangularProvider, httpProvider) {

            // Configurações Restangular
            RestangularProvider.setBaseUrl('http://dev-sexmoveapi.boma.com.br');
            RestangularProvider.setDefaultHeaders({ 'Content-Type': 'application/json' });

           
        }]);

})();