(function () {
    'use strict';

    angular.module('bmSexMoveApp').controller('headerCtrl',['tokenFactory', 'messageFactory', '$scope', 'userService',
     function (tokenFactory, messageFactory, $scope, userService) {

        var userToken = tokenFactory.getUserToken();
        $scope.user = {};
        $scope.filter = null;
        $scope.getUserInfo = function(){
            if(!userToken){
                userService.getInfo().then(function(response){
                    
                    var userData = {
                        Email : response.Email,
                        UserName : response.UserName
                    };
                    
                    tokenFactory.setUserToken(JSON.stringify(userData));
                    userToken = tokenFactory.getUserToken();
                    $scope.user = JSON.parse(userToken);    
                });
            }
            
            $scope.user = JSON.parse(userToken);    
        }

        $scope.logout = function(){
            $scope.logout = function(){
            tokenFactory.removeToken();
            window.location.href = "http://sexmove-dev.boma.com.br/login.html";        
        };
        }

        //Método de inicialização
        function init(){

            $scope.getUserInfo();

        }

        init();
    }]);


})();
