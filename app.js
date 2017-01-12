(function () {
    'use strict';

    angular.module('bmSexMoveApp', [
        'ngRoute'         // Rotas do AngularJS - https://docs.angularjs.org/api/ngRoute
      , 'ngAnimate'
      , 'restangular'     // Requisições REST - https://github.com/mgonto/restangular
      , 'toastr'          // Mensagens(angular-toastr)  - https://github.com/Foxandxss/angular-toastr 
      //, 'bmSexMoveApp.factories'

    ])
    .config(['$routeProvider',  '$locationProvider', 'RestangularProvider',
             
     function (routeProvider, locationProvider, RestangularProvider) {


            // Configurações de interceptors http
            //httpProvider.interceptors.push('httpInterceptorFactory');

            // Configurações Restangular
            RestangularProvider.setBaseUrl('http://dev-sexmoveapi.boma.com.br');
            RestangularProvider.setDefaultHeaders({ 'Content-Type': 'application/json' });

            locationProvider.html5Mode(true);
        }]);

})();