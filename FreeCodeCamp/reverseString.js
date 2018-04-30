
function reverseString(str) {
    var strArray = str.split("");
    // console.log(strArray);
    var newStringArray = strArray.reverse();
    console.log(newStringArray);
    
    var newString = newStringArray.join("");
    // console.log(newString);
  //   return newString;
}
  
reverseString("hello");
  