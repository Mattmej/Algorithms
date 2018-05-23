/*

This app will remove duplicate members of an array.
An array will first be passed in.
This array may or may not have duplicates.

An array will be returned.
This array will be the first array, but with no duplicate members.

*/

// initial array to be passed in
var firstArray = ["a", "b", "r", "s", "r", "z", "b"];
// var firstArray = [1, 2, 4, 100, 8, 4, 4, 2, 3, 1, 1, 9];

// array with no duplicates
var finalArray = [];

// array with duplicates
var duplicateArray = [];

// Now we will have to go through the firstArray and find a way to detect duplicate items.
// I will create a variable to hold a certain item to be checked against other items.
var storedItem;

console.log(firstArray);


// This loop will go through the entries of the firstArray.
// If there are duplicates, then they will be removed.

// We will need to loop through the array for each entry.
// So if an array has 7 elements, the loop will execute 7 times.

/*

Loop 1: Compare firstArray[0] to all elements after firstArray[0]
Loop 2: Compare firstArray[1] to all elements after firstArray[1]
...
Loop n: Compare firstArray[n] to all elements after firstArray[n] (none at this point)

*/


for (i = 0; i < firstArray.length; i++) {                                       // loops through storedItem entries of firstArray
    storedItem = firstArray[i];
    console.log("\nCurrent item: " + storedItem);
    console.log("Outer Loop Index: " + i);
    console.log("==================");

    for (j = i + 1; j < firstArray.length; j++) {                               // loops through all other firstArray elements
        console.log("Inner Loop Index: " + j);
        console.log("Compared Item: " + firstArray[j] + "\n");

        // if the current item is equal to the one it is being compared to, then...
        if (storedItem === firstArray[j]) {                                     
            console.log("\nDuplicate Item: " + firstArray[j] + "\n");

            // pushes the item into the duplicateArray.
            duplicateArray.push(storedItem);
        }

        // Otherwise, the loop will continue.
        else {
            continue;
        }
    }

    // If the duplicateArray does NOT contain the storedItem, then...
    if (!duplicateArray.includes(storedItem)) {

        // push the storedItem into the finalArray.
        finalArray.push(storedItem);
        console.log(storedItem + " pushed into finalArray!");
    }

}

// Display the final array.
console.log(finalArray);