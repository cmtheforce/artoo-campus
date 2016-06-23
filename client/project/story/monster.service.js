angular.module('artoo').service('MonsterSrv', function ($resource) {
    
    var Monster = $resource('/api/monster/:action', {},{
        getMonster: {
            method: 'GET',
            params: {
                action: 'details',
            },
        },
        updateMonster: {
            method: 'POST',
            params: {
                action: 'update',
            }
        },
        deleteAndCreate: {
            method: 'GET',
            params: {
                action: 'truncate',
            }
        }
    });
    
    this.deleteAndCreate = () => {
        Monster.deleteAndCreate().$promise.then();
    }
    
    this.getDetails = (mostroStoria) => {
        return Monster.getMonster({name: mostroStoria}).$promise;
    };
    
     //UPDATE DA FARE
    this.update = (monster) => {
        Monster.updateMonster(monster).$promise
        .then();
    };
    
    
 
})