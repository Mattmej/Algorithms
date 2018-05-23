$(document).ready(function() {


    /*
    Method 1: 

    1. Ask for user input for a string.
    2. Create an empty array.
    3. Use unshift() method to place the string's characters into the array in reverse order.
        a. The first character will be pushed into the array.
        b. The second character will be pushed before the first.
        c. Every subsequent character will be pushed before the last character.
    4. Convert the array into a string.
    5. Display the reversed string via console.
    
    */

    // function askInput() {
    //     var str = prompt("Enter a string.");

    //     if (str === null) {
    //         alert("Please enter a string!");
    //     }

    //     else {
    //         revStr(str);
    //     }
    
    // }

    // function revStr(str) {
    //     var revstrArray = [];
    //     for (i = 0; i < str.length; i++) {
    //         // strArray[i] = str.charAt(str.length-i);
    //         revstrArray.unshift(str.charAt(i));
    //     }
    //     console.log(revstrArray);
    //     var rev = revstrArray.join("");
    //     console.log(rev);
    // }

    // askInput();

    //////////////////////////////////////////////////////////

    /*

    Method 2: 
    1. Ask for user input for a string.
    2. Create an array that will hold each character in the string as a separate element.
    3. Use the reverse() method to reverse the elements in the array.
    4. Convert this reversed array into a string.
    5. Display the string to the console.

     */

    function askInput() {
        var str = prompt("Enter a string.");
        
        if (str === null) {
            alert("Please enter a string!");
        }

        else {
            revStr(str);
        }
    }

    function revStr(str) {
        var strArray = [];
        for (i = 0; i < str.length; i++) {
            strArray.push(str.charAt(i));
        }
        var revstrArray = strArray.reverse();
        console.log(revstrArray);
        var rev = revstrArray.join("");
        console.log(rev);
    }

    askInput();






});



