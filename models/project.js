var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  title: String,
  short_description: String,
  long_description: String,
  github_link: String,
  live_site_link: String,
  image: String,
  thumbnail: String,
  technologies: Array,
  order: Number,
  active: Boolean
});

var Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
