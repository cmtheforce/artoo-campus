angular.module('artoo').controller('PlayerBarCtrl', function (PlayerSrv, $state) {
   this.PlayerSrv = PlayerSrv;
   this.$state = $state;
   //this.loading = false;
   
   this.query = () => {
      this.loading = true;
      //console.log("Loading TRUE");
      PlayerSrv.query().then((data) => {
          this.players=data;
          this.loading = false;
      })
     };
    
    
     this.barProgression=(min, max)=>{
     return (min/max)*100;
  };

    
    
});