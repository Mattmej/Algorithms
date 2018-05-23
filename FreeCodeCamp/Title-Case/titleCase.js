/*
Game Plan:

1. Make a function that takes in a string parameter.
2. Split string into an array of words.
3. Capitalize the first character in every one of the array's elements.
4. Turn the array into a string.

*/

/*

Lessons Learned:

* In JavaScript, strings are immutable; an existing string is never modified. 
* Any method which modifies the string ALWAYS returns a new string.
* [Source: https://stackoverflow.com/questions/12231644/js-replace-not-working-on-string]

*/



function titleCase(str) {

    var strArray = str.split(" ");
    var newStrArray = [];
    var newStr;
    var lowerCaseArray = [];


    // This only works for regularly-typed sentences.
    // Not for alternating-case sentences such as "sHoRt AnD sToUt"

    // for (i = 0; i < strArray.length; i++) {
    //     var upperCase = strArray[i].charAt(0).toUpperCase();
    //     console.log(upperCase);
    //     newStrArray[i] = strArray[i].replace(strArray[i].charAt(0), upperCase);
    // }

    // console.log(newStrArray);
    // newStr = newStrArray.join(" ");
    // console.log(newStr);
    // return newStr;

    for (i = 0; i < strArray.length; i++) {
        lowerCaseArray.push(strArray[i].toLowerCase());                                             // creates a version of the strArray in which all words are lowercase.
        var upperCase = lowerCaseArray[i].charAt(0).toUpperCase();                                  // creates an array of the first letters of every string in uppercase.
        newStrArray[i] = lowerCaseArray[i].replace(lowerCaseArray[i].charAt(0), upperCase);         // every entry in newStrArray will be an entry of the lowerCaseArray with the first character converted to uppercase.
    }

    // console.log(lowerCaseArray);
    // console.log(newStrArray);
    newStr = newStrArray.join(" ");                     // joins the elements of newStrArray into a new string.
    console.log(newStr);
    return newStr;

}

  
titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
  