(function(){
    'use strict';

    angular.module('bmSexMoveLoginApp').controller('forgotPasswordCtrl', function ($scope){

    })

        .config(['$routeProvider', function (routeProvider){
            
            routeProvider.when('/account/forgotPassword',{
                templateUrl: '../../account/templates/forgotPassword.html',
                controller: 'forgotPasswordCtrl',
                name:'forgotPassword'
            });
        }]);
})();