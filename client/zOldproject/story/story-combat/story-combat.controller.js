angular.module('artoo').controller('StoryCombatCtrl', function (StoryCombatSrv, StorySrv){
    this.StoryCombatSrv = StoryCombatSrv;
    this.StorySrv = StorySrv;
    console.log("ENTRA QUI");
    StorySrv.getCurrentStep("combat");
});