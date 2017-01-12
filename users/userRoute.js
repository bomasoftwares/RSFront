(function() {
    'use strict';

    angular
        .module('bmSexMoveApp')
        .config(["$routeProvider", function($routeProvider) {
            
            $routeProvider
                .when('/users/home', {
                        templateUrl: 'users/templates/userHomeTemplate.html',
                        controller: 'userHomeCtrl',
                        name: 'userHome'
                    })
        }]);
})();