(function () {
    'use strict';

    angular.module('bmSexMoveApp').controller('recoverPasswordCtrl', function ($scope) {

    })
        .config(['$routeProvider', function (routeProvider) {

            routeProvider.when('/recoverPassword/recover', {
                templateUrl: '../../register/templates/recoverPassword.html',
                controller: 'recoverPasswordCtrl',
                name: 'recoverPassword'
            });
        }]);
})();
