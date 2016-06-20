var mongoose= require("mongoose");
var Schema= mongoose.Schema;

var itemSchema= new Schema ({
    name: String,
    typology: String,
    price: Number,
    attack_weapon: Number,
    defence_armor: Number,
    health_potion: Number,
    mana_potion: Number,
    main_attack: Number,
    secondary_attack: Number,
});

var Item = mongoose.model('Item', itemSchema);
module.exports = Item;