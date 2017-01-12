(function(){
    'use strict';

    angular.module('bmSexMoveApp').controller('forgotPasswordCtrl', function ($scope){

    })

        .config(['$routeProvider', function (routeProvider){
            
            routeProvider.when('/forgotPassword/forgot',{
                templateUrl: '../../register/templates/forgotPassword.html',
                controller: 'forgotPasswordCtrl',
                name:'forgotPassword'
            });
        }]);
})();