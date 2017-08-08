(function () {
    'use strict';

    angular.module('bmSexMoveApp').controller('searchResultsCtrl', function ($routeParams) {

        var vm = this;
        vm.hetero = 'hetero';
        

        //Método de inicialização
        function init(){
            vm.search = $routeParams.query;
        }

        init();
    });
})();
