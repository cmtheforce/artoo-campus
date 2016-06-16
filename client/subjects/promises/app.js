angular.module('artoo', [
  'appbar',
  // UTILIZZO LA LIBRERIA
  'ngResource',
])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'Promises', url: 'subjects/promises'});
  });