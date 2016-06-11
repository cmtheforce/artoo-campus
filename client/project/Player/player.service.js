angular.module('artoo').service('PlayerSrv', function(RoleSrv){
    
  var idMax= 0;
  
  var players =[]; // Lista di Player creati

//   var player=[ {
//     id: 0,
//     name : "player1",
//     sesso: "M",
//     classe: "Guerriero", // Id_classe 
//     level: 1,
//     exp: 0,
//     //--Statistiche
//     hp: 10,
//     hp_max:10,
//     mana:6,
//     mana_max:6,
//     att: 2,
//     dif: 3,
//     gold: 0,
//   }]
  
  //--------------------------------------------------------------------
  
  
  this.addPlayer = (player) => {
      //Setto le propietà che non posso settare nel form
      player.id=idMax;
      var ruolo=RoleSrv.getRole(player.role,1);
      var hpMax=ruolo.hp_lv;
      var manaMax=ruolo.mana_lv;
      
      player.hp_max=hpMax;
      player.mana_max=manaMax;
      
      //Setto Statistiche iniziali
      player.hp=hpMax;
      player.mana=manaMax;
      player.att=ruolo.attack_lv;
      player.dif=0;
      player.gold= 0;
      
      this.idMax++;
      
      
  }
  
  
    this.getPlayers= () =>{
      return players;
    };
    
  
    this.getPlayerById = (idPlayer) => {
       players.forEach((singlePlayer) => {
            if(singlePlayer.id === idPlayer)
             return singlePlayer;
        });
        return -1; //
     };
  

    this.killPlayer = (player) => {
     player.hp=0;  
    };
  
  
  
  
});