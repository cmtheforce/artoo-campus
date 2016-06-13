angular.module('artoo').controller('ItemsCtrl', function(ItemsSrv){
    console.info("item ctrl runs in another file"); 
    // Tolgo lo $scope perchè ho dichiarato il nome nel component
    //POSSO VEDERE I PARAMETRI BINDATI NEL COMPONENT ANCHE NEL CONTROLLER
    // this.color = 'red';
    this.ItemsSrv = ItemsSrv;
    this.typology = 'weapons';
});