(function () {
    'use strict';
    angular
        .module('app.directives')

        //Obs: O 'nameDirective' é traduzido no html para 'name-directive'
        .directive('nameDirective', function () {
            return {
                restrict: 'E',
                templateUrl: '',
                replace: true,
                scope: {
                    'data': '=data'
                },
                controller: ['$rootScope','$scope', 
                function ($rootScope, $scope) {
                   
                }],
                link: function ($scope, element) {
                }
            }
        });
})();