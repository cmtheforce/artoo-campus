angular.module('artoo').service('PlayerSrv', function(RoleSrv){
    
  var idMax= 0;
  
  var players =[]; // Lista di Player creati

  var role = {};
  
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

 //LISTA DEI RUOLI DI UN GIOCATORE
    var roles = [{
            id: 0,
            name: "Arciere senza freccia",
            abilita: "agilita",
            hp_lv: 80,
            mana_lv: 80,
            attack_lv: 60,
        },
        {
            id: 1,
            name: "Guerriero impazzito",
            abilita: "forza",
            hp_lv: 100,
            mana_lv: 40,
            attack_lv: 40,
        },
        {
            id: 2,
            name: "Mago somaro",
            abilita: "intelligenza",
            hp_lv: 60,
            mana_lv: 80,
            attack_lv: 80,
        },];

  //--------------------------------------------------------------------
     
  //Funzione per restituire l'elenco Completo delle Classi (Ruoli)        
  this.getRoles= () =>{
    return roles;
  };
    
    //METODO PER TROVARE IL RUOLO DI UN GIOCATORE
    this.getRole = (idRolePlayer, levelPlayer) => {
        
        roles.forEach((singleRole) => {
           
            if(singleRole.id === idRolePlayer){
              //Calcolo gli hp del player in base al livello
            singleRole.hp_lv =  singleRole.hp_lv * levelPlayer;
              
              //Calcolo il mana del player in base al livello
            singleRole.mana_lv = singleRole.mana_lv * levelPlayer;
                
              //Calcolo l'attacco del player in base al livello
            singleRole.attack_lv = singleRole.attack_lv * levelPlayer;
               
              this.role=singleRole;
 
            }
        });
    }  
  
  this.addPlayer = (params) => {
    var player = angular.copy(params);
    params= {};
  //Funzione che mi ritorna le statistiche in base al livello del PG  
    this.getRole(player.role, 1);
    
 
  //Incremento id per aggiunta nuovi Player  
    player.id=idMax++;
    
  //Setto le propietà che non posso settare nel form  
    var hpMax=this.role["hp_lv"] || "NaN";
    var manaMax=this.role["mana_lv"] || "NaN";
      
    player.hp_max=hpMax;
    player.mana_max=manaMax;
      
  //Setto Statistiche iniziali
    player.hp=hpMax;
    player.mana=manaMax;
    player.att=this.role["attack_lv"] || 0;
    player.dif=0;
    player.gold= 0;
    
    
  
    
    players.push(player);
      
  };
  
  
    this.getPlayers= () =>{
      
      console.log(players);
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