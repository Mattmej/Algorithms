/*
Goal: Return the length of the longest word in the provided sentence.
Response should be a number.

Steps:
1. Make a function that accepts a string as an argument. This string will be a sentence.
2. The function will find the longest word.
    a. Words will be separated by spaces.
    b. Maybe create an array of the words?
3. The function will find the length of the longest word and return that number.
*/



function findLongestWord(str) {
    
    var wordArray = str.split(" ");
    console.log(wordArray);
    var longestWord;

    // for (i = 0; i < wordArray.length; i++) {

    // }

    // return str.length;
  }
  
  findLongestWord("The quick brown fox jumped over the lazy dog");
  