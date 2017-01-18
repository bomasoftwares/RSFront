(function () {
    'use strict';

    angular.module('bmSexMoveLoginApp') 
        .controller('loginCtrl',  ['$scope', 'loginService', 'messageFactory', '$location',
        function ($scope , loginService, message, location) {  

            function initializer(){
                $scope.isLoading = false;
            }

            $scope.login = function(form){

               $scope.isLoading = true;

               if (form && form.$valid) {
                   loginService.getToken($scope.Model.UserName, $scope.Model.Password).then(function(result){
                       message.addSuccessMessage('login feito com sucesso');
                       $scope.isLoading = false;
                       location.path('/users/home');

                   })
               }
                
            }

            initializer();
            
        }])
})();    
