angular.module('artoo').controller('PlayerCtrl', function ($mdToast, PlayerSrv, $state, RoleSrv) {
    this.PlayerSrv = PlayerSrv;
 
    //DEFAULT FORM PLAYERS VALUES
    this.player = {sex : 'm', role : ""};
    this.roles= {};
   
    
    this.showToast = function(text) {
      var toast = $mdToast.simple()
      .textContent(text)
      .action('OK')
      .position('top right')
      .highlightAction(false);                     
      $mdToast.show(toast);
    };
    
    this.getRoleDetails = (id) =>{
        this.loading = true;
        RoleSrv.getDetails(id)
        .then((details) => {
            this.loading = false;
        });
    };
    
    this.query = () => {
        this.loading = true;
        RoleSrv.query().then((data) => {
            //Eventuale variabile per il load
             this.roles=data;
             this.loading = false;
        })
    };
    
    
    //Leggo da DB per inizializzare Classi
    this.query();
    
    // this.savePlayer= () => {
       
    // }

    // this.getRoleDetails("57690f9ce4e5b1eb1f1a0f4e");
});