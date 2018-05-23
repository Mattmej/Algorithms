/*
Goal: Return the factorial of the entered number.

Steps:

1. Accept user input for a number.
    a. If user enters anything other than a number, then the user will be told to enter a number.
    b. If user enters number, then move to next step.
2. Create a loop that multiplies the user's number by all the integers below it.
    a. e.g. 5! = 5*4*3*2*1
3. Return this number.

Special Case: 0! = 1.

*/

$(document).ready(function() {

    var num;
    function askNumber() {
        num = parseInt(prompt("Enter a number."));

        // if (typeof num != "number") {
        //     alert("Please enter a number!");
        //     askNumber();
        // }

        // else {
            factorialize(num);
        // }
    }

    function factorialize(num) {
        /** 
        Steps:

        1. Create an array.
        2. Create a loop that will have all numbers greater than 0 and <= the number stored as elements of the array.
        3. Multiply these elements.

        */

        var numArray = [];
        var answer = 1;

        if (num != 0) {

            for (i = 1; i <= num; i++) {
                numArray.push(i);
            }
    
            for (j = 0; j < numArray.length; j++) {
                answer = answer * numArray[j];
            }
            // console.log("Answer = " + answer);
    
            return answer;

        }

        else {
            return answer;
        }
        
    }

    askNumber();
    console.log(factorialize(num));
})
