angular.module('artoo').service('ItemsSrv', function ($resource) {
    var Items = $resource('/api/items', {},{});
    
    //PUBLIC API
    this.query = () => {
        console.log("ENTRA");
        return Items.query().$promise;
        
    }
    
    
    // //Public Function
    // this.getItems = () =>{
    //     this.query().then((items) => { 
    //         console.log("GETITEMS " + items);
    //          return items;
    //      }).catch((err)=>{
    //          return err;
    //      });
        
    // }
    
    
    
});