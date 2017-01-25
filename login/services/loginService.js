(function() {
    'use strict';

    angular
        .module('bmSexMoveLoginApp')
        .service("loginService", ["$http", "Restangular","tokenFactory", function($http, Restangular, tokenFactory) {
            
            function _getToken(nickName, password){
                var content = 
                    "grant_type=password"+
                    "&username="+convertToFormUrlEncoded(nickName)+
                    "&password="+convertToFormUrlEncoded(password);
                    
                    return Restangular
                        .allUrl("token",Restangular.configuration.baseUrl+"/token")
                        .customPOST(content,"",{},{ 'Content-Type': 'application/x-www-form-urlencoded'});
            }

            var service = {
                 getToken: function (nickName, password) {
                    return _getToken(nickName, password);
                }
            }

            function convertToFormUrlEncoded(str) {
                    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
                        return '%' + c.charCodeAt(0).toString(16);
                    }).replace(/%20/g, "+");
            }

            return service;
        }]);
})();