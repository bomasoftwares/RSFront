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
                .when('/users/search/:query', {
                        templateUrl: 'search/templates/searchResultsTemplate.html',
                        controller: 'searchResultsCtrl',
                        name: 'searchResults'
                })
                .when('/users/photos/gallery', {
                        templateUrl: 'photos/templates/galleryTemplate.html',
                        controller: 'photosGalleryCtrl',
                        name: 'userPhotosGallery'
                })
                .when('/users/videos/gallery', {
                        templateUrl: 'videos/templates/videosGalleryTemplate.html',
                        controller: 'videosGalleryCtrl',
                        name: 'userPhotosGallery'
                })
                .otherwise({
                        redirectTo: '/user/home'
                });;
        }]);
})();