/*

Goal: Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Steps:
1. Start with an integer. Can be as big as I want.
2. Create a loop which adds all the characters using charAt. May need to convert to integer.
3. Check if the number has more than 1 digit.
4. If yes, then repeat step 2.
5. If not, return the single digit.

*/

var startingInt = 95510;
var intSum = 0;

// var startingIntString = parseInt(startingInt);

function digitalRoot(startingInt) {
    

    var startingIntString = startingInt.toString();


    intSum = parseInt(startingIntString.charAt(0));
    console.log(intSum);

    // console.log(startingIntString.length);

    if (startingIntString.length > 1) {

        for (i = 1; i < startingIntString.length; i++) {
            console.log(startingIntString.charAt(i));
            // intSum += parseInt(startingIntString.charAt(i));
            intSum = intSum + parseInt(startingIntString.charAt(i));
            console.log("Sum: " + intSum + "\n");
        }

        console.log(intSum);
        startingInt = intSum;
        console.log(startingInt);

        digitalRoot(startingInt);
    
    }

    else {
        console.log("Digital Root: " + intSum);
    }

}

digitalRoot(startingInt);




