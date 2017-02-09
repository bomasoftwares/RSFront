(function () {
    'use strict';

    angular.module('bmSexMoveApp').controller('userEditCtrl', ['$scope','tokenFactory', function ($scope, tokenFactory) {

        
        //Método de inicialização
        function init(){
            $scope.getUserData();
        }


        $scope.getUserData = function(){
            var userToken = tokenFactory.getUserToken();
            $scope.Model = JSON.parse(userToken);    
        };

        init();
    }]);
})();
