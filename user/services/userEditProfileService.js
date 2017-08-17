(function() {
    'use strict';

    angular.module('bmSexMoveApp').
    service('userEditProfileService', ["$http", "Restangular",function($http, Restangular){
        
        function _editUserProfile(profile){
            return Restangular.all("users").all("updateProfile").post(profile);
        }

        function _getUserProfile(){
            return Restangular.all("users").one("profile").get();
        }
        
        var service = {
            editUserProfile: function (profile) {
                return _editUserProfile(profile);
            },
            getUserProfile: function () {
                return _getUserProfile();
            }
        };

        return service;
    }]);
    
})();


