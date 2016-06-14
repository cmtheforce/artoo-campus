angular.module('artoo').controller('PlayerCtrl', function (PlayerSrv, RoleSrv, ForeingSrv) {
   this.PlayerSrv = PlayerSrv;
   this.RoleSrv = RoleSrv;
   this.ForeingSrv = ForeingSrv;
  
  
    //IMPOSTO IL SESSO A MASCHIO SE NON VIENE INSERITO
    this.player = {sex : 'm', role:1};
    this.errorName=false;
    
    this.savePlayer = (params) =>{
      if(!this.PlayerSrv.checkName(params.name)){
        this.PlayerSrv.addPlayer(params);
      }else this.errorName=true;
    };
    
});