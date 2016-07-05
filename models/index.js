var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/portfolio");

var Project = require('./project');

module.exports.Project = Project;
