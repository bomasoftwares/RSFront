(function () {
    'use strict';

    angular.module('sexmoveApp').controller('recoverPasswordCtrl', function ($scope) {

    })
        .config(['$routeProvider', function (routeProvider) {

            routeProvider.when('/recoverPassword/recover', {
                templateUrl: '../../register/templates/recoverPassword.html',
                controller: 'recoverPasswordCtrl',
                name: 'recoverPassword'
            });
        }]);
})();
