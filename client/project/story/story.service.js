angular.module('artoo').service('StorySrv', function ($resource) {
    
    this.story = {};
    
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
    
    this.getCurrentStep = () => {
        return Story.getCurrentStep().$promise;
    }
    
    this.getStoryStep = (id) => {
        return Story.getStoryStep({id : id}).$promise;
    }
    
    
})