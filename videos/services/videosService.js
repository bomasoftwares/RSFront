(function() {
    'use strict';

    angular
        .module('bmSexMoveApp')
        .service("videosService", ["Restangular", 'Upload', 'tokenFactory', function(Restangular, Upload, tokenFactory) { 

            function _getVideos(){
                return Restangular.all('files').all('videos').getList();
            }

            function _deleteVideos(videoId){
                return Restangular.one('files', videoId).remove();
            }

            function _uploadVideos(newVideo){
                return Upload.upload({
                    url: Restangular.configuration.baseUrl + '/files',
                    data: {file: newVideo},
                    headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    "Authorization": 'Bearer'+ tokenFactory.getToken()
                    }
                });
            }

            var service = {
                 getVideos: function () {
                    return _getVideos();
                },
                deleteVideo: function(videoId){
                    return _deleteVideos(videoId);
                },
                uploadVideo: function(newVideo){
                    return _uploadVideos(newVideo);
                }

            }

            return service;
        }]);
})();