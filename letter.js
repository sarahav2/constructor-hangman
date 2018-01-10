var Letter = function(ltr) {
    // property to store the actual letter
      this.letter = ltr;
    // property/boolean if the letter can be shown
      this.appear = false;
    
};
    
    // export to use in word.js
    module.exports = Letter;