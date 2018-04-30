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

    3. Palindrome tests:
        a. "eye" ===> true                                                      
        b. "_eye" ==> true                                                      
        c. "race car" ===> true                                                 (w)                                   
        d. "not a palindrome" ===> false                                        
        e. "A man, a plan, a canal. Panama" ===> true                           
        f. "never odd or even" ===> true                                        
        g. "nope" ===> false                                                    
        h. "almostomla" ===> false                                              (x)
        i. "My age is 0, 0 si ega ym." ===> true                                (w)                               
        j. "1 eye for of 1 eye." ===> false                                                   
        k. "0_0 (: /-\ :) 0_0" ===> true                                        (w)
        l. "five|\_/|four" ===> false
    */

    // var strArray;
    // var revStrArray = [];
    
    function palindrome(str) {

        // str = prompt("Enter a string.");

        // str = str.replace(/.|,|_/, "");
        // str = str.replace(",", "");
        // str = str.replace(/.|,/, "");
        str = str.replace(",", "").replace(".", "").replace("_", "");
        // console.log(str);

        var strArray = str.toLowerCase().split("");
        console.log(strArray);



        var revStrArray = [];

        // using array.reverse() produces problems with calling the indices of the array
        // so we will use another method to create a reversed string array.

        for (i = 0; i < strArray.length; i++ ) {
            revStrArray.unshift(strArray[i]);
        }

        console.log(revStrArray);


        for (i = 0; i < strArray.length; i++) {
            if (strArray[i] === revStrArray[i]) {
                // isPalindrome();
                return true;
            }

            else if (strArray[i] != revStrArray[i]) {
                // notPalindrome();
                return false;
            }
        }
        // Good luck!
        // return true;
    }
    
    palindrome("My age is 0, 0 si ega ym.");
    console.log(palindrome("My age is 0, 0 si ega ym."));

    console.log(palindrome("a camera"));
    console.log(palindrome("race car"));

    // current issue: as the "for" loop checks the string arrays, the loop returns true if the last characters of the strings are equal,
    // regardless of whether the string is a palindrome or not. 


    




});