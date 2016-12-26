(function () {
    'use strict';

    angular.module('sexmoveApp') 
        .controller('LoginCtrl', function ($rootScope , $scope) {  
            
        })

        // Configurações de rotas relacionadas
        .config(['$routeProvider', '$locationProvider', function (routeProvider, locationProvider) {


            routeProvider.when('/', {
                templateUrl: 'login/templates/index.html',
                controller: 'LoginCtrl',
                name: 'login'
            }).otherwise({ redirectTo: "/" });

            
        }]);




})();    
