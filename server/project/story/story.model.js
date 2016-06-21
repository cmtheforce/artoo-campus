var mongoose= require("mongoose");
var Schema= mongoose.Schema;

var storySchema = new Schema({
    typology: String,
    description : String,
    monster: Array,
    ability: String,
    abilityUsed: Boolean,
    done: Boolean,
});

var Story = mongoose.model('Story', storySchema);
module.exports = Story;