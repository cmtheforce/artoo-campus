angular.module('artoo').service('CombatSrv', function (StorySrv, MonsterSrv, PlayerSrv) {
   
    //NEL SERVICE LE VARIABILI SONO PRIVATE
    this.descriptionStep = "asd";
    this.enableCombat = false;
    this.monster = {};
    this.combatDone = false;
   
    StorySrv.getCurrentStep()
    .then((storyStart) => {
        this.descriptionStep = storyStart.description;
        var monsterStory = storyStart.monster;
        //console.log(monsterStory);
        MonsterSrv.getDetails(monsterStory).then((data) => {
            this.monster = data;
        });
    }); 
    
    this.getCombatDone = () => {
        return this.combatDone;
    }
    this.setCombatDone = (value) => {
        this.combatDone = value;
    }
    
    this.getDescription = () => {
        return this.descriptionStep;
    }
    
    this.getMonster = () => {
        return this.monster;
    }
    
    this.getEnableCombat = () => {
        return this.enableCombat;
    }
    
    this.setEnableCombat = () => {
        this.enableCombat = true;
    }
    
});