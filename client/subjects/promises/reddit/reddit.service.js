angular.module('artoo').service('RedditSrv', function($resource){
    var Reddit = $resource('https://www.reddit.com/search.json?q&sort',{
        // DI DEFAULT PRENDE I PIU' NUOVI
        sort: 'new',
    },{
        query: {
            method: 'GET',
            isArray: false,
        }
    });
    
    this.query = (params) => {
      return Reddit.query(params).$promise;  
    };
    
});