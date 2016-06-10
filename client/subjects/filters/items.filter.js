angular.module("artoo").filter('price', function (){
    return function(input, currency = true){
        var output = input.toFixed(2);
        // IL FILTRO MI METTE 2 CIFRE DOPO LA VIRGOLA
        return (currency) ? output + " Gold" : output;
    };
}).filter('availability', function(){
    return function(input){
        // return parseInt(input) || 'out-of-stock'
        return (parseInt(input)==0) ? 'out-of-stock' : input + ' pieces';
    };
    // IL FILTRO DELLE RAZZE NON LO FACCIO CON NG-REPEAT PERCHE' SE DOVRO'
    // MODIFICARLO IN FUTURO BASTA CHE CAMBIO SEMPLICEMENTE IL FILTRO
}).filter('races', function(){
    return function (input){
        return input.join(', ') + ".";
    };
    // INIETTO IL SERVIZIO NELLA FUNCTION ESTERNA
}).filter('suitable', function(PlayerSrv){
    var race = PlayerSrv.get().race;
    return function(input){
        // INDEX OF CI DICE L'INDICE DI DOVE SI TROVA (-1 NON ESISTE)
        return input.indexOf(race) > -1;
    };
}).filter('suitability', function(PlayerSrv){
    var race = PlayerSrv.get().race; 
    return function(input, active){
        // LA FUNZIONE FILTER CICLA DENTRO GLI ARRAY
        return (active) ? input.filter(singleItem => singleItem.races.indexOf(race) > -1) :input
        // return (active && input.filter(singleItem => singleItem.races.indexOf(race) > -1)) || input;
    }
})
