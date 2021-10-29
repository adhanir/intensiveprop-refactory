var kata1 = "radar";
var kata2 = "malam";
var kata3 = "kasur ini rusak";
var kata4 = "ibu Ratna antar ubi";
var kata5 = "malas";
var kata6 = "makan nasi goreng";
var kata7 = "balonku ada lima";

function checkPalindrome(inputString) {
  var strArray = inputString.toLowerCase().split("");
  var newArr = strArray.join("");
  var revArr = [...newArr].reverse().join("");

  if (newArr === revArr) {
    return true;
  } else {
    return false;
  }
}
console.log(checkPalindrome(kata1));
console.log(checkPalindrome(kata2));
console.log(checkPalindrome(kata3));
console.log(checkPalindrome(kata4));
console.log(checkPalindrome(kata5));
console.log(checkPalindrome(kata6));
console.log(checkPalindrome(kata7));
