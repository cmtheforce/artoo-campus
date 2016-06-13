angular.module('artoo').service('RoleSrv',function() {
    
     var role = {};
    
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
        
    this.get= () =>{
        return roles;
    };
    
    
    //METODO PER TROVARE IL RUOLO DI UN GIOCATORE
    this.getRole = (idRolePlayer, levelPlayer) => {
        
        roles.forEach((singleRole) => { //find
           
            if(singleRole.id === idRolePlayer){
              var test= angular.copy(singleRole); //Facciamo una copia per nn intaccare l'objc origin
              
             //Calcolo gli hp del player in base al livello
            // singleRole.hp_lv =  singleRole.hp_lv * levelPlayer;
              
             //Calcolo il mana del player in base al livello
            // singleRole.mana_lv = singleRole.mana_lv * levelPlayer;
                
             //Calcolo l'attacco del player in base al livello
            // singleRole.attack_lv = singleRole.attack_lv * levelPlayer;
               
             
              
             //this.role=singleRole;
 
            }
        }
        
        
        );
        
        return test;
    }
    
    
    // this.getRole = (idRolePlayer, levelPlayer)  => {
    //     this.calculateStatRole((idRolePlayer, levelPlayer),function (){
    //       return this.role; 
    //     })
        
    // }
    
    
    
});

