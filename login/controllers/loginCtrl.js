(function () {
    'use strict';

    angular.module('bmSexMoveLoginApp') 
        .controller('loginCtrl',  ['$scope', 'loginService', 'messageFactory', '$location','tokenFactory', '$window',
        function ($scope , loginService, messageFactory, location, tokenFactory, $window) {  

            var token = tokenFactory.getToken();
            var isAuthenticated = token != undefined && token != null;

            function initializer(){
                $scope.isLoading = false;

                if(token) window.location.href="/index.html";

            }

            $scope.login = function(form){
                   if (form && form.$valid) {
                   $scope.isLoading = true;
                   loginService.getToken($scope.Model.UserName, $scope.Model.Password).then(function(response){
                    
                    tokenFactory.setToken(response.access_token);
                    var token = tokenFactory.getToken();

                    if(token){
                        $scope.isLoading = false;
                        $window.location = "/index.html";
                    }
                    })
                    .catch(function(response){
                        if(response.status == "400" || response.data != undefined)
                            messageFactory.addErrorMessage('Usuário ou senha inválidos');
                        else{
                            messageFactory.addErrorMessage('Ocorreu umm erro inesperado');
                            console.log('Erro: '+response.data);
                        }

                        $scope.isLoading = false;
                    });
               }
                
            }

            initializer();
            
        }])
})();    
