var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TextSchema = new Schema({
  original_text: String,
  randomized_text: String
});

var Text = mongoose.model('Text', TextSchema);

module.exports = Text;
