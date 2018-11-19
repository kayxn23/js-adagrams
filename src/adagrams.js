



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

  //iterate through the keys of the score chart
  // if keys.include(character) add that value to the total score
  scoreWord(word) { //word comes in as a string 'Dog'
  const scoreChart = {
    'AEIOULNRST': 1,
    'DG': 2,
    'BCMP': 3,
    'FHVWY': 4,
    'K': 5,
    'JX': 8,
    'QZ': 10
  };

    if (Array.isArray(word) && word.length === 0) return 0 ;
    let wordArray = word.toUpperCase().split(''); //make upcase array ['D','O','G']
  // adds  8 extra points if the word is 7 or more characters
    let totalScore = 0;
    for (let letter of wordArray) {
      for (let key in scoreChart) {
        if (key.includes(letter)) {
          totalScore += scoreChart[key];
        }
      }
    }
    if (word.length >= 7) {
      return totalScore += 8;
    }
    else {
      return totalScore;
    }
  },


  // let doubled = arr.map(num => {
  //     return num * 2;
  // });


  highestScoreFrom(words){
    let scoresWords = [];
    for (let word of words) {
      let scoreHash = {"score": this.scoreWord(word), "word": word}; //  { score: 8, word: 'X' }
      scoresWords.push(scoreHash); //[{ score: 8, word: 'X' }, { score: 9, word: 'XX' }]
    }
    const maxScore = Math.max(...scoresWords.map(el => {
      return el["score"];
    }));

    const wordsWithMaxScore = scoresWords.filter(el => {
      return el["score"] == maxScore;
    });

    if (wordsWithMaxScore.length == 1) {
      return wordsWithMaxScore[0];
    } else {
      const wordsWithMoreThanTenChars = wordsWithMaxScore.filter(el => {
        return el["word"].length >= 10;
      });

      if (wordsWithMoreThanTenChars.length == 1) {
        return wordsWithMoreThanTenChars[0];
      }

      const minLength = Math.min(...wordsWithMaxScore.map(el => {
        return el["word"].length;
      }));

      const wordsWithFewerLetters = wordsWithMaxScore.filter(el => {
        return el["word"].length == minLength;
      });

      return wordsWithFewerLetters[0];

    }

    //9

    // return maxScore;
    //[{ score: 8, word: 'X' }, { score: 8, word: 'XX' }, { score: 1, word: 'XX' }]
    //[{ score: 8, word: 'X' }, { score: 9, word: 'XX' }, { score: 1, word: 'XX' }]

    //[{ score: 8, word: 'X' }, { score: 8, word: 'XX' }]
    //[{ score: 9, word: 'X' }]

    //if there are no ties whoever has the highest score wins

    //if scores tie...1)one is 10+ characters it wins 2)neither is 10+ the one with fewer letters win
    //3)lengths equal first one wins



  },

};

// const key = "hello";
// object[key] == object["hello"]
// object.key == object["key"]
// Do not remove this line or your tests will break!
export default Adagrams;
// This line is necessary to allow our unit test file (specs/adagrams.spec.js) to import the Adagrams "module" and call the functions within it.
