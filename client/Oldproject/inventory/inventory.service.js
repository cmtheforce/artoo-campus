angular.module('artoo').service('InventorySrv', function ($resource) {
    
    //SONO GLI INVENTARI INIZIALI
    var Inventories = $resource('/api/startInventory', {},{});
    
    var inventoryPlayers = {};
    
    //VARIABILE TEMPORANEA PER IDENTIFICARE GLI INVENTARI DEI PERSONAGGI
    // inventoryPlayers
    var idInventory = 0;

    //DEVO FARE UN METODO CHE MI CREA UN OGGETTO INVENTARIO
    //E LO PUSHO DENTRO INVENTORYPLAYERS
    
    //PUBLIC API
    //FUNZIONE PER RESTITUIRE GLI INVENTARI BASE DEI GIOCATORI
    this.query = () => {
        var inventoryServer = Inventories.query().$promise;
        inventoryServer.then((data) => {
            return data;
        }).catch();
    }
    
    //METODO PER CREARE GLI INVENTARI INIZIALI ALLA CREAZIONE
    this.createInventory = (player) =>{
       
      var inventory = {};
      inventory.id = idInventory;
      inventory.idPlayer = player.id;
      inventory.maxSlots = 20;
      inventory.items = [];
      //RIEMPIO L'INVENTARIO 
      this.getStartInventoryByRole(player.role);
    };
    
    this.getStartInventoryByRole = (idRolePlayer) => {
        
        //PRIMA DEVO CREARMI IL SERVER DOVE CHIAMARE IL JSON
        //DEVO POI PARSARLA E INSERIRE I DATI IN INVENTORYPLAYERS 
        //JSON.parse(jsonStr);
    };
});