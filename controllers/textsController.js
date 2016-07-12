/************
 * DATABASE *
 ************/

function create(req, res) {
  // console.log('req: ', req.body);

  var text = req.body.text;
  var wantsLineBreaks = req.body.lineBreaks;
  wantsLineBreaks = (wantsLineBreaks === 'true'); // converts String to Boolean

  var countWordsPerLine = function(string){
    var wordCount = [];
    var splitLineArray = string.split(/\n/g);
    for (var k = 0; k < splitLineArray.length; k++){
      var thisLineWordArray = [];
      thisLineWordArray.push(splitLineArray[k].split(' '));
      wordCount.push(thisLineWordArray[0].length);
    }
    return wordCount;
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

  var randomizeString = function(string) {
    var stringArray = string.split(' ');
    stringArray = shuffleArray(stringArray);

    return stringArray.join(' ');
  };
  var randomizedText = randomizeString(text);

  // If they want to maintain linebreaks, do it, otherwise just shoot it back
  if (wantsLineBreaks) {
    var strippedText = randomizedText.replace(/\n/g,' '); //remove any places where there is a lineBreak in the provided text
    var lineBreakArray = countWordsPerLine(text); //counts how many words should be in each line
    var randomizedTextArray = strippedText.split(' ');
    var linesToReturn = [];

    // for each line, go through and add the appropriate word amount to each one
    for (var line = 0; line < lineBreakArray.length; line++) {
      var thisLine = randomizedTextArray.splice(0,lineBreakArray[line]);
      thisLine = thisLine.join(' ');
      linesToReturn.push(thisLine);
    }
    linesToReturn = linesToReturn.join('\n');
    res.json(linesToReturn);

  } else {
    res.json(randomizedText);
  }

}


// export public methods here
module.exports = {
  create: create
};
