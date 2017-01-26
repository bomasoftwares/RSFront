(function () {
    'use strict';
    angular
        .module('app.directives')

        //Directiva X
        .directive('globalSearch', function () {
            return {
                restrict: 'E',
                templateUrl: 'common/templates/globalSearchDirectiveTemplate.html',
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