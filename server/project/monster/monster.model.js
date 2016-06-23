var mongoose= require("mongoose");
var Schema= mongoose.Schema;

var MonsterSchema = new Schema({
    name: String,
    hpMax : Number,
    hp : Number,
    manaMax : Number,
    mana: Number,
    attack: Number,
    def: Number,
    exp: Number,
    image: String,
    description: String,
});

var Monster = mongoose.model('Monster', MonsterSchema);
module.exports = Monster;