(function(){
    'use strict';

    angular.module('bmSexMoveApp').controller('forgotPasswordCtrl', function ($scope){

    })

        .config(['$routeProvider', function (routeProvider){
            
            routeProvider.when('/register/forgotPassword',{
                templateUrl: '../../register/templates/forgotPassword.html',
                controller: 'forgotPasswordCtrl',
                name:'forgotPassword'
            });
        }]);
})();