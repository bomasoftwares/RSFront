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
                controller: ['$rootScope','$scope', '$element', 
                function ($rootScope, $scope, $element) {
                    $scope.showSearch = false;


                    $scope.openSearch = function(){
                        if(!$scope.showSearch)
                        $scope.showSearch = true;
                        $scope.textToSearch = '';
                    }

                    $scope.closeSearch = function(){
                        $scope.textToSearch = '';
                        $scope.showSearch = false;   
                        
                    }
                   
                }],
                link: function ($scope, element) {
                }
            }
        });
})();