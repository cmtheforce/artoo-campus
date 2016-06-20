angular.module('artoo').controller('PlayerCtrl', function ($mdToast,PlayerSrv, RoleSrv, StorySrv, InventorySrv,ItemsSrv, $state) {
   this.PlayerSrv = PlayerSrv;
   this.RoleSrv = RoleSrv;
   this.ItemsSrv= ItemsSrv;
  
  
  //TEST del continua
  this.loadPlayers=()=>{
    // PlayerSrv.query();  
  }
  

  
    //IMPOSTO IL SESSO A MASCHIO SE NON VIENE INSERITO
    this.player = {sex : 'm', role : -1};
    this.setIdRole=(code)=>{
      this.player.role=code;
    }
  
    
    this.showToast = function(text) {
      var toast = $mdToast.simple()
        .textContent(text)
        .action('OK')
        .position('top right')
        .highlightAction(false);                     
        $mdToast.show(toast)
        // .then(function(response) {
          // if ( response == 'ok' ) {
          //   alert('You clicked \'OK\'.');
          // }
      //  });			   
      };
    
    this.savePlayer = (params) =>{
      var errorMessage = "";
      
      //VEDO SE IL NOME E' GIA' IN USO
      if(this.PlayerSrv.checkName(params.name)){
       errorMessage += 'Nome già in uso! ';
      }
      //VEDO SE NON E' STATO INSERITO UN RUOLO
      if(params.role==-1){
        errorMessage += 'Seleziona una Classe!' + '';
      }
      if(errorMessage !== ""){
        // this.showAlert();
        this.showToast(errorMessage)
        return;
      }
      else{
        this.PlayerSrv.addPlayer(params);
        //DEVO DECOMMENTARE QUESTO PER CREARE L'INVENTARIO
     //   this.InventorySrv.createInventory(params);
        this.player.role=-1;
      }
    };
    
    //FUNZIONE PER INIZIARE L'AVVENTURA
    this.finishCreation = () => {
      var story = StorySrv.getStepAdventure();
      console.log(story[0].typology);
      story[0].typology === 'combat' ? $state.go("storyCombat") : $state.go("storyEvent");
    };
    
});