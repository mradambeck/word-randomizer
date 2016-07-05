/************
 * DATABASE *
 ************/

var db = require('../models');

function create(req, res) {
  console.log('body: ', req.body);
  var text = req.body;

  var randomizeString = function(string) {
    var stringArray = string.split(' ');
    stringArray = shuffleArray(stringArray);
    return stringArray.join(' ');
  };

  var shuffleArray = function(array) {
  	for (var i = array.length -1; i > 0; i--) {
  		var j = Math.floor(Math.random() * (i + 1));
  		var temp = array[i];
  		array[i] = array[j];
  		array[j] = temp;
  	}
  	return array;
  };

  var randomizedText = randomizeString(text);

  res.json(randomizedText);

}

// // GET /api/texts
// function index(req, res) {
//   db.Text.find({}, function(err, allTexts) {
//     res.json(allTexts);
//   });
// }
//
// function show(req, res) {
//   db.Text.findById(req.params.textId, function(err, foundText) {
//     if(err) { console.log('textsController.show error', err); }
//     console.log('textsController.show responding with', foundText);
//     res.json(foundText);
//   });
// }
//
// function destroy(req, res) {
//   db.Text.findOneAndRemove({ _id: req.params.textId }, function(err, foundText){
//     // note you could send just send 204, but we're sending 200 and the deleted entity
//     res.json(foundText);
//   });
// }
//
// function update(req, res) {
//   console.log('updating with data', req.body);
//   db.Text.findById(req.params.textId, function(err, foundText) {
//     if(err) { console.log('textsController.update error', err); }
//     foundText.artistName = req.body.artistName;
//     foundText.name = req.body.name;
//     foundText.releaseDate = req.body.releaseDate;
//     foundText.save(function(err, savedText) {
//       if(err) { console.log('saving altered text failed'); }
//       res.json(savedText);
//     });
//   });
//
// }
//

// export public methods here
module.exports = {
  create: create
  // index: index,
  // create: create,
  // show: show,
  // destroy: destroy,
  // update: update
};
