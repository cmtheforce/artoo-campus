angular.module('artoo').component('item', {
    bindings: {
      // POSSO ASSEGNARE AD UN NUOVA VARIABILE QUELLO CONTENUTO IN ITEM
      item: '<data',  
    },
    controller : 'ItemCtrl',
    controllerAs : 'ItemCtrl',
    templateUrl : 'subjects/components/item/item.html',
});