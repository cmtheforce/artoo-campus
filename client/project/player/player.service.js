angular.module('artoo').service('PlayerSrv', function($resource){
    
     this.players= {};
    
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
        }
    });
  
    this.findByName = (name) => {
        return Players.getDetails({name: name}).$promise;
    };
        
    this.create = (player) => {
        new Players(player).$save()
        .then(this.queryPlayers);
    };
  
    this.remove = () => {
        Players.delete();
    };
  
    this.queryPlayers = () => {
        Players.query().$promise
        .then((data) => this.players=data);
       // return Players.query().$promise;
    };
    
    //UPDATE DA FARE
    // this.updatePlayer = () => {
        
    // };
    
    this.getPlayers = () => {
        var list= [];
        for(var i=0; i<this.players.length; i++){
            list.push(this.players[i])
        }
        return list;
    };
    
});