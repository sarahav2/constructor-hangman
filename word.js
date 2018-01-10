var Letter = require('./letter.js');

function Word(wrd) {
    var that = this;
    //store the string wrd
    this.word = wrd;
    //collection of letter objects
    this.letters = [];
    this.wordFound = false;

    this.getLets = function() {
     //populate the collection above with new Letter objects
        for(var i = 0; i<that.word.length; i++){
          var newLetter = new Letter(that.word[i]);
          this.letters.push(newLetter);
        }
      
    };



};


module.exports = Word;