var mongoose= require("mongoose");
var Schema= mongoose.Schema;

var playerSchema= new Schema ({
    name : {
        type: String,
        unique: true,
    },
    sex: String,
    role: String,
    level: Number,
    exp: Number,
    hp: Number,
    hpMax: Number,
    mana: Number,
    manaMax:Number,
    att: Number,
    def: Number,
    gold: Number,
    isAlive : Number,
    image: String,
    // inventory: Object,
    manaPotion : Number,
    healthPotion : Number,
    createdAt: Date,
});

var Player = mongoose.model('Player', playerSchema);
module.exports = Player;