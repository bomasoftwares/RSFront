(function () {
    'use strict';

    // // Internal modules
    angular.module('app.factories', [
        'toastr'          // Mensagens(angular-toastr)  - https://github.com/Foxandxss/angular-toastr 
    ]);

    angular.module('newAccountApp',
    [
        'restangular'
        ,'app.factories'
    ])
    .service('newAccountService', ["$http","$q","Restangular","tokenFactory", "messageFactory", function($http, $q, Restangular, tokenFactory, messageFactory) {
            
            var baseAccounts = Restangular.all('account');


            function _getToken(nickName, password){
                var content = 
                    "grant_type=password"+
                    "&username="+convertToFormUrlEncoded(nickName)+
                    "&password="+convertToFormUrlEncoded(password);
                    
                    return Restangular.allUrl("token",Restangular.configuration.baseUrl+"/token")
                        .customPOST(content,"",{},{ 'Content-Type': 'application/x-www-form-urlencoded'});
                       
            }

            var service = {

                getToken: function (nickName, password) {
                    return _getToken(nickName, password);
                },
                post: function(Model){
                    return Restangular.all("users").post(Model);
                }
            };

            function convertToFormUrlEncoded(str) {
                    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
                        return '%' + c.charCodeAt(0).toString(16);
                    }).replace(/%20/g, "+");
            }


            return service;
        }])
    .controller('newAccountCtrl',['$scope','Restangular', 'newAccountService', 'messageFactory', 'tokenFactory', '$window',
    function ($scope, Restangular, newAccountService, messageFactory, tokenFactory, $window) {
        
        function initializer(){
            Restangular.setBaseUrl('http://dev-sexmoveapi.boma.com.br');
            Restangular.setDefaultHeaders({ 'Content-Type': 'application/json' });

        }

        $scope.post = function(form){
            $scope.isLoading = true;

             if (form && form.$valid) {

                newAccountService.post($scope.Model).then(function(response){

                    newAccountService.getToken($scope.Model.NickName, $scope.Model.Password).then(function(responseToken){
                        tokenFactory.setToken(responseToken.access_token);
                        var token = tokenFactory.getToken();

                        if(token) $window.location = "/index.html";
                        else 
                            messageFactory.addErrorMessage('Erro ao fazer login');

                        $scope.isLoading = false;
                    }).catch(function(responseError){
                        console.log(responseError);
                        messageFactory.addErrorMessage('Ocorreu um erro ao fazer login');
                        $scope.isLoading = false;
                    });
                })
                .catch(function(responseError){

                    if(responseError.data.ErrorDescription != undefined && responseError.data.ErrorDescription.length <= 50)
                        messageFactory.addErrorMessage(responseError.data.ErrorDescription)
                    else 
                    {
                        console.log(responseError);
                        messageFactory.addErrorMessage('Não foi possível criar sua conta');
                    }

                    $scope.isLoading = false;
                });
             }
        }


        initializer();
    }]);
})();

