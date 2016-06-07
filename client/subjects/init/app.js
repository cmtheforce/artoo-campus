// define app module
// define a run function

//DICHIARO IL MODULO E LA FACCIO PARTIRE
var app = angular.module("artooInit",[])
                // STATO PRE RUN
                .config(angular.noop)
               /* .run(function(){
                })*/
                //MODO ALTERNATIVO 
                .run(() => {
                     console.info("I run in the setter!");
                });
//SI UTILIZZA IL SOTTOSTANTE
//RICHIAMO IL MODULO
angular.module("artooInit")
       .run(() => {
            console.info("I run in the getter!!");
        });


app.run(function(){
    console.info("I run from the module in the var!!");
});