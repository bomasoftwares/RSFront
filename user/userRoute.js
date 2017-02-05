(function() {
    'use strict';

    angular
        .module('bmSexMoveApp')
        .config(["$routeProvider", function($routeProvider) {
            
            $routeProvider
                .when('/user/home', {
                        templateUrl: 'user/templates/userHomeTemplate.html',
                        controller: 'userHomeCtrl',
                        name: 'userHome'
                    });
                
        }]);
})();