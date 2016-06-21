angular.module('artoo').controller('PlayerCtrl', function ($mdToast,PlayerSrv, $state, RoleSrv) {
    this.PlayerSrv = PlayerSrv;
   
    //DEFAULT FORM PLAYERS VALUES
    this.player = {sex : 'm', role : ""};
    
    this.showToast = function(text) {
      var toast = $mdToast.simple()
      .textContent(text)
      .action('OK')
      .position('top right')
      .highlightAction(false);                     
      $mdToast.show(toast);
    };
    
    this.getRoleDetails = (id) =>{
        RoleSrv.getDetails(id)
        .then((details) => {
            console.log(details);
        });
    }
    
    this.query = () => {
        RoleSrv.query().then((data) => {
            console.log(data);
        })
    }
    
    this.query();
    this.getRoleDetails("57690f9ce4e5b1eb1f1a0f4e");
});