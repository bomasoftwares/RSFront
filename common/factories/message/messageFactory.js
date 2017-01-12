'use strict';

(function() {

    angular.module('app.factories').factory('messageFactory', ['$window', 'toastr',   function($window, toastr) {
            var msg = {

                addSuccessMessage: function(text, title) {
                    toastr.success(text, title);
                },
                
                addInfoMessage: function(text, title) {
                    toastr.info(text, title);
                },                

                addErrorMessage: function(text, title) {
                    toastr.error(text, title);
                },
                
                addWarningMessage: function(text, title) {
                    toastr.warning(text, title);
                },

                clearMessages: function() {
                    toastr.clear();                
                }
            };

            return msg;

    }])
    .config(function(toastrConfig){
        angular.extend(toastrConfig, {
            allowHtml: false,
            closeButton: true,
            closeHtml: '<button>&times;</button>',
            extendedTimeOut: 1000,
            iconClasses: {
                error: 'toast-error',
                info: 'toast-info',
                success: 'toast-success',
                warning: 'toast-warning'
            },  
            messageClass: 'toast-message',
            onHidden: null,
            onShown: null,
            onTap: null,
            progressBar: false,
            tapToDismiss: true,
            templates: {
                toast: 'directives/toast/toast.html',
                progressbar: 'directives/progressbar/progressbar.html'
            },
            timeOut: 3000,
            titleClass: 'toast-title',
            toastClass: 'toast'
    });

    });

})();