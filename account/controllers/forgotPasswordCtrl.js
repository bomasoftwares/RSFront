(function(){
    'use strict';

    angular.module('bmSexMoveLoginApp')
    .controller('forgotPasswordCtrl', ['messageFactory','forgotPasswordService', function (messageFactory, forgotPasswordService ){

        var vm = this;
        vm.IsLoading = false;

        vm.submit = function(form){
            vm.IsLoading = true;
            if (form && form.$valid) {
                forgotPasswordService.forgotPassword(vm.Email).then(function(){
                    vm.Message = 'Pedido realizado. Verifique seu e-mail';
                    vm.IsLoading = false;
                }).catch(function(responseError){
                    console.log(responseError);
                    vm.ErrorMessage = 'Ocorreu um erro ao processar o pedido';
                    vm.IsLoading = false;
                });
            }
            else {
                vm.ErrorMessage = 'E-mail inválido para realizar pedido';
                  vm.IsLoading = false;
            }
        }
    }])
    .config(['$routeProvider', function (routeProvider){
            routeProvider.when('/account/forgotPassword',{
                templateUrl: '../../account/templates/forgotPassword.html',
                controller: 'forgotPasswordCtrl',
                name:'forgotPassword'
            });
        }]);
})();