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

var test1 = "The quick brown fox jumped over the lazy dog";
var test2 = "May the force be with you";
var test3 = "Google do a barrel roll";
var test4 = "What is the average airspeed velocity of an unladen swallow";
var test5 = "What if we try a super-long word such as otorhinolaryngology";

function findLongestWord(str) {
    
    var wordArray = str.split(" ");
    // console.log(wordArray);
    var longestWord = wordArray[0];

    for (i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > longestWord.length) {
            longestWord = wordArray[i];
        }

        else {
            continue;
        }
    }
    // console.log(longestWord);
    return longestWord.length;

    // return str.length;
  }
  
//   findLongestWord("The quick brown fox jumped over the lazy dog");

console.log("Length of sentence 1: " + findLongestWord(test1));
console.log("Length of sentence 2: " + findLongestWord(test2));
console.log("Length of sentence 3: " + findLongestWord(test3));
console.log("Length of sentence 4: " + findLongestWord(test4));
console.log("Length of sentence 5: " + findLongestWord(test5));

  