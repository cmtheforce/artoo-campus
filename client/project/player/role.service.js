angular.module('artoo').service('RoleSrv', function ($resource) {
    var Role = $resource('/api/roles/:action', {}, {
        getDetails: {
            method: 'GET',
            params: {
                action: 'details',
            },
        }
    });
    
    this.getDetails = (id) => {
        return Role.getDetails({id: id}).$promise;
    };
    
    this.query = () => {
        return Role.query().$promise;  
    };
});