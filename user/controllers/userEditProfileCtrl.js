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
                    else 
                        vm.Model.MyInterestMan = false;
                    
                    if(indexMyInterestWoman != -1)
                        vm.Model.MyInterestWoman = (vm.Model.Interests[indexMyInterestWoman].Value === "true");
                    else 
                        vm.Model.MyInterestWoman = false;
                        
                    if(indexMyInterestCoupleHeAndHe != -1)
                        vm.Model.MyInterestCoupleHeAndHe = (vm.Model.Interests[indexMyInterestCoupleHeAndHe].Value === "true");
                    else 
                        vm.Model.MyInterestCoupleHeAndHe = false;

                    if(indexMyInterestCoupleHeAndShe != -1)
                        vm.Model.MyInterestCoupleHeAndShe = (vm.Model.Interests[indexMyInterestCoupleHeAndShe].Value === "true");
                    else 
                        vm.Model.MyInterestCoupleHeAndShe = false;

                    if(indexMyInterestCoupleSheAndShe != -1)
                        vm.Model.MyInterestCoupleSheAndShe = (vm.Model.Interests[indexMyInterestCoupleSheAndShe].Value === "true");
                    else 
                        vm.Model.MyInterestCoupleSheAndShe = false;


                    if(indexMyInterestTrans != -1)
                        vm.Model.MyInterestTrans = (vm.Model.Interests[indexMyInterestTrans].Value === "true");
                    else 
                        vm.Model.MyInterestTrans = false;

                    if(indexMyInterestCrossdresser != -1)
                        vm.Model.MyInterestCrossdresser = (vm.Model.Interests[indexMyInterestCrossdresser].Value === "true");
                    else 
                        vm.Model.MyInterestCrossdresser = false;

                }  

                if(vm.Model && vm.Model.Relationships){

                    var indexMyRelationshipExhibitionism = vm.Model.Relationships.map(function(c){ return c.Key}).indexOf('MyRelationshipExhibitionism');
                    var indexMyRelationshipRomantic = vm.Model.Relationships.map(function(c){ return c.Key}).indexOf('MyRelationshipRomantic');
                    var indexMyRelationshipQuickSex = vm.Model.Relationships.map(function(c){ return c.Key}).indexOf('MyRelationshipQuickSex');
                    var indexMyRelationshipDiscreet = vm.Model.Relationships.map(function(c){ return c.Key}).indexOf('MyRelationshipDiscreet');
                    var indexMyRelationshipOnlyFriendship = vm.Model.Relationships.map(function(c){ return c.Key}).indexOf('MyRelationshipOnlyFriendship');
                    var indexMyRelationshipBetweenCouples = vm.Model.Relationships.map(function(c){ return c.Key}).indexOf('MyRelationshipBetweenCouples');
                    var indexMyRelationshipCasualSex = vm.Model.Relationships.map(function(c){ return c.Key}).indexOf('MyRelationshipCasualSex');
                    var indexMyRelationshipSexWithTwo = vm.Model.Relationships.map(function(c){ return c.Key}).indexOf('MyRelationshipSexWithTwo');
                    var indexMyRelationshipGroupSex = vm.Model.Relationships.map(function(c){ return c.Key}).indexOf('MyRelationshipGroupSex');
                    var indexMyRelationshipOthers = vm.Model.Relationships.map(function(c){ return c.Key}).indexOf('MyRelationshipOthers');

                    if(indexMyRelationshipExhibitionism != -1)
                        vm.Model.MyRelationshipExhibitionism = (vm.Model.Relationships[indexMyRelationshipExhibitionism].Value === "true");
                    else 
                        vm.Model.MyRelationshipExhibitionism = false;

                    if(indexMyRelationshipRomantic != -1)
                        vm.Model.MyRelationshipRomantic = (vm.Model.Relationships[indexMyRelationshipRomantic].Value === "true");
                    else 
                        vm.Model.MyRelationshipRomantic = false;

                    if(indexMyRelationshipQuickSex != -1)
                        vm.Model.MyRelationshipQuickSex = (vm.Model.Relationships[indexMyRelationshipQuickSex].Value === "true");
                    else 
                        vm.Model.MyRelationshipQuickSex = false;
                        
                    if(indexMyRelationshipDiscreet != -1)
                        vm.Model.MyRelationshipDiscreet = (vm.Model.Relationships[indexMyRelationshipDiscreet].Value === "true");
                    else 
                        vm.Model.MyRelationshipDiscreet = false;
                
                    if(indexMyRelationshipOnlyFriendship != -1)
                        vm.Model.MyRelationshipOnlyFriendship = (vm.Model.Relationships[indexMyRelationshipOnlyFriendship].Value === "true");
                    else 
                        vm.Model.MyRelationshipOnlyFriendship = false;

                    if(indexMyRelationshipBetweenCouples != -1)
                        vm.Model.MyRelationshipBetweenCouples = (vm.Model.Relationships[indexMyRelationshipBetweenCouples].Value === "true");
                    else 
                        vm.Model.MyRelationshipBetweenCouples = false;
                        
                    if(indexMyRelationshipCasualSex != -1)
                        vm.Model.MyRelationshipCasualSex = (vm.Model.Relationships[indexMyRelationshipCasualSex].Value === "true");                    
                    else 
                        vm.Model.MyRelationshipCasualSex = false;

                    if(indexMyRelationshipSexWithTwo != -1)
                        vm.Model.MyRelationshipSexWithTwo = (vm.Model.Relationships[indexMyRelationshipSexWithTwo].Value === "true");
                    else 
                        vm.Model.MyRelationshipSexWithTwo = false;


                    if(indexMyRelationshipGroupSex != -1)
                        vm.Model.MyRelationshipGroupSex = (vm.Model.Relationships[indexMyRelationshipGroupSex].Value === "true");                    
                    else 
                        vm.Model.MyRelationshipGroupSex = false;

                    if(indexMyRelationshipOthers != -1)
                        vm.Model.MyRelationshipOthers = (vm.Model.Relationships[indexMyRelationshipOthers].Value === "true");
                    else 
                        vm.Model.MyRelationshipOthers = false;

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
            
                vm.Model.Interests = [
                    { UserId : vm.Model.UserId , Key : "MyInterestMan", Value: vm.Model.MyInterestMan},
                    { UserId : vm.Model.UserId , Key : "MyInterestWoman", Value: vm.Model.MyInterestWoman},
                    { UserId : vm.Model.UserId , Key : "MyInterestCoupleHeAndHe", Value: vm.Model.MyInterestCoupleHeAndHe},
                    { UserId : vm.Model.UserId , Key : "MyInterestCoupleHeAndShe", Value: vm.Model.MyInterestCoupleHeAndShe},
                    { UserId : vm.Model.UserId , Key : "MyInterestCoupleSheAndShe", Value: vm.Model.MyInterestCoupleSheAndShe},
                    { UserId : vm.Model.UserId , Key : "MyInterestTrans", Value: vm.Model.MyInterestTrans},
                    { UserId : vm.Model.UserId , Key : "MyInterestCrossdresser", Value: vm.Model.MyInterestCrossdresser}
                ];

                vm.Model.Relationships = [
                    { UserId : vm.Model.UserId , Key : "MyRelationshipExhibitionism", Value: vm.Model.MyRelationshipExhibitionism},
                    { UserId : vm.Model.UserId , Key : "MyRelationshipRomantic", Value: vm.Model.MyRelationshipRomantic},
                    { UserId : vm.Model.UserId , Key : "MyRelationshipQuickSex", Value: vm.Model.MyRelationshipQuickSex},
                    { UserId : vm.Model.UserId , Key : "MyRelationshipDiscreet", Value: vm.Model.MyRelationshipDiscreet},
                    { UserId : vm.Model.UserId , Key : "MyRelationshipOnlyFriendship", Value: vm.Model.MyRelationshipOnlyFriendship},
                    { UserId : vm.Model.UserId , Key : "MyRelationshipCasualSex", Value: vm.Model.MyRelationshipCasualSex},
                    { UserId : vm.Model.UserId , Key : "MyRelationshipSexWithTwo", Value: vm.Model.MyRelationshipSexWithTwo},
                    { UserId : vm.Model.UserId , Key : "MyRelationshipBetweenCouples", Value: vm.Model.MyRelationshipBetweenCouples},
                    { UserId : vm.Model.UserId , Key : "MyRelationshipGroupSex", Value: vm.Model.MyRelationshipGroupSex},
                    { UserId : vm.Model.UserId , Key : "MyRelationshipOthers", Value: vm.Model.MyRelationshipOthers}
                ];                

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

