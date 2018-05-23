/* 
Game Plan:

Function will accept two strings: "str" and "target"
* Will check if the target is located at the end of the str.

*/



function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    // return str;

    // var lastLetter = str.charAt(str.length - 1);
    // console.log(lastLetter);

    // if (lastLetter === target) {
    //     console.log(true);
    //     return true;
    // }

    // else {
    //     console.log(false)
    //     return false;
    // }

    var strArray = str.split("");
    // console.log(strArray);
    var revStrArray = strArray.reverse();
    console.log(revStrArray);

    var targetArray = target.split("");
    // console.log(targetArray);
    revTargetArray = targetArray.reverse();
    console.log(revTargetArray);

    var lastWord = [];

    for (i = 0; i < revTargetArray.length; i++) {

        lastWord.push(revStrArray[i]);

        // if (revTargetArray[i] === revStrArray[i]) {
        //     console.log(true);
        //     return true;
        // }

        // else {
        //     console.log(false);
        //     return false;
        // }
    }

    console.log(lastWord);

    if (lastWord === revTargetArray) {
        console.log(true);
        return true;
    }

    else {
        console.log(false);
        return false;
    }


}
  
confirmEnding("Bastian", "n");
// confirmEnding("Connor", "n");
// confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");

  