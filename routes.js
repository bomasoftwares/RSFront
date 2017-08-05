(function() {
    'use strict';

    angular
        .module('bmSexMoveApp')
        .config(["$routeProvider", function($routeProvider) {
            
            $routeProvider

                //Rotas de usuários
                .when('/', {
                        templateUrl: 'user/templates/userHomeTemplate.html',
                        controller: 'userHomeCtrl',
                        name: 'index'
                }) 
                .when('/user/home', {
                        templateUrl: 'user/templates/userHomeTemplate.html',
                        controller: 'userHomeCtrl',
                        name: 'userHome'
                })
                .when('/user/edit', {
                        templateUrl: 'user/templates/userEditTemplate.html',
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