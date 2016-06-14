angular.module('artoo', [
  'appbar',
  'ngMessages',
  'ngAria',
  'ngAnimate',
  'ngMaterial',
])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'Angular Material', url: 'subjects/material'});
  })
  
  .config(($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
         .primaryPalette('blue-grey')
         .warnPalette('orange')
         .accentPalette('brown')
         .backgroundPalette('grey');
  });