(function () {
    'use strict';

    angular.module('sexmoveApp').controller('registerCtrl', function ($scope) {

    })

        .config(['$routeProvider', function (routeProvider) {

            routeProvider.when('/register/new', {
                templateUrl: '../../register/templates/register.html',
                controller: 'registerCtrl',
                name: 'newRegister'
            });

            // routeProvider.when('/register/forgotPassword', {
            //     templateUrl: '../../register/templates/forgotPassword.html',
            //     controller: 'registerCtrl',
            //     name: 'forgotPassword'
            // });

            // routeProvider.when('/register/recoverPassword', {
            //     templateUrl: '../../register/templates/recoverPassword.html',
            //     controller: 'registerCtrl',
            //     name: 'recoverPassword'
            // });

            routeProvider.when('/register/terms', {
                templateUrl: 'terms/templates/index.html',
                controller: 'registerCtrl',
                name: 'myTerms'
            });
        }]);
})();
