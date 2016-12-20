(function () {
    'use strict';

    angular.module('sexmoveApp', [
        'ngRoute'
    ])
    
    .controller('sexmoveCtrl', function($scope){

    })

    // Controller principal da aplicação
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