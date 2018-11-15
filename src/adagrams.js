



//the Adagrams object is used here as the equivalent of a Ruby module.
// letterPool is now a property of Adagrams so if I want to call it later I need to do this.letterPool
const Adagrams = {
  letterPool: [
    'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
    'B', 'B',
    'C', 'C',
    'D', 'D', 'D', 'D',
    'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
    'F', 'F',
    'G', 'G', 'G',
    'H', 'H',
    'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
    'J',
    'K',
    'L', 'L', 'L', 'L',
    'M', 'M',
    'N', 'N', 'N', 'N', 'N', 'N',
    'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O',
    'P', 'P',
    'Q',
    'R', 'R', 'R', 'R', 'R', 'R',
    'S', 'S', 'S', 'S',
    'T', 'T', 'T', 'T', 'T', 'T',
    'U', 'U', 'U', 'U',
    'V', 'V',
    'W', 'W',
    'X',
    'Y', 'Y',
    'Z'
  ],

  // [ 'E', 'L', 'W', 'L', 'M', 'A', 'I' ]
  //the letter must be from the array
  //it can't be repeated
  //

  drawLetters() {
    //draw 10 random letters from letterPool
    const shuffled = this.letterPool.sort(() => .5 - Math.random());// shuffle
    let randomLetters = shuffled.slice(0, 10) ; // 10 random letters in an array
    return randomLetters;
  },

  //wordArray = ['D','O','G']
  usesAvailableLetters(word, drawn) {
    let wordArray = word.split('');
    if (wordArray.length < drawn.length) {
      for (let letter of wordArray ) {
        if (drawn.includes(letter)) {
          drawn.splice(drawn.indexOf(letter), 1); //Find the index position of "foo," then remove one element from that position
        }
        else {
          return false;
        }
      }
    }
    return true;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
// This line is necessary to allow our unit test file (specs/adagrams.spec.js) to import the Adagrams "module" and call the functions within it.
