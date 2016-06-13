angular.module('artoo').service('RoleSrv', function() {
    
    var role = {};
    
    //LISTA DEI RUOLI DI UN GIOCATORE
    var roles = [{
            id: 0,
            name: "Arciere senza freccia",
            abilita: "Agilita",
            hpLv: 80,
            manaLv: 80,
            attackLv: 60,
        },
        {
            id: 1,
            name: "Guerriero impazzito",
            abilita: "Forza",
            hpLv: 100,
            manaLv: 40,
            attackLv: 40,
        },
        {
            id: 2,
            name: "Mago somaro",
            abilita: "Intelligenza",
            hpLv: 60,
            manaLv: 80,
            attackLv: 80,
        },
    ];
    
    //-----Public API------
      
    this.get = () =>{
        return roles;
    };
    
    
    //METODO PER TROVARE IL RUOLO DI UN GIOCATORE
    this.getRole = (idRolePlayer, levelPlayer) => {
        //statRole è la copia del object trovato nel Find
        var statRole = angular.copy(roles.find(singleRole => singleRole.id === idRolePlayer));
        
        //Calcolo gli hp del player in base al livello
        statRole.hpLv =  statRole.hpLv * levelPlayer;
              
        //Calcolo il mana del player in base al livello
        statRole.manaLv = statRole.manaLv * levelPlayer;
                
        //Calcolo l'attacco del player in base al livello
        statRole.attackLv = statRole.attackLv * levelPlayer;
        
        return statRole;
    };
       
    










 
});

