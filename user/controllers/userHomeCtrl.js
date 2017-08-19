(function () {
    'use strict';

    angular.module('bmSexMoveApp').controller('userHomeCtrl',['photosService', '$filter', function (photosService, $filter) {
        var vm = this;
        //Método de inicialização
        function init(){
            getLatestPhotos();
            getLatestVideos();
        }

        function getLatestPhotos(){
            vm.isLoadingPhotosReport = true;
            photosService.latestReportPhotos().then(function(response){
                vm.latestPhotosItems = response;
                vm.isLoadingPhotosReport = false;
            }).catch(function(responseError){
                console.log(responseError);
                vm.isLoadingPhotosReport = false;
            });
        }

        function getLatestVideos(){
            vm.isLoadingVideosReport = true;
            photosService.latestReportVideos().then(function(response){
                vm.latestVideosItems = response;
                vm.isLoadingVideosReport = false;
            }).catch(function(responseError){
                console.log(responseError);
                vm.isLoadingVideosReport = false;
            });
        }

        

        
        init();
    }]);
})();
