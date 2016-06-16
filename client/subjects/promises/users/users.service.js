angular.module('artoo').service('UsersSrv', function($resource) {
    //CREO UNA RISORSA 
    //:id LO RENDE DINAMICO
    //SECONDO OGGETTO SONO I VALORI DI DEFAULT
    var User = $resource('http://jsonplaceholder.typicode.com/users/:id'
                // ,
                // {
                //     typology : 'users', 
                // },{
                //     retrieve: {
                //         isArray: true,
                //         Method: 'GET',
                //         params: {
                //             typology: 'posts',
                //         }
                //     }
                // }
                );
    
    this.get = (params) => {
        return User.get({id: params.id}).$promise;
    };
    
    this.query = () => {
        //MI ASPETTO LA PROMESSA
        return User.query().$promise;  
    };
    
    this.create = () => {
        return new User();
    };
});