'use strict';

(function() {

    angular.module('app.factories').factory('tokenFactory', ['$window', function($window) {

        var storage = $window.localStorage;
        var tokenName = 'sexMoveToken';

        var token = {
            setToken: function(value) {
                storage.setItem(tokenName, value);
            },

            getToken: function() {
                return storage.getItem(tokenName);
            },

            removeToken: function() {
                storage.removeItem(tokenName);  
            }
        };

        return token;

    }]);

})();