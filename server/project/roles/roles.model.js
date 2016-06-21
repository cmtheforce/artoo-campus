var mongoose= require("mongoose");
var Schema= mongoose.Schema;

var roleSchema = new Schema({
    name: String,
    ability : String,
    hpLv: Number,
    manaLv: Number,
    attackLv: Number,
    image: String,
    description: String,
});

var Role = mongoose.model('Role', roleSchema);
module.exports = Role;