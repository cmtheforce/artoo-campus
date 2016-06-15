angular.module('artoo').service('ForeingSrv', function(){
    
    this.checkVisibilityCreation = true;
     
    this.finishCreation = () => {
        this.checkVisibilityCreation = false;
    };
    
    this.barProgression=(min, max)=>{
     return (min/max)*100;
    }
});