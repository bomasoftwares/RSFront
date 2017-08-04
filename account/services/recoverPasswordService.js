angular.module('bmSexMoveLoginApp').
service('recoverPasswordService', ["$http", "Restangular",function($http, Restangular){
    

    function _recoverPassword(email, passwordResetKey, newPassword){
        var model = {
            "Email": email,
            "PasswordResetKey": passwordResetKey ,
            "NewPassword": newPassword
        }
        return Restangular.all("users").all("resetPassword").post(model);
    }
    
    var service = {
        recoverPassword: function (email, passwordResetKey, newPassword) {
            return _recoverPassword(email, passwordResetKey, newPassword);
        }
    };

    return service;
}]);