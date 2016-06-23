var mongoose= require("mongoose");
var Schema= mongoose.Schema;

var roleSchema = new Schema({
    name: String,
    ability : String,
    hpLv: Number,
    manaLv: Number,
    attackLv: Number,
    def: Number,
    image: String,
    icon: String,
    description: String,
});

var Role = mongoose.model('Role', roleSchema);
module.exports = Role;