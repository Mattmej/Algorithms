$(document).ready(function() {

    /*
    Goal: Check for Palindromes 

    1. Ask for user input for a string.
    2. Check if a string is a palindrome.
        a. Create an array to hold the string's characters.
        b. Create a second array that is the first array, reversed.
        c. Compare the two arrays.
            i. If all the elements match, then the string is a palindrome.
            ii. If not, the string is not a palindrome.
    */

    // var strArray;
    // var revStrArray = [];
    
    function palindrome(str) {

        // str = prompt("Enter a string.");

        // str = str.replace(/.|,|_/, "");
        // str = str.replace(",", "");
        // str = str.replace(/.|,/, "");
        str = str.replace(",", "").replace(".", "").replace("_", "").replace(" ", "");
        str = str.toLowerCase();
        console.log(str);

        var strArray = str.split("");
        // console.log(strArray);



        var revStrArray = [];

        // using array.reverse() produces problems with calling the indices of the array
        // so we will use another method to create a reversed string array.

        for (i = 0; i < strArray.length; i++ ) {
            revStrArray.unshift(strArray[i]);
        }

        // console.log(revStrArray);
        revStr = revStrArray.join("");
        console.log(revStr);

        // if (strArray[4] === revStrArray[4]) {
        //     return true;
        // }

        // else {
        //     return false;
        // }


        // for (i = 0; i < strArray.length; i++) {
        //     if (strArray[i] === revStrArray[i]) {
        //         // isPalindrome();
        //         return true;
        //     }

        //     else if (strArray[i] != revStrArray[i]) {
        //         // notPalindrome();
        //         return false;
        //     }
        // }

        // for (i = 0; i < strArray.length; i++) {
        //     if (strArray[i] != revStrArray[i]) {
        //         return false;
        //     }

        //     else {
        //         return true;
        //     }
        // }

        if (str === revStr) {
            return true;
        }

        else {
            return false;
        }

    }
    
    // console.log(palindrome("My age is 0, 0 si ega ym."));

    // console.log(palindrome("almostomla"));

    console.log(palindrome("_eye"));
    console.log(palindrome("race car"));


    




});