function index(req, res) {
  res.json({
    title: "Cut-Ups API!",
    message: "Welcome to my CutUp's API! This allows you to send a string of text and get back a randomized version.",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints."},
      {method: "POST", path: "/api/texts", description: "This will process a string of text and respond with a randomized version."}
    ]
  });
}

function templates(req, res) {
  var name = req.params.name;
  res.render('templates/' + name);
}

module.exports.index = index;
module.exports.templates = templates;
