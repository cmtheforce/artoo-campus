angular.module('artoo').service('PlayerSrv', function($resource){
    
  var Players = $resource('/api/players', {},{});
  
});