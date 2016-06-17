angular.module('artoo').controller('ItemsCtrl', function ($scope, ItemsSrv){
    
    ItemsSrv.query().then((items) => {
    });
    
    var newItem = ItemsSrv.create();
    newItem.name = "Shuriken";
    //FACCIO UNA POST
    newItem.$save().then((items) =>{
        console.log(items);
    }).catch((err) => {
        console.error(err);
    });
});