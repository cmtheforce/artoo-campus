angular.module('artoo').component('items', {
    // NON POSSO UTILIZZARE ENTRMABI
    // SPECIFICO UN FILE
    templateUrl: 'subjects/components/items/items.html', 
    // TEMPLATE LO CREI DIRETTAMENTE DA CODICE
//   template: '<div class="item">Item: </div>',
    controller : 'ItemsCtrl',
    // IL DEFAULT E' $ctrl
    controllerAs : 'ItemsCtrl',
    bindings : {
        // INPUT @
        // ONE TIEM BINDINGS <
        // items : "<",
        typology : '<',
    },
});