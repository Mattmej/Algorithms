/*

Problem:

Given a sorted array of integers, every element appears twice except for one. Find that single one.

Game Plan:

1. Create sorted array of intengers; they will be in order from least to greatest, and there will be duplicates.
    * There will be one element that is not a duplicate. 
    * I need to find the duplicate.
2. Create a "for" loop that goes through each element of the array 
3. Create another "for" loop that compares the element in #2 with all the other elements after it.

*/

// var intArray = [1, 1, 1, 3, 3, 4, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 10, 10];
var intArray = [1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 6, 7, 7];
var currentNum;

var duplicateArray = [];
var uniqueArray = [];

console.log(intArray);

for (i = 0; i < intArray.length; i++) {

    currentNum = intArray[i];

    for (j = i + 1; j < intArray.length; j++) {
        if (currentNum === intArray[j]) {
            duplicateArray.push(currentNum);
        }
    }

    if (!duplicateArray.includes(currentNum)) {
        uniqueArray.push(currentNum);
    }
}

var uniqueNum = uniqueArray.toString();
console.log(uniqueNum);