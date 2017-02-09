'use strict';

(function() {

    angular.module('app.factories').factory('tokenFactory', ['$window', function($window) {

        var storage = $window.localStorage;
        var tokenName = 'sexMoveToken';
        var tokenUserName = 'sexMoveUser';

        var token = {
            setToken: function(value) {
                storage.setItem(tokenName, value);
            },

            getToken: function() {
                return storage.getItem(tokenName);
            },

            removeToken: function() {
                storage.removeItem(tokenName);  
                storage.removeItem(tokenUserName);  
            },
            setUserToken: function(userObject){
                storage.setItem(tokenUserName, userObject);
            },
            getUserToken: function(){
                return storage.getItem(tokenUserName);
            }
        };

        return token;

    }]);

})();