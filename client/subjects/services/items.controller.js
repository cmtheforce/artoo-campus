//PASSO TRA I PARAMETRI ANCHE IL SERVICE
angular.module('artoo').controller('ItemsCtrl', ($scope, ItemsSrv) => {
    
    //MODI DIVERSI PER BINDARE IL SERVIZIO AL CONTROLLER
    //QUESTA OPZIONE VIENE ESEGUITA SUBITO E CI POSSO ESSERE DEI PROBLEMI
    //QUANDO LA LISTA DEGLI OGGETTI CAMBIA
    // $scope.items = ItemsSrv.get();
    
    //UTILIZZO LE ULTIME 2 PER PASSARE DEI PARAMETRI
    
    //SE HO PIU' METODI SCELGO QUESTA RISPETTO A QUELLA SOVRASTANTE
    //CONSIGLIATO
    $scope.ItemsSrv = ItemsSrv;
});