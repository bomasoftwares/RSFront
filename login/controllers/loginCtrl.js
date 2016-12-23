(function () {
    'use strict';

    angular.module('sexmoveApp') 
        .controller('LoginCtrl', function ($rootScope , $scopej, loginService) {  
            $rootScope.appTitle = "Sex Move";

            
            
        })
        .config(['$routeProvider', '$locationProvider', function (routeProvider, locationProvider) {


            locationProvider.html5Mode(true);

            routeProvider.when('/', {
                templateUrl: 'login/templates/index.html',
                controller: 'LoginCtrl',
                name: 'login'
            }).otherwise({ redirectTo: "/" });

            routeProvider.when('/newRegister', {
                templateUrl: '../../register/templates/register.html',
                controller: 'LoginCtrl',
                name: 'newRegister'
            });
        }]);




})();    
