(function() {
    'use strict';

    angular
        .module('bmSexMoveApp')
        .service("photosService", ["Restangular", 'Upload', 'tokenFactory', function(Restangular, Upload, tokenFactory) { 

            function _getPhotos(){
                return Restangular.all('files').all('photos').getList();
            }

            function _deletePhoto(photoId){
                return Restangular.one('files', photoId).remove();
            }

            function _uploadPhoto(newPhoto){
                return Upload.upload({
                    url: Restangular.configuration.baseUrl + '/files',
                    data: {file: newPhoto},
                    headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    "Authorization": 'Bearer'+ tokenFactory.getToken()
                    }
                });
            }

            function _latestReportPhotos(){
                return Restangular.all('files').all('report').all('photos').all('latest').getList();
            }
             
            function _latestReportVideos(){
                return Restangular.all('files').all('report').all('videos').all('latest').getList();
            }

            var service = {
                 getPhotos: function () {
                    return _getPhotos();
                },
                deletePhoto: function(photoId){
                    return _deletePhoto(photoId);
                },
                uploadPhoto: function(newPhoto){
                    return _uploadPhoto(newPhoto);
                },
                latestReportPhotos: function(){
                    return _latestReportPhotos();
                },
                latestReportVideos: function(){
                    return _latestReportVideos();
                }

            }

            return service;
        }]);
})();