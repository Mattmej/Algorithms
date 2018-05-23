/* 
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays. 
*/


function largestOfFour(arr) {


    // We will take each individual element in the big array.
    // For each of the small arrays, we will run comparisons between the numbers.
    // The biggest number will go into a new array.
    // This "biggest number" array will then be returned.

    // this will store the largest numbers in each smaller array.
    var largestNumArray = [];

    // loop going through each element of the big array
    for (i = 0; i < arr.length; i++) {

        // the largest number will initially be set to the first element of each smaller array.
        var largestNum = arr[i][0];

        // This will log the first element of the given smaller array.
        console.log("\nArray " + (i + 1) + ", element 0 = " + arr[i][0]);

        // loop going through each element of the small array.
        for (j = 1; j < arr[i].length; j++) {


            // every time we go through the elements of the small array,
            // the largest number should be stored.
            // It shouldn't automatically be set to whatever the current number is.

            // I accomplished the above by placing the largestNum variable outside of this loop, inside the bigger loop.



            // This will hold the next element in the array beyond the first element.
            var nextNum = arr[i][j];

            // this will log each element of the smaller array (beyond the first element)
            console.log("Array " + (i + 1) + ", element " + j  + " = " + nextNum);

            // if the largestNum variable value is greater than or equal to the current element, then...
            if (largestNum > nextNum || largestNum === nextNum) {

                // ... nothing will change.
                largestNum = largestNum;
            }

            // Otherwise...
            else {

                // the largestNum variable will be set equal to the current element.
                largestNum = nextNum;
            }

            
            // arr[i]
        }

        console.log("Largest num for array " + (i + 1) + " = " + largestNum);
        largestNumArray.push(largestNum);
    }

    console.log("\n" + largestNumArray);
    console.log("\n================================================");

    return largestNumArray;




}
  

// largestOfFour([a, b, c, d]);
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])
  