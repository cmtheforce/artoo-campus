angular.module('artoo').controller('PlayerCtrl', function ($mdDialog,PlayerSrv, RoleSrv) {
   this.PlayerSrv = PlayerSrv;
   this.RoleSrv = RoleSrv;
  
    //IMPOSTO IL SESSO A MASCHIO SE NON VIENE INSERITO
    this.player = {sex : 'm', role : 0};
    
 
    
    
     this.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Errore')
        .textContent('Nome già in uso!')
        .ariaLabel('Errore: Nome già in uso!')
        .ok('Chiudi')
        .targetEvent(ev)
    );
  };
    
    
    this.savePlayer = (params) =>{
      if(!this.PlayerSrv.checkName(params.name)){
        this.PlayerSrv.addPlayer(params);
      }else this.showAlert();
    };
    
});