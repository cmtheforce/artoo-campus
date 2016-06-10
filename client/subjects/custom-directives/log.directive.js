angular.module('artoo').directive('log', function( $timeout, PlayerSrv){
    
    return {
        restrict : 'A',
        scope : {
            log: '@',
        },
        link: function (scope, elem, attrs){
            // ELEM E' L'OGGETTO
            elem.on('click', function ($e){
                // BISOGNA FARE UN TIMEOUT PER FORZARE IL REFRESH DELLA VIEW
                $timeout(() => {
                     PlayerSrv.log(scope.log);
                });
            });
        },
    };
});