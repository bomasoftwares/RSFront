(function () {
    'use strict';

    angular.module('bmSexMoveLoginApp') 
        .controller('loginCtrl',  ['$scope', 'loginService', 'messageFactory', '$location','tokenFactory',
        function ($scope , loginService, messageFactory, location, tokenFactory) {  

            var token = tokenFactory.getToken();
            var isAuthenticated = token != undefined && token != null;

            function initializer(){
                $scope.isLoading = false;

                if(token) window.location.href="/index.html";

            }

            $scope.login = function(form){

               $scope.isLoading = true;

               if (form && form.$valid) {
                   loginService.getToken($scope.Model.UserName, $scope.Model.Password).then(function(response){
                    
                    tokenFactory.setToken(response.access_token);
                    var token = tokenFactory.getToken();

                    if(token){
                        messageFactory.addSuccessMessage('Login feito com sucesso');
                        $scope.isLoading = false;
                        window.location.href="/index.html";
                    }
                    })
                    .catch(function(response){
                        if(response.status == "400" || response.data.error_description != undefined)
                            messageFactory.addErrorMessage('Usuário ou senha inválidos');
                        else{
                            messageFactory.addErrorMessage('Ocorreu umm erro inesperado: ');
                            console.log('Erro: '+response.data);
                        }

                        $scope.isLoading = false;
                    });
               }
                
            }

            initializer();
            
        }])
})();    
