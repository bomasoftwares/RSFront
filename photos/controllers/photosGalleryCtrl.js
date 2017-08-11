(function () {
    'use strict';

    angular.module('bmSexMoveApp').controller('photosGalleryCtrl',['$scope','photosService', 'Upload', 'tokenFactory', 
        function ($scope,photosService, Upload, tokenFactory) {
        var vm = this;
        vm.isLoadingGallery = false;
       

        //Método de inicialização
        function init(){
            getPhotos();

        }

        function getPhotos(){
            vm.isLoadingGallery = true;
            photosService.getPhotos().then(function(response){
                vm.photos = response;
                vm.isLoadingGallery = false;
            }).catch(function(responseError){
                console.log(responseError);
                vm.isLoadingGallery = false;
            });
        }

        vm.deletePhoto = function(photoId)
        {
            vm.isLoadingGallery = true;
            photosService.deletePhoto(photoId).then(function(response){
                var index = vm.photos.map(function(c){ return c.Id}).indexOf(photoId);
                vm.photos.splice(index,1);
                vm.isLoadingGallery = false;
            }).catch(function(responseError){
                console.log(responseError);
                vm.isLoadingGallery = false;

            });
        }

        vm.onFileSelect = function($files) {
            vm.isLoadingGallery = true;
            Upload.upload({
                url: 'http://dev-sexmoveapi.boma.com.br/files',
                file: $files,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    "Authorization": 'Bearer'+ tokenFactory.getToken()
                }            
            }).progress(function(e) {
            }).then(function(data, status, headers, config) {
                getPhotos();
                vm.isLoadingGallery = false;
            }); 
        }

        vm.uploadFile = function(formNewPhoto){

            if(formNewPhoto.file.$valid)
            {
                Upload.upload({
                    url: 'http://dev-sexmoveapi.boma.com.br' + '/files',
                    data: {file: formNewPhoto.file},
                    headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    "Authorization": 'Bearer'+ tokenFactory.getToken()
                    }
                }).then(function(response){
                    vm.getPhotos();
                }).catch(function(responseError){
                    vm.UploadPhotoErrorMessage = "Erro ao inserir imagem";
                });
            }
        }

        init();
    }]);


})();
