var mongoose= require("mongoose");
var Schema= mongoose.Schema;

var playerSchema= new Schema ({
    name : String,
    sex: String,
    role: String,
    level: Number,
    exp: Number,
    hp: Number,
    hpMax: Number,
    mana: Number,
    manaMax:Number,
    att: Number,
    dif: Number,
    gold: Number,
    image: String,
    // inventory: Object,
    createdAt: Date,
});

var Player = mongoose.model('Player', playerSchema);
module.exports = Player;