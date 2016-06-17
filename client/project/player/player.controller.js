angular.module('artoo').controller('PlayerCtrl', function ($mdDialog,PlayerSrv, RoleSrv) {
   this.PlayerSrv = PlayerSrv;
   this.RoleSrv = RoleSrv;
  
  
    //IMPOSTO IL SESSO A MASCHIO SE NON VIENE INSERITO
    this.player = {sex : 'm', role : -1};
    this.errorMex=""; //'
    this.setIdRole=(code)=>{
      this.player.role=code;
    }
    
    
     this.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Errore')
        .textContent(this.errorMex)
        .ariaLabel('Errore: '+this.errorMex)
        .ok('Chiudi')
        .targetEvent(ev)
    );
  };
    
    
    this.savePlayer = (params) =>{
      
      this.errorMex = "";
      
      //VEDO SE IL NOME E' GIA' IN USO
      if(this.PlayerSrv.checkName(params.name)){
        this.errorMex += 'Nome già in uso!';
      }
      //VEDO SE NON E' STATO INSERITO UN RUOLO
      if(params.role==-1){
        this.errorMex += 'Seleziona una Classe!' + '';
      }
      if(this.errorMex !== ""){
        this.showAlert();
        return;
      }
      else{
        this.PlayerSrv.addPlayer(params);
        this.player.role=-1;
      }


    };
    
});