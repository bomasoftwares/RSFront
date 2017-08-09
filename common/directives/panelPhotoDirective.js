(function () {
    'use strict';
    angular
        .module('app.directives')
        .directive('panelPhoto', function () {

            return {
                restrict: 'AE',
                templateUrl: 'common/templates/panelPhotoDirectiveTemplate.html',
                transclude: true,
                scope: {
                    name: '@name',
                    deletePhoto: '&'
                }
            };
        });
})();