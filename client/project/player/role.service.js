angular.module('artoo').service('RoleSrv', function() {
    
    var role = {};
    
    //LISTA DEI RUOLI DI UN GIOCATORE
    var roles = [{
            id: 0,
            name: "Arciere senza freccia",
            abilita: "Agilità",
            hpLv: 80,
            manaLv: 60,
            attackLv: 60,
            image:"http://orig15.deviantart.net/7e6d/f/2016/058/d/0/strider_hiryu_kof_style_by_metal_warrior_by_themetalwarrior666-d9t943l.gif",
            description:"Classe molto versatile sia nel combattimento in mischia ma soprattutto a distanza, anche se non riesce mai a trovare un venditore di munizioni e rimane permanentemente senza frecce.",
        },
        {
            id: 1,
            name: "Guerriero Impazzito",
            abilita: "Forza",
            hpLv: 100,
            manaLv: 40,
            attackLv: 40,
            image:"http://orig15.deviantart.net/7e6d/f/2016/058/d/0/strider_hiryu_kof_style_by_metal_warrior_by_themetalwarrior666-d9t943l.gif",
            description:"Classe abituata a prendere tante botte da chiunque tanto che un giorno, tornando da una spedizione, è svenuto all'improvviso e si è risvegliato credendo di essere Don Chisciotte."
        },
        {
            id: 2,
            name: "Mago Somago",
            abilita: "Intelligenza",
            hpLv: 60,
            manaLv: 80,
            attackLv: 80,
            image:"http://orig15.deviantart.net/7e6d/f/2016/058/d/0/strider_hiryu_kof_style_by_metal_warrior_by_themetalwarrior666-d9t943l.gif",
            description:"Classe dotata di un abbondante panza alcolica dovuta ad un uso eccessivo di alcolici, pozioni di mana ed in particolar modo dalla sua vita sedentaria di un comune programmatore in Angular."
        },
    ];
    
    //-----Public API------
      
    this.get = () =>{
        return roles;
    };
    
    
    //METODO PER TROVARE IL RUOLO DI UN GIOCATORE
    this.getRole = (idRolePlayer, levelPlayer) => {
        
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

