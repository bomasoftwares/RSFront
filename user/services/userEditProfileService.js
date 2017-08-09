angular.module('bmSexMoveLoginApp').
service('userEditProfileService', ["$http", "Restangular",function($http, Restangular){
    

    function _editUserProfile(profile){
      
        return Restangular.all("users").all("updateProfile").post(profile);
    }
    
    var service = {
        editUserProfile: function (profile) {
            return _editUserProfile(profile);
        }
    };

    return service;
}]);