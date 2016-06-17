angular.module('artoo').service('ItemsSrv', function ($resource){
    var Items = $resource('/api/items', {},{});
    
    //PUBLIC API
    this.create = () => {
        return new Items();
    };
    
    this.query = () => {
        return Items.query().$promise;
    }
})