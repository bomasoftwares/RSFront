(function () {
    'use strict';

    angular.module('bmSexMoveApp').controller('leftMenuCtrl',['tokenFactory','$location', 'messageFactory', '$scope', 'userService',
     function (tokenFactory, location, messageFactory, $scope, userService) {


        //Método de inicialização
        function init(){
                
        }

        $scope.logout = function(){
            userService.logout().then(function(response){
                tokenFactory.removeToken();
                window.location.href = "http://sexmove-dev.boma.com.br/login.html";        
            }).catch(function(response){
                messageFactory.addErrorMessage('Erro ao fazer logout');
            });
        };

        init();
    }]);


})();
