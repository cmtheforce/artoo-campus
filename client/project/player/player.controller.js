// angular.module('artoo').controller('PlayerCtrl', function ($mdDialog,PlayerSrv, RoleSrv) {
angular.module('artoo').controller('PlayerCtrl', function ($mdToast,PlayerSrv, RoleSrv, StorySrv, $state) {
   this.PlayerSrv = PlayerSrv;
   this.RoleSrv = RoleSrv;
  
  
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
    
    
  //   this.showAlert = function(ev) {
  //   // Appending dialog to document.body to cover sidenav in docs app
  //   // Modal dialogs should fully cover application
  //   // to prevent interaction outside of dialog
  //   $mdDialog.show(
  //     $mdDialog.alert()
  //       .parent(angular.element(document.querySelector('#popupContainer')))
  //       .clickOutsideToClose(true)
  //       .title('Errore')
  //       .textContent(this.errorMex)
  //       .ariaLabel('Errore: '+this.errorMex)
  //       .ok('Chiudi')
  //       .targetEvent(ev)
  //   );
  // };
    
    
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