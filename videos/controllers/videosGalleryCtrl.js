(function () {
    'use strict';

    angular.module('bmSexMoveApp').controller('videosGalleryCtrl',['$scope','videosService', 'Upload', 'tokenFactory', 
        function ($scope,videosService, Upload, tokenFactory) {
        var vm = this;
        vm.isLoadingGallery = false;
        vm.videos = [];

        //Método de inicialização
        function init(){
            getVideos();
        }

        function getVideos(){
            vm.isLoadingGallery = true;
            videosService.getVideos().then(function(response){
                vm.videos = response;
                vm.isLoadingGallery = false;
            }).catch(function(responseError){
                console.log(responseError);
                vm.isLoadingGallery = false;
            });
        }

        vm.deleteVideo = function(videoId)
        {
            vm.isLoadingGallery = true;
            videosService.deleteVideo(videoId).then(function(response){
                var index = vm.videos.map(function(c){ return c.Id}).indexOf(videoId);
                vm.videos.splice(index,1);
                vm.isLoadingGallery = false;
            }).catch(function(responseError){
                console.log(responseError);
                vm.isLoadingGallery = false;

            });
        }

        vm.onFileSelect = function($files) {
            vm.isLoadingGallery = true;
            Upload.upload({
                url: 'http://api-sexmove.azurewebsites.net/files',
                file: $files,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    "Authorization": 'Bearer'+ tokenFactory.getToken()
                }            
            }).progress(function(e) {
            }).then(function(data, status, headers, config) {
                vm.isLoadingGallery = true;
                getVideos();
                vm.isLoading = false;
            }); 
        }

        init();
    }]);


})();
