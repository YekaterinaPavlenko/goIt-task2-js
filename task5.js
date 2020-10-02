function checkForSpam(str) {
  "use strict";
  // Write code under this li"ne
  const newStr = str.toLowerCase();
  const spamWord = newStr.includes("sale") || newStr.includes("spam");
  return spamWord;
}

console.log(checkForSpam("Latest technology news")); //false
console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
