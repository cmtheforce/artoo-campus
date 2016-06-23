angular.module('artoo').controller('PlayerCtrl', function (PlayerSrv, RoleSrv , $resource ,$scope) {
    this.PlayerSrv = PlayerSrv;
    this.RoleSrv=RoleSrv;
 
    //DEFAULT FORM PLAYERS VALUES
    this.player = {sex : 'm'};
    this.role ={};
    this.roles= {};
   
    this.queryRole = () => {
        this.loading = true;
        RoleSrv.query().then((data) => {
             this.roles=data;
             this.loading = false;
        })
    };
    
    //SINGLETON
    this.queryRole();
    PlayerSrv.refresh();
  
    this.savePlayer = (player) =>{
      var errorMessage = "";
       this.loading = true;
      //VEDO SE IL NOME E' GIA' IN USO
    //   if(this.PlayerSrv.checkName(params.name)){
    //   errorMessage += 'Nome già in uso! ';
    //   }
      //VEDO SE NON E' STATO INSERITO UN RUOLO
      if(player.role==undefined){
        errorMessage += 'Seleziona una Classe!' + '';
      }
      if(errorMessage !== ""){
        PlayerSrv.showToast(errorMessage)
        this.loading = false;
        return;
      }
      else{
          //AVVIO SAVE 
          
          RoleSrv.getDetails(player['role']) //Cerco I dettagli della classe 
          .then(details =>{
              //Setto Statistiche Iniziali Player
              player.idRole=details['_id']
              player.level= 1;
              player.hpMax=details.hpLv;
              player.manaMax=details.manaLv;
              player.hp=details.hpLv;
              player.mana=details.manaLv;
              player.att=details.attackLv
              player.ability=details.ability
              player.def=details.def;
              player.gold= 0;
              player.image= details.image;
              player.nameRole=details.name;
              player.manaPotion = 2;
              player.healthPotion = 2;
              player.isAlive=1;
              delete player.role;
             
            PlayerSrv.create(player);
            this.loading = false; 
            
           
          })
          .catch(err => {console.error(err); this.loading = false;})
        
      }
    };


  
});