(function () {
    'use strict';

    angular.module('bmSexMoveApp').controller('leftMenuCtrl',['tokenFactory','$location', 'messageFactory', '$scope', 'userService',
     function (tokenFactory, location, messageFactory, $scope, userService) {

        var userToken = tokenFactory.getUserToken();
        $scope.user = {};
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

        //Método de inicialização
        function init(){

            $scope.getUserInfo();
        }

        $scope.logout = function(){
            tokenFactory.removeToken();
            window.location.href = "http://sexmove-preview.azurewebsites.net/login.html";        
        };

        init();
    }]);


})();
