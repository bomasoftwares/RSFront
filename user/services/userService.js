(function() {
    'use strict';

    angular
        .module('bmSexMoveApp')
        .service("userService", ["Restangular", function(Restangular) { 

            function _getInfo(){
                return Restangular.one("users").get();
            }

            var service = {
                getInfo: function(){
                    return _getInfo();
                }
            };

            return service;
        }]);
})();