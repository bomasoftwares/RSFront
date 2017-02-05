'use strict';

(function() {

    angular.module('app.factories')
    .factory('httpInterceptorFactory', ['$injector','$q', 'tokenFactory', 
    function($injector, $q, tokenFactory) {
            var requestInterceptor =  {
                request: function (config) {
                    var token = tokenFactory.getToken();

                    if(!token) window.location.url = "../login.html";

                    if(config.url.indexOf('sexmoveapi.boma.com.br') > 0){
                        var token = tokenFactory.getToken();
                        if(token) config.headers.Authorization = "Bearer "+token;
                    }

                    return config || $q.when(config);
                },

                response: function (response) {
                    
                    if(typeof(response.data.Success) != 'undefined' && response.data.Success === false) {
                    
                        if(typeof(response.data.Errors) != 'undefined' && response.data.Errors.length > 0) {
                            messageFactory.addErrorMessage(response.data.Errors);
                        }
                        else if(response.data.Message) {
                            messagesFactory.addErrorMessage(response.data.Message);
                        }
                        else {
                            messagesFactory.addErrorMessage('Erro ao processar sua requisição');
                        }

                        return $q.reject(response);
                    }

                    return response || $q.when(response);
                },
                responseError: function (response) {

                    if(response.status == 401)
                        window.location.href = "/";
                    
                    return $q.reject(response);
                }
            };

            return requestInterceptor;
    }]);

})();