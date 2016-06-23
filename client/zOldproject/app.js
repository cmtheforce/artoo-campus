angular.module('artoo', [
  'ngMessages',
  'ngAria',
  'ngAnimate',
  'ngMaterial',
  'ui.router',
  'ngResource',
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
      .state('start', {
        templateUrl: 'project/intro/intro.html',
        controller: 'IntroCtrl',
        controllerAs: 'IntroCtrl',
        url: '/',
      })
      .state('createCharacter', {
        templateUrl : 'project/player/player.html',
        controller : 'PlayerCtrl',
        controllerAs : 'PlayerCtrl',
        url: '/createCharacter',
      })   
      
      $urlRouterProvider.otherwise('/');
  });