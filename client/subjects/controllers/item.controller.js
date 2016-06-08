// create a controller for the items
//LO SCOPE E' UN OGGETTO SPECIALE CHE SI TROVA TRA CONTROLLER E VIEW
angular.module('artoo').controller('ItemsCtrl',($scope) => {
    console.log("ItemsCtrl runs!");

    $scope.item = {
        name : 'Ascia bipenne',
        description : 'L\'ascia bipenne è una scure a due lame, simbolo del potere minoico.',
        image : 'http://khazalidgrungron.altervista.org/axes/05.png',
        slots : 3,
    }; 
    
    $scope.dispose = () => {
        $scope.item = undefined;
    };
    
    $scope.toggleDescription = () => {
        $scope.visibleDescription = !$scope.visibleDescription;
        
    };
    
    $scope.checkIfFits = (item, bagSize) => {
        return item.slots <= bagSize;
    };
});
// attach the following data to it

/*
 * Ascia bipenne
 * L’ascia bipenne è una scure a due lame, simbolo del potere minoico.
 * Spazio occupato: 3 slots
 * http://khazalidgrungron.altervista.org/axes/05.png
 */

// attach some behaviours to the controller: read-description, check-if-fits, dispose
