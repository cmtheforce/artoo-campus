angular.module('artoo').service('PlayerSrv', function($state, $mdToast, $resource, $mdDialog, StorySrv){
    
    this.players= {};
    
    this.player;
    
    this.showToast = function(text) {
      var toast = $mdToast.simple()
      .textContent(text)
      .action('OK')
      .position('top right')
      .highlightAction(false);                     
      $mdToast.show(toast);
    };
    
    var Players = $resource('/api/players/:action', {},{
        findByName: {
            method: 'GET',
            params: {
                action: 'find',
            },
        },
        updatePlayer: {
            method: 'POST',
            params: {
                action: 'update',
            }
        },
    });
  
    this.alAlive = () => {
        return Players.allAlive({isAlive: 1}).$promise;
    }
  
    this.findByName = (name) => {
        return Players.getDetails({name: name}).$promise;
    };
        
        
        
    this.create = (player) => {
        new Players(player).$save()
        .then(this.queryPlayers)
        .catch((err) => {
            if(err.status === 406){
                this.showToast('Nome già in uso!');
            }
        });
    };
  
  
  
    this.finishCreation = (ev) => {
        
        var confirm = $mdDialog.confirm()
                             .title('Inizia avventura?')
                             .textContent('Una volta creati i personaggi non potranno essere ' +
                                          'modificati durante l\'avventura.')
                             .targetEvent(ev)
                             .ariaLabel('Inizia avventura?')
                             .ok('Sì')
                             .cancel('Ma anche no');
        $mdDialog.show(confirm).then(() => {
            
            StorySrv.getCurrentStep().then((storyStart) => {
                storyStart.typology === 'combat' ? $state.go("storyCombat") : $state.go("storyEvent");
            });
        });
    }

    // this.selectedPlayer=(player)=>{
    //     console.log('aaa');
    //     this.player=player;
    //     this.getterPlayer();
    // }
    
    
    // this.getterPlayer=(player)=>{
    //  console.log("get")
    //     return this.player
    // }


   this.refresh=()=>{
    this.queryPlayers(function (){this.getPlayers();})
   }
  
    this.remove = () => {
        Players.delete();
        this.refresh();
    };
  
    this.query = () => {
       return Players.query().$promise;
    }
  
  
  
    this.queryPlayers = () => {
        Players.query().$promise
        .then((data) => this.players=data);
       // return Players.query().$promise;
    };
    
    
    
    //UPDATE DA FARE
    this.update = (player) => {
        Players.updatePlayer(player).$promise
        .then();
    };
    
    
    
    this.getPlayers = () => {
        var list= [];
        for(var i=0; i<this.players.length; i++){
            list.push(this.players[i])
        }
        return list;
    };
    
});