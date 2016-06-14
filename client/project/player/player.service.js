angular.module('artoo').service('PlayerSrv', function(RoleSrv){
    
  var idMax= 0;
  
  var players = []; // Lista di Player creati

  var role = {};
  
//   var player=[ {
//     id: 0,
//     name : "player1",
//     sesso: "M",
//     classe: "Guerriero", // Idclasse 
//     level: 1,
//     exp: 0,
//     //--Statistiche
//     hp: 10,
//     hpMax:10,
//     mana:6,
//     manaMax:6,
//     att: 2,
//     dif: 3,
//     gold: 0,
//   }]

 
  //-----Public API------
   
  this.addPlayer = (params) => {
 
   
    var player = angular.copy(params);
    params= {};
    
    //Funzione che mi ritorna le statistiche in base al livello del PG 
    var role=RoleSrv.getRole(player.role, 1);
 
    //Incremento id per aggiunta nuovi Player  
    player.id=idMax++;
    
    //Setto le propietà che non posso settare nel form  
    var hpMax=role["hpLv"] || "NaN";
    var manaMax=role["manaLv"] || "NaN";
      
    player.hpMax=hpMax;
    player.manaMax=manaMax;
      
    //Setto Statistiche iniziali
    player.hp=hpMax;
    player.mana=manaMax;
    
 
    player.att=role["attackLv"] || 0;
    player.dif=0;
    player.gold= 0;
    player.image="http://www.placehold.it/70x70";
    if(player.name =='Berlusca'){ player.gold=1000000000; 
      player.image = 'project/bandana.jpg';
    }
    player.level= 1;
    
    players.push(player);
    
  };
  
  
  this.checkName = (name) => { //Trova nome se esiste return true
   return players.find(singlePlayer => singlePlayer.name === name);
  };
  
  
  this.getPlayers = () =>{
    return players;
  };
    
    
  this.getPlayerById = (idPlayer) => {
    players.forEach((singlePlayer) => {
      if(singlePlayer.id === idPlayer)
        return singlePlayer;
    });
  };
  
  
  this.killPlayer = (player) => {
    player.hp=0;  
  };
  
   
});