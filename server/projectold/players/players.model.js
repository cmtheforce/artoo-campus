var mongoose= require("mongoose");
var Schema= mongoose.Schema;

var playerSchema= new Schema ({
    idPlayer: Number,
    name : String,
    sex: String,
    role: Number,
    level: Number,
    exp: Number,
    hp: Number,
    hpMax: Number,
    mana: Number,
    manaMax:Number,
    att: Number,
    dif: Number,
    gold: Number,
    inventory: Object,
});

var Player = mongoose.model('Player', playerSchema);
module.exports = Player;