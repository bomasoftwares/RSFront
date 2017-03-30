(function() {
    'use strict';

    angular
        .module('bmSexMoveApp')
        .config(["$routeProvider", function(routeProvider) {
            
            routeProvider
                .when('/user/home', {
                        templateUrl: 'user/templates/userHomeTemplate.html',
                        controller: 'userHomeCtrl',
                        name: 'userHome'
                })
                .when('/user/edit', {
                        templateUrl: 'user/templates/userNewsFeed.html',
                        controller: 'userEditCtrl',
                        name: 'userEdit'
                })
                .when('/user/newsfeed', {
                        templateUrl: 'user/templates/userNewsFeed.html',
                        controller: 'userNewsFeedCtrl',
                        name: 'userNewsFeed'
                })
                .otherwise({
                        redirectTo: '/user/home'
                });;
        }]);
})();