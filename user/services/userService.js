(function() {
    'use strict';

    angular
        .module('bmSexMoveApp')
        .service("userService", ["Restangular", function(Restangular) { 

            function _logout(){
                 return Restangular.one("account").one("logout").post();
            };

            function _getInfo(){
                return Restangular.one("account").one("userInfo").get();
            }

            var service = {
                 logout: function () {
                    return _logout();
                },
                getInfo: function(){
                    return _getInfo();
                }
            };

            return service;
        }]);
})();