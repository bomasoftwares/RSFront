var sexmoveApp = new angular.module('sexmoveApp',[
    'ngRoute'
]);

sexmoveApp.controller('MainCtrl',function($rootScope){
    $rootScope.appTitle = "Sex Move";
});

