(function () {
    'use strict';

    angular.module('bmSexMoveApp').controller('userEditProfileCtrl',['userEditProfileService', function (userEditProfileService) {
        var vm = this;
        vm.Model = [];
        vm.isLoadingProfile = false;

        vm.genreOptions = [
            { name: "Homem", value: 0 },         
            { name: "Mulher", value: 1},         
            { name: "Casal - Ele e Ele", value: 2},         
            { name: "Casal - Ele e Ela", value: 3},         
            { name: "Casal - Ela e Ela", value: 4}
        ];

        vm.maritalStatusOptions = [
            { name: "Casado", value: 0 },      
            { name: "Solteiro", value: 1 },      
            { name: "Namorando", value: 2 },      
            { name: "Noivo", value: 3 },      
            { name: "Viuva", value: 4 },      
        ];

        function init(){

            vm.isLoadingProfile = true;
            vm.Model.MyInterestMan = false;
            vm.Model.MyInterestWoman = false;
            vm.Model.MyInterestCoupleHeAndHe = false;
            vm.Model.MyInterestCoupleHeAndShe = false;
            vm.Model.MyInterestCoupleSheAndShe = false;
            vm.Model.MyInterestTrans = false;
            vm.Model.MyInterestCrossdresser= false;

            vm.Model.MyRelationshipExhibitionism= false;
            vm.Model.MyRelationshipRomantic= false;
            vm.Model.MyRelationshipQuickSex= false;
            vm.Model.MyRelationshipDiscreet= false;
            vm.Model.MyRelationshipOnlyFriendship= false;
            vm.Model.MyRelationshipCasualSex = false;
            vm.Model.MyRelationshipSexWithTwo = false;
            vm.Model.MyRelationshipBetweenCouples= false;
            vm.Model.MyRelationshipGroupSex = false;
            vm.Model.MyRelationshipOthers = false;

            userEditProfileService.getUserProfile().then(function(response){
                vm.Model = response;
                if(vm.Model && vm.Model.Genre >= 0)
                    vm.Model.selectedGenre = vm.genreOptions[vm.Model.Genre];

                if(vm.Model && vm.Model.MaritalStatus >= 0)
                    vm.Model.selectedMaritalStatus = vm.maritalStatusOptions[vm.Model.MaritalStatus];
                
                if(vm.Model && vm.Model.Interests){

                    var indexMyInterestMan = vm.Model.Interests.map(function(c){ return c.Key}).indexOf('MyInterestMan');
                    var indexMyInterestWoman = vm.Model.Interests.map(function(c){ return c.Key}).indexOf('MyInterestWoman');
                    var indexMyInterestCoupleHeAndHe = vm.Model.Interests.map(function(c){ return c.Key}).indexOf('MyInterestCoupleHeAndHe');
                    var indexMyInterestCoupleHeAndShe = vm.Model.Interests.map(function(c){ return c.Key}).indexOf('MyInterestCoupleHeAndShe');
                    var indexMyInterestCoupleSheAndShe = vm.Model.Interests.map(function(c){ return c.Key}).indexOf('MyInterestCoupleSheAndShe');
                    var indexMyInterestTrans = vm.Model.Interests.map(function(c){ return c.Key}).indexOf('MyInterestTrans');
                    var indexMyInterestCrossdresser = vm.Model.Interests.map(function(c){ return c.Key}).indexOf('MyInterestCrossdresser');
                    
                    if(indexMyInterestMan != -1)
                        vm.Model.MyInterestMan = (vm.Model.Interests[indexMyInterestMan].Value === "true");
                    
                    if(indexMyInterestWoman != -1)
                        vm.Model.MyInterestWoman = (vm.Model.Interests[indexMyInterestWoman].Value === "true");
                        
                    if(indexMyInterestCoupleHeAndHe != -1)
                        vm.Model.MyInterestCoupleHeAndHe = (vm.Model.Interests[indexMyInterestCoupleHeAndHe].Value === "true");

                    if(indexMyInterestCoupleHeAndShe != -1)
                        vm.Model.MyInterestCoupleHeAndShe = (vm.Model.Interests[indexMyInterestCoupleHeAndShe].Value === "true");

                    if(indexMyInterestCoupleSheAndShe != -1)
                        vm.Model.MyInterestCoupleSheAndShe = (vm.Model.Interests[indexMyInterestCoupleSheAndShe].Value === "true");

                    if(indexMyInterestTrans != -1)
                        vm.Model.MyInterestTrans = (vm.Model.Interests[indexMyInterestTrans].Value === "true");

                    if(indexMyInterestCrossdresser != -1)
                        vm.Model.MyInterestCrossdresser = (vm.Model.Interests[indexMyInterestCrossdresser].Value === "true");

                }  

                if(vm.Model && vm.Model.Relationships){

                    var indexMyRelationshipExhibitionism = vm.Model.Interests.map(function(c){ return c.Key}).indexOf('MyRelationshipExhibitionism');
                    var indexMyRelationshipRomantic = vm.Model.Interests.map(function(c){ return c.Key}).indexOf('MyRelationshipRomantic');
                    var indexMyRelationshipQuickSex = vm.Model.Interests.map(function(c){ return c.Key}).indexOf('MyRelationshipQuickSex');
                    var indexMyRelationshipDiscreet = vm.Model.Interests.map(function(c){ return c.Key}).indexOf('MyRelationshipDiscreet');
                    var indexMyRelationshipOnlyFriendship = vm.Model.Interests.map(function(c){ return c.Key}).indexOf('MyRelationshipOnlyFriendship');
                    var indexMyRelationshipBetweenCouples = vm.Model.Interests.map(function(c){ return c.Key}).indexOf('MyRelationshipBetweenCouples');
                    var indexMyRelationshipCasualSex = vm.Model.Interests.map(function(c){ return c.Key}).indexOf('MyRelationshipCasualSex');
                    var indexMyRelationshipSexWithTwo = vm.Model.Interests.map(function(c){ return c.Key}).indexOf('MyRelationshipSexWithTwo');
                    var indexMyRelationshipGroupSex = vm.Model.Interests.map(function(c){ return c.Key}).indexOf('MyRelationshipGroupSex');
                    var indexMyRelationshipOthers = vm.Model.Interests.map(function(c){ return c.Key}).indexOf('MyRelationshipOthers');

                    if(indexMyRelationshipExhibitionism != -1)
                        vm.Model.MyRelationshipExhibitionism = (vm.Model.Interests[indexMyRelationshipExhibitionism].Value === "true");

                    if(indexMyRelationshipRomantic != -1)
                        vm.Model.MyRelationshipRomantic = (vm.Model.Interests[indexMyRelationshipRomantic].Value === "true");

                    if(indexMyRelationshipQuickSex != -1)
                        vm.Model.MyRelationshipQuickSex = (vm.Model.Interests[indexMyRelationshipQuickSex].Value === "true");
                        
                    if(indexMyRelationshipDiscreet != -1)
                        vm.Model.MyRelationshipDiscreet = (vm.Model.Interests[indexMyRelationshipDiscreet].Value === "true");
                
                    if(indexMyRelationshipOnlyFriendship != -1)
                        vm.Model.MyRelationshipOnlyFriendship = (vm.Model.Interests[indexMyRelationshipOnlyFriendship].Value === "true");
                    
                    if(indexMyRelationshipBetweenCouples != -1)
                        vm.Model.MyRelationshipBetweenCouples = (vm.Model.Interests[indexMyRelationshipBetweenCouples].Value === "true");
                        
                    if(indexMyRelationshipCasualSex != -1)
                        vm.Model.MyRelationshipCasualSex = (vm.Model.Interests[indexMyRelationshipCasualSex].Value === "true");                    

                    if(indexMyRelationshipSexWithTwo != -1)
                        vm.Model.MyRelationshipSexWithTwo = (vm.Model.Interests[indexMyRelationshipSexWithTwo].Value === "true");                    

                    if(indexMyRelationshipGroupSex != -1)
                        vm.Model.MyRelationshipGroupSex = (vm.Model.Interests[indexMyRelationshipGroupSex].Value === "true");                    

                    if(indexMyRelationshipOthers != -1)
                        vm.Model.MyRelationshipOthers = (vm.Model.Interests[indexMyRelationshipOthers].Value === "true");                    

                }


                vm.isLoadingProfile = false;
                
                
            }).catch(function(responseError){
                console.log(responseError);
                vm.isLoadingProfile = false;
            });

        }

        vm.submit = function (formEditProfile){
            if  (formEditProfile.$valid)
            {
                vm.isLoadingProfile = true;
                userEditProfileService.editUserProfile(vm.Model).then(function(){
                    vm.isLoadingProfile = false;
                }).catch(function(responseError){
                    messageFactory.addErrorMessage('Erro ao salvar perfil', responseError);
                    vm.isLoadingProfile = false;
                });
            }
        }


        init();




    }]);
})();

