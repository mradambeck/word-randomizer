/************
 * DATABASE *
 ************/



function create(req, res) {
  console.log('req: ', req.body);
  // res.json(req.body);
  var text = req.body.text;

  var shuffleArray = function(array) {
    for (var i = array.length -1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  var randomizeString = function(string) {
    var stringArray = string.split(' ');
    stringArray = shuffleArray(stringArray);

    return stringArray.join(' ');
  };

  var randomizedText = randomizeString(text);

  res.json(randomizedText);

}


// export public methods here
module.exports = {
  create: create
};
