// console.log("hello world from " + process.env.NODE_ENV + " environment");

//SI TRATTA DI UNA FUNZIONE
// var myModule = require("./exercises/myModule.js");
//SI TRATTA DI UN OGGETTO
// var myModule = require("./exercises/myModule.js")();
// // console.log(myModule.sayHello("Buzzurro"));

// var http = require('http');

// var server = http.createServer(function (req, res){
//   res.write("<h1>Hello pirla from server </h1>");
//   res.end();
// });

// server.listen(8080,'0.0.0.0', function (){
//   console.log('Server is running!!'); 
// });
//RICHIAMO I MODULI PER POTERLO UTiLIZZARE 

// EXPRESS
var express = require('express');
var app = express();

//RICHIEDO IL MODULO
var users = require('./exercises/users');
//LO ATTACCO ALLA MIA APP
app.use('/users', users.router);

//RICHIEDO I MODULI
var items = require('./exercises/items');
app.use('/items', items.router);

app.listen(8080, function (){
   console.log("Server Express is running"); 
});

// app.get('/', function(req,res){
// //   console.log(req);
// //   res.send("<h1>Hello Pirla</h1>"); 
//     res.redirect('/users');
// });


// //PRENDO DEI PARAMETRI
// //SUL PRIMO PARAMETRO SCRIVO SOLO GLI URL PARAMETER
// app.get('/reverse/:string', function(req, res){
//     var input = req.params.string;
//     var output = input.split('').reverse().join('');
//     if (req.query.uppercase !== 'false') {
//         output = output.toUpperCase();
//     }
//     if(req.query.spaced){
//         output = output.split('').join(' ');
//     }
//     res.send(output);
// });
