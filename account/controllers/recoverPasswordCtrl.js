(function () {
    'use strict';

    angular.module('bmSexMoveLoginApp').controller('recoverPasswordCtrl',['recoverPasswordService', function (recoverPasswordService) {
        var vm = this;
        vm.IsLoading = false;
        vm.enableBackLogin = false;

        vm.submit = function(form){
            vm.IsLoading = true;
            if (form && form.$valid) {
                recoverPasswordService.recoverPassword(vm.Email, vm.PasswordResetKey, vm.NewPassword).then(function(response){

                    vm.Message = 'Senha modificada com sucesso';
                    vm.IsLoading = false;
                    vm.enableBackLogin = true;
                    vm.disableResetButton = true;

                }).catch(function(responseError){
                    console.log(responseError);
                    vm.ErrorMessage = 'Ocorreu um erro ao processar o pedido';
                    vm.IsLoading = false;
                    vm.disableResetButton = false;
                });
            }
            else {
                vm.ErrorMessage = 'E-mail inválido para resetar senha';
                vm.IsLoading = false;
                vm.disableResetButton = false;
            }
        }
    }]);
})();
