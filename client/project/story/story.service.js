angular.module('artoo').service('StorySrv', function ($resource) {
    
    var Story = $resource('/api/story/:action', {},{
        getStoryStep: {
            method: 'GET',
            params: {
                action: 'details',
            },
        },
        getCurrentStep: {
            method: 'GET',
            params: {
                action: 'current',
            }
        }
    });
    
//   this.getStoryStep = () => {
//       return Story.getDetails().$promise;
//   }

    
})