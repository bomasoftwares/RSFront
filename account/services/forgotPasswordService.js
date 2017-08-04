angular.module('bmSexMoveLoginApp').
service('forgotPasswordService', ["$http", "Restangular",function($http, Restangular){
    

    function _forgotPassword(email){
        var model = {
            "Email": email 
        }
        return Restangular.all("users").all("forgotPassword").customPOST(model);
    }
    
    var service = {
        forgotPassword: function (email) {
            return _forgotPassword(email);
        }
    };

    return service;
}]);