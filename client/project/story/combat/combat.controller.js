angular.module('artoo').controller('CombatCtrl', function ($timeout, CombatSrv, PlayerSrv, StorySrv, MonsterSrv, $state) {
    
    this.PlayerSrv=PlayerSrv;
    this.CombatSrv = CombatSrv; 
   
    var testoCombat = [];
    
    var numPlayer = 0;
    PlayerSrv.query()
    .then(data=> numPlayer=data.length)
   
    var turn=0;
    
    PlayerSrv.refresh();
    
    this.barProgression=(min, max)=>{
        return (min/max)*100;
    };
    
    this.finish = () => {
        $state.go('start');
    }

    this.nextTurn = () =>{
        // console.log("numero"+numPlayer);
        if (turn==numPlayer-1){
            turn=-1;
            this.actionBoss();
            return turn;
        }else{ 
            turn+=1
            // console.log("turno"+turn)
            return turn;
         }
    }
    
    this.logCombat = () => {
        return testoCombat;
    }
    
    this.updateCombat = (testo) => {
        if(testoCombat.length > 3){
            var app = testoCombat[2];
            testoCombat = [];
            testoCombat.push(app);
        }
        testoCombat.push(testo); 
        
    }
    
    this.actionBoss = () => {
        
        var monster = CombatSrv.getMonster();//Prendo mostro
        
        
        //Sceglie Player
        var playerLive= [];
        PlayerSrv.query()
            .then(data=> {
                data.forEach((singlePlayer) => {
                    if(singlePlayer.isAlive === 1){
                        playerLive.push(singlePlayer);
                    }
                });
            console.log(playerLive);
            if(playerLive.length == 0){
                $state.go('start');
            }
   
            var playerDaAttaccare = Math.random() * (playerLive.length);
            playerDaAttaccare = parseInt(playerDaAttaccare);    

            //Sceglie Tipo di Attacco
            var sceltaAtt=0;
            if(monster.mana >= 10){
                sceltaAtt= Math.random() * (3-1)+1
                sceltaAtt = parseInt(sceltaAtt);
            }
            else sceltaAtt=1;
                
                
               
            var randomDamage = 0;
                
            if(sceltaAtt === 1){
                randomDamage = Math.random() * (11- 1) + 1;
            }
            else{
                randomDamage = Math.random() * (21 - 11) + 11;
                monster.mana -= 20;
                MonsterSrv.update(monster);
            }
                
            var totalDamage = parseInt(randomDamage) + parseInt(monster.attack);
             
            
                    var player =  playerLive[playerDaAttaccare];
    
                    var danni = totalDamage - player.def;
                    
                    if(sceltaAtt === 1){ 
                        this.updateCombat(player.name + " ha subito " + danni + " danni!");   
                    }
                    else{
                        this.updateCombat(player.name + " ha subito un attacco speciale da " + danni + " danni!");
                    }
                    
                    if(player.hp<=danni){
                        player.hp=0;
                        player.isAlive=0;
                    }
                    player.hp -= danni;
                     
                    PlayerSrv.update(player);
                    this.nextTurn();
                    PlayerSrv.refresh();
              })
       
      
    }
    
    this.getTurn=()=>{
        return turn;
    }
    

    this.usePotion = (typology, player) => {
        if(typology == "mana"){
            player.manaPotion--;
            if(player.manaMax < player.mana + 20){
                player.mana = player.manaMax;
            }
            else {
                player.mana += 20;
            }
            this.updateCombat(player.name + " ha usato una pozione di mana!");
        }
        else{
            player.healthPotion--;
            if(player.hpMax < player.hp + 40){
                player.hp = player.hpMax;
            }
            else{ 
                player.hp += 40;
            }
            this.updateCombat(player.name + " ha usato una pozione di vita!");
        }
        
        PlayerSrv.update(player);
        this.nextTurn();
    }
    
    this.attack = (type, player, monster) => {
        
        var randomDamage = 0;

        if(type === "normal"){
            randomDamage = Math.random() * (11- 1) + 1;
        }
        else{
            randomDamage = Math.random() * (21 - 11) + 11;
            player.mana -= 20;
            PlayerSrv.update(player);
        }
        
        var finalAttack = parseInt(player.att) + parseInt(randomDamage);
        
        if(type === "normal"){
           this.updateCombat(player.name + " ha inflitto " + finalAttack + " danni al mostro!");
        }
        else{
            this.updateCombat(player.name + " ha inflitto un attacco speciale da " + finalAttack + " danni al mostro!");
        }
        
        
        if(monster.hp <= finalAttack){
            monster.hp = 0;
            CombatSrv.setCombatDone(true);
        }
        else{
            monster.hp -= finalAttack;
        }
        
        MonsterSrv.update(monster);
        
        this.nextTurn();

    }
    
});