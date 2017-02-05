(function() {
    'use strict';

    angular
        .module('bmSexMoveApp')
        .service("userService", ["Restangular", function(Restangular) { 

            function _logout(){
                 return Restangular.one("account").one("logout").post();
            };

            var service = {
                 logout: function () {
                    return _logout();
                }
            };

            return service;
        }]);
})();