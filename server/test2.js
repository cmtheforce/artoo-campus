var mongoose = require('mongoose');
var settings = require("./settings.json");
//SERVE PER LA GESTIONE DELLE PROMISE
mongoose.Promise = require('bluebird');

mongoose.connect(settings.mongoUrl, function(){
    console.info("Connection success!!");
});

//CREO UNO SCHEMA
var Schema = mongoose.Schema;
//CREO LA COLLEZIONE USER
var userSchema = new Schema({
    name: String,
    surname: String,
    birthdate: Date,
    updatedAt: Date,
});

userSchema.methods.greet = function (name){
    //IL THIS E' L'ENTITA' CHE ESEGUE LA FUNZIONE
    console.log("Hello " + name + " from " + this.name + "!");
};

userSchema.methods.sayAge = function() {
    var today = new Date();
    var age = today.getFullYear() - this.birthdate.getFullYear();
    
    console.log("Vecchio di " + age + " anni");
}

//MIDDLEWARES
userSchema.pre('save', function (next){
    this.updatedAt = new Date();
    console.log("SAVING updatedAt");
    
    //PER GLI ERRORI
    var err;
    //CONDIZIONE
    //........
    //SE E' UNDEFINED PROSEGUE CON IL SALVATAGGIO
    next(err);
})
//DEVO METTERLO ALAL FINE DI TUTTA LA CONFIGURAZIONE
var User = mongoose.model('User', userSchema);

var john = new User({
    name: 'Johnna',
    surname: 'Buzzurro',
    birthdate : new Date(1990, 2, 17),
});

//REMOVE
// User.findOne({name: "Johnna Buzzurro"}).exec()
// .then((user) => {
//     return user.remove();
// }).then((data) => {
//     console.info("User Deleted!!");
// }).catch((err) => {
//     console.error(err);
// });

//UPDATE
User.findOne({name: "John"}).exec()
.then((user) =>{
    user.name = "John";
    user.surname = "Buzzurro";
    return user.save();
})
.then(() => {
    console.log("User Updated!!")
})
.catch((err) => {
    console.error(err);
});



//CREA UN ID
console.log(john.id);
john.greet("Buzzurra");
john.sayAge();
// john.save().then(() => {
//     console.log("User added!!");
// }).catch((err) => {
//     console.error("Error insert user: " + err);
// });

//CREO UN SERVER
var express = require("express");
var app = express();

app.listen(8080, function (){
    console.info("Server is up and running!!");
})