
   console.log('run')

angular.module('artoo').controller('PlayerBarCtrl', function (PlayerSrv, $state) {
   this.PlayerSrv = PlayerSrv;
   this.$state = $state;
   

   
   this.test=()=>{
      console.log("zio aaa")
   }
});