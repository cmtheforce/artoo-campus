angular.module('artoo').filter('gold', function (){
    return function(input, currency = true){
        var output = input.toFixed(2);
        // IL FILTRO MI METTE 2 CIFRE DOPO LA VIRGOLA
        return (currency) ? output + " Big-Money" : output;
        };
    });
