(function () {
    'use strict';

    angular.module('bmSexMoveLoginApp').controller('recoverPasswordCtrl', function ($scope) {

    })
        .config(['$routeProvider', function (routeProvider) {

            routeProvider.when('/account/recoverPassword', {
                templateUrl: '../../account/templates/recoverPassword.html',
                controller: 'recoverPasswordCtrl',
                name: 'recoverPassword'
            });
        }]);
})();
