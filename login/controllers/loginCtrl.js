(function () {
    'use strict';

    angular.module('bmSexMoveApp') 
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

        // Configurações de rotas relacionadas
        .config(['$routeProvider', '$locationProvider', function (routeProvider, locationProvider) {

            routeProvider.when('/', {
                templateUrl: 'login/templates/index.html',
                controller: 'loginCtrl',
                name: 'login'
            }).otherwise('/');
        }]);
})();    
