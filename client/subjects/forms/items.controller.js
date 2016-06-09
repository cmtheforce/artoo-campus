angular.module('artoo').controller('ItemsCtrl', function ($scope, ItemsSrv) {
    
  $scope.items = [];
  $scope.ItemsSrv = ItemsSrv;
  var master;
  
   $scope.selectItem = (code) => {
        //FACCIO IL COPY PER NON TOCCARE LE REFERENZE
        $scope.item = angular.copy(ItemsSrv.find(code));
        //MODO PER COPIARE UN OGGETTO IN JAVASCRIPT
        //  $scope.item = JSON.parse(JSON.stringify(ItemsSrv.find(code)));
        master = angular.copy($scope.item);
  }
  
//VARIABILE DEL SELECT DOVE SELEZIONO IL PRIMO ELEMENTO DI ITEMS
   $scope.selectedItem = ItemsSrv.get()[0].code;
   $scope.selectItem($scope.selectedItem);
  
//  $scope.item = {
//         name: 'Ascia bipenne',
//         description: 'L\'ascia bipenne è una scure a due lame, simbolo del potere minoico.',
//         image: 'http://khazalidgrungron.altervista.org/axes/05.png',
//         };
  
  $scope.insert = function (item, form){
    // QUESTI 2 CONSOLE.INFO RESTITUISCONO LA STESSA COSA
    // PERCHE' QUANDO UTILIZZO NG-MODEL VIENE CREATA LA VARIABILE NELLO SCOPE
    //   console.info(text);
    //   console.info($scope.justAnInput);
    // console.info("Send message: " + text);
    
    // RICHIAMO LA FUNZIONE DEL SERVICE PER RIEMPIRE L'ITEM
    ItemsSrv.insert(item);
     // RESETTO I DATI DOPO IL BOTTONE
    $scope.resetForm(form);
  };
  
  $scope.update = (item, form) => {
      ItemsSrv.update(item);
      master = angular.copy(item);
  };
  
 
  
  $scope.resetForm = (form) => {
    //ITEM LO VEDE PERCHE VIENE CREATO CON ng-model
    // $scope.item = {};
    // form.$setPristine();
    $scope.item = angular.copy(master);
  };
  
  
});