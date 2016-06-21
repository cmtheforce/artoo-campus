angular.module('artoo').controller('PlayerCtrl', function ($mdToast, PlayerSrv, $state, RoleSrv , $resource) {
    this.PlayerSrv = PlayerSrv;
    this.RoleSrv=RoleSrv;
 
    //DEFAULT FORM PLAYERS VALUES
    this.player = {sex : 'm'};
    this.role ={};
    this.roles= {};
   
    
    this.showToast = function(text) {
      var toast = $mdToast.simple()
      .textContent(text)
      .action('OK')
      .position('top right')
      .highlightAction(false);                     
      $mdToast.show(toast);
    };

    this.queryRole = () => {
        this.loading = true;
        // console.log("Loading TRUE");
        RoleSrv.query().then((data) => {
            //Eventuale variabile per il load
             this.roles=data;
             this.loading = false;
            // console.log("Loading false");
        })
    };
    
    
    //SINGLETON
    this.queryRole();
    PlayerSrv.queryPlayers("",function (){PlayerSrv.getPlayers();})
   
    
    
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
        this.showToast(errorMessage)
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
              player.dif=0;
              player.gold= 0;
              player.image= details.image;
              player.nameRole=details.name;
              delete player.role;
             
            PlayerSrv.create(player);
            this.loading = false; 
            
           
          })
          .catch(err => {console.error(err); this.loading = false;})
        
      }
    };


  
});