(function () {
    'use strict';

    angular.module('bmSexMoveApp').controller('registerCtrl', function ($scope) {

    })

        .config(['$routeProvider', function (routeProvider) {

            routeProvider.when('/register/new', {
                templateUrl: '../../register/templates/register.html',
                controller: 'registerCtrl',
                name: 'newRegister'
            });

            routeProvider.when('/register/recoveryPassword', {
                templateUrl: '../../register/templates/register.html',
                controller: 'registerCtrl',
                name: 'recoveryPassword'
            });

            routeProvider.when('/register/terms', {
                templateUrl: 'terms/templates/index.html',
                controller: 'registerCtrl',
                name: 'myTerms'
            });
        }]);
})();
