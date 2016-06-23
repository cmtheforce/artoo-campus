angular.module('artoo').service('PlayerSrv', function(RoleSrv,InventorySrv, StorySrv, $resource){
    
  var idMax= 0;
  
  var players = []; // Lista di Player creati

  var role = {};
  
  var Players = $resource('/api/players', {},{});



//PUBLIC API (server)
  this.create = (player) => {
    var playerinsert= new Players(player);
    playerinsert.$save().then(date => {})
  }
  
  //-----Public API-----

  this.addPlayer = (params) => {
    var player = angular.copy(params);
    params= {};
    
    //Funzione che mi ritorna le statistiche in base al livello del PG 
    var role=RoleSrv.getRole(player.role, 1);
     player.image=role["image"];
     player.inventory=role["inventory"]
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
   
    if(player.name =='Berlusca'){ player.gold=1000000000; 
      player.image = 'http://www.promessepubbliche.com/images/content/berlusconi-silvio/berlusconi-bandana_min.jpg';
    }
    player.level= 1;
  console.log(player);
  this.create(player)
    players.push(player);
    
    
    
  };
  
  // FUNZIONE PER VEDERE SE ESISTE GIA' IL NOME DEL PERSONAGGIO CREATO
  this.checkName = (name) => { //Trova nome se esiste return true
    var check=players.find(singlePlayer => singlePlayer.name === name);
     return (check==undefined) ? false : true;
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
  
  //PRENDO L'INVENTARIO DI UN GIOCATORE
  this.getInventoryById = (idPlayer) => {
    
  }
  
  
  this.killPlayer = (player) => {
    player.hp=0;  
  };
  
  this.barProgression=(min, max)=>{
     return (min/max)*100;
  };
});

  // var Players = $resource('/api/players', {},{});
  
//   var player=[ {
//     id: 0,
//     name : "player1",
//     sesso: "M",
//     role: idRole, // Idclasse 
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