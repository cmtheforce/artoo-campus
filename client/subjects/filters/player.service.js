angular.module('artoo').service('PlayerSrv', function(){
    var player = {
        
        name:"Buzzurro", 
        race:"dwarf",
    };
    
    this.get = () => {
        return player;
    };
});