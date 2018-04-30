// $(document).ready(function() {

//     /*
//     Goal: Check for Palindromes 

//     1. Ask for user input for a string.
//     2. Check if a string is a palindrome.
//         a. Create an array to hold the string's characters.
//         b. Create a second array that is the first array, reversed.
//         c. Compare the two arrays.
//             i. If all the elements match, then the string is a palindrome.
//             ii. If not, the string is not a palindrome.

//     3. Palindrome tests:
//         a. "eye" ===> true                                                      
//         b. "_eye" ==> true                                                      
//         c. "race car" ===> true                                                 (w)                                   
//         d. "not a palindrome" ===> false                                        
//         e. "A man, a plan, a canal. Panama" ===> true                           
//         f. "never odd or even" ===> true                                        
//         g. "nope" ===> false                                                    
//         h. "almostomla" ===> false                                              (x)
//         i. "My age is 0, 0 si ega ym." ===> true                                (w)                               
//         j. "1 eye for of 1 eye." ===> false                                                   
//         k. "0_0 (: /-\ :) 0_0" ===> true                                        (w)
//         l. "five|\_/|four" ===> false
//     */

//     // var strArray;
//     // var revStrArray = [];
    
//     function palindrome(str) {

//         // str = prompt("Enter a string.");

//         // str = str.replace(/.|,|_/, "");
//         // str = str.replace(",", "");
//         // str = str.replace(/.|,/, "");
//         str = str.replace(",", "").replace(".", "").replace("_", "");
//         // console.log(str);

//         var strArray = str.toLowerCase().split("");
//         console.log(strArray);



//         var revStrArray = [];

//         // using array.reverse() produces problems with calling the indices of the array
//         // so we will use another method to create a reversed string array.

//         for (i = 0; i < strArray.length; i++ ) {
//             revStrArray.unshift(strArray[i]);
//         }

//         console.log(revStrArray);


//         for (i = 0; i < strArray.length; i++) {
//             if (strArray[i] === revStrArray[i]) {
//                 // isPalindrome();
//                 return true;
//             }

//             else if (strArray[i] != revStrArray[i]) {
//                 // notPalindrome();
//                 return false;
//             }
//         }
//         // Good luck!
//         // return true;
//     }
    
//     palindrome("My age is 0, 0 si ega ym.");
//     console.log(palindrome("My age is 0, 0 si ega ym."));

//     console.log(palindrome("a camera"));
//     console.log(palindrome("race car"));

// });




//////////////////////////////////////////////////////////////////////////////////////




// current issue: as the "for" loop checks the string arrays, the loop returns true if the last characters of the strings are equal,
// regardless of whether the string is a palindrome or not.

/* 
What if, rather than compare two arrays, we compare two strings?

var str
var revStr
    A. use a loop to create this.

if str === revStr, return true.
else, return false.

*/

/*
Palindrome tests:
* "almostomla" ===> false
* "eye" ===> true
* "_eye" ===> true
* "race car" ===> true
* "not a palindrome" ===> false
* "A man, a plan, a canal. Panama" ===> true  





*/

$(document).ready(function() {

    var test1 = "eye";
    var test2 = "_eye";
    var test3 = "race car";
    var test4 = "not a palindrome";
    var test5 = "A man, a plan, a canal. Panama";
    var test6 = "never odd or even";
    var test7 = "nope";
    var test8 = "almostomla";
    var test9 = "My age is 0, 0 si ega ym.";
    var test10 = "1 eye for of 1 eye.";
    var test11 = "0_0 (: /-\\ :) 0_0";
    var test12 = "five|\\_/|four";

    function palindrome(str) {
        str = str.toLowerCase();

        // str = str.replace(/,/g, "").replace(/_/g, "").replace(/\s/g, "").replace(/./g, "").replace(/\\/g, "").replace(/\//g, "");
        // str = str.replace(/,/g, "").replace(/_/g, "").replace(/\s/g, "").replace(/./g, "");
        // str = str.replace(",", "").replace("_", "").replace(/\s/g, "").replace(".", "").replace("\\", "").replace("/", "");
        // str = str.replace(/,|_|\s|.|\\|\//g, "");
        // str = str.replace(/\s/g, "");
        str = str.replace(/,|_|\s|\.|\\|\/|\(|\)|\-/g, "");
        console.log(str);

        var strArray = str.split("");

        var revStrArray = [];

        for (i = 0; i < strArray.length; i++) {
            revStrArray.unshift(strArray[i]);
        }

        // console.log(revStrArray);
        var revStr = revStrArray.join("");
        console.log(revStr);

        if (str === revStr) {
            return true;
        }

        else {
            return false;
        }


    }


    // palindrome("almostomla");
    // console.log("almostomla => " + palindrome("almostomla"));
    // console.log("eye => " + palindrome("eye"));
    // console.log("_eye => " + palindrome("_eye"))
    // console.log("race car ===> " + palindrome("race car"));
    // console.log("not a palindrome => " + palindrome("not a palindrome"));

    console.log(test1 + ": " + palindrome(test1));
    console.log(test2 + ": " + palindrome(test2));
    console.log(test3 + ": " + palindrome(test3));
    console.log(test4 + ": " + palindrome(test4));
    console.log(test5 + ": " + palindrome(test5));
    console.log(test6 + ": " + palindrome(test6));
    console.log(test7 + ": " + palindrome(test7));
    console.log(test8 + ": " + palindrome(test8));
    console.log(test9 + ": " + palindrome(test9));
    console.log(test10 + ": " + palindrome(test10));
    console.log(test11 + ": " + palindrome(test11));
    console.log(test12+ ": " + palindrome(test12));

    
    







})


