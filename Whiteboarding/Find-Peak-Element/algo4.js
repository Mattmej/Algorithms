/*

Goal: Finding a Peak Element

////////////////////////////////

peak element - an element greater than its neighbors

num[-1] = -[infinity]
In other words, a negative number in the array will always be the lowest element
    if all the other array elements are positive numbers.

Example: var array = [1, 2, 3, 1]
            findPeak();     // will return 3

//////////////////////////////////

Game plan:
1. Create an array of numbers.
    a. Can contain positive and negative numbers.
2. Create a "for" loop that goes through each element of the number array.
    a. Create two variables to hold two consecutive numbers.
    b. Compare the two numbers -> 3 cases.
        i. Case 1: num1 > num2
                    num1 stored for next comparison
        ii. Case 2: num1 < num2
                    num2 stored.
        iii. Case 3: num1 = num2
                    store whichever number for next comparison.
    c. Whichever number wins out for bigger number will go on to the next comparison.
        i. Case 1: storedNum > num3
                    storedNum stays the same
        ii. Case 2: storedNum < num3
                    num3 is now storedNum
        iii. Case 3: storedNum = num3
                    storedeNum stays the same
    d. Loop continues.
    d. At the end of the loop, the biggest number will be displayed via an alert.
    

*/

var numArray = [1, 2, 3, 1, 5, 7, -1];      // peak element will be 7

// var numArray = [6, 6, 6, 6, 9, 1]

for (i = 0; i < numArray.length - 1; i++) { // loop from i = 0 to i = 5
    var num1 = numArray[i];
    var num2 = numArray[i+1];
    var storedNum = 0;

    if (num1 > num2 || num1 === num2) {
        storedNum = num1;
    }

    else if (num1 < num2) {
        storedNum = num2;
    }
}

// alert("The peak element is " + storedNum);
console.log("The peak element is " + storedNum);