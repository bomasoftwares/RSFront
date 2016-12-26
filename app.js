(function () {
    'use strict';

    angular.module('sexmoveApp', [
        'ngRoute'
    ])
    
    .controller('sexmoveCtrl', function($scope){

    })

    // Controller principal da aplicação
     .config(['$routeProvider', '$locationProvider', function (routeProvider, locationProvider) {


            locationProvider.html5Mode(true);
        }]);

})();