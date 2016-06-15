angular.module('artoo', [
  'ngMessages',
  'ngAria',
  'ngAnimate',
  'ngMaterial',
  'ui.router',
])
  .config(($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .warnPalette('orange')
        .accentPalette('brown')
        .backgroundPalette('grey');
         
  })
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('createCharacter', {
        templateUrl : 'project/player/player.html',
        controller : 'PlayerCtrl',
        controllerAs : 'PlayerCtrl',
        url: '/createCharacter',
      })   
      
      .state('storyEvent',{
        templateUrl: 'project/story-event/story-event.html',
        controller: 'StoryEventCtrl',
        controllerAs: 'StoryEventCtrl',
        url: '/event',
        
      })
    
      .state('storyCombat',{
        templateUrl: 'project/story-combat/story-combat.html',
        controller: 'StoryCombatCtrl',
        controllerAs: 'StoryCombatCtrl',
        url: '/combat',
      });
      
      $urlRouterProvider.otherwise('/');
  });