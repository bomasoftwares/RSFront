(function() {
    'use strict';

    angular
        .module('bmSexMoveApp')
        .service("loginService", ["$http", "Restangular","tokenFactory", function($http, Restangular, tokenFactory) {
            
            this.getToken = function(userName, password) {

                var content = 
                "grant_type=password"+
                "&username="+convertToFormUrlEncoded(userName)+
                "&password="+convertToFormUrlEncoded(password);
                
                return Restangular
                    .allUrl("token",Restangular.configuration.baseUrl+"/token")
                    .customPOST(content,"",{},{ 'Content-Type': 'application/x-www-form-urlencoded'})
                    .then(function(result){
                        tokenFactory.setToken(result.access_token);
                    }
                    , function(error){
                        throw error;
                    });
            }

            function convertToFormUrlEncoded(str) {
                    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
                        return '%' + c.charCodeAt(0).toString(16);
                    }).replace(/%20/g, "+");
            }
        }]);
})();