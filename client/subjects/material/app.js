angular.module('artoo', [
  'appbar',
  'ngMessages',
  'ngAria',
  'ngAnimate',
  // BISOGNA INSERIRE LA DIPENDENZA DI ANGULAR MATERIAL
  'ngMaterial',
])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'Angular Material', url: 'subjects/material'});
  })
  // INSERISCO IL PROVIDER
  .config(($mdThemingProvider) => {
    $mdThemingProvider.theme('default').primaryPalette('blue-grey')
                                       .warnPalette('orange')
                                       .accentPalette('blue')
                                       .backgroundPalette('grey');
  });