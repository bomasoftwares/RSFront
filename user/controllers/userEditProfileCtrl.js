(function () {
    'use strict';

    angular.module('bmSexMoveLoginApp').controller('userEditProfileCtrl',['userEditProfileService', function (userEditProfileService) {
        var vm = this;
     //   vm.IsLoading = false;
     //   vm.enableBackLogin = false;

        vm.submit = function(form){
            vm.IsLoading = true;
            if (form && form.$valid) {
                userEditProfileService.recoverPassword(vm).then(function(response){

                  

                }).catch(function(responseError){
                    console.log(responseError);
                   
                });
            }
            else {
                
            }
        }
    }]);
})();
