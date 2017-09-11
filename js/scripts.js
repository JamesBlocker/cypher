var userResponse = prompt("Enter a sentence:");
var first = userResponse.charAt(0).toUpperCase();
var last = userResponse.charAt(userResponse.length-1).toUpperCase();
var count = userResponse.length / 2;
var mid = userResponse.charAt(count);
var str = mid + userResponse + last + first;
var splitString = str.split("");
var reverseArray = splitString.reverse();
var joinArray = reverseArray.join("");

function flip(first, last) {
  alert(joinArray);
}

flip(first, last);
