angular.module('artoo').controller('UsersCtrl', function($scope, UsersSrv){
    this.UsersSrv = UsersSrv;
    $scope.loading = true;
    //GESTISCE IL RISULTATO
    UsersSrv.query().then((data) => {
        $scope.loading = false;
        //PROMESSA MANTENUTA
        $scope.users = data;
    })
    .catch((err) => {   
        console.error(err);
    });
    
    //PRENDERE I DETTAGLI
    $scope.getDetails = (id) =>{
        $scope.loading = true;
        //FACCIO UNA CHIAMATA AL SERVER
        UsersSrv.get({id : id}).then((data) => {
            $scope.loading = false;
            $scope.userDetails = data;
            //PERMETTE DI AGGANCIARE I DATI AL FORM
            $scope.user = data;
        });
    };
    
    $scope.remove = (user) =>{
        $scope.loading = true;
        user.$remove({id: user.id})
        .then((data) => {
            console.info(data);
            $scope.loading = false;
        })
        .catch();
    };
    
    
    //DEVO CREARMI UN OGGETTO USER
    $scope.user = UsersSrv.create();
    
    //CREAZIONE NUOVO UTENTE
    $scope.save = (user, form) => {
        $scope.loading = true;
        $scope.user = UsersSrv.create();
        //2xx NEL THEN, IL RESTO NEL CATCH
        user.$save().then((data) => {
            $scope.user = UsersSrv.create();
            form.$setPristine();
             $scope.loading = false;
            console.info(data);
        }).catch();
    }
});