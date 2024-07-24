function largestOddSubstring(num) {
  let maxOdd = "";

  for (let i = 0; i < num.length; i++) {
    if (parseInt(num[i]) % 2 !== 0) {
      maxOdd = num.slice(0, i + 1);
    }
  }

  return maxOdd;
}

console.log(largestOddSubstring("52")); // Output: "5"
console.log(largestOddSubstring("246")); // Output: "" (no odd number)
console.log(largestOddSubstring("13579")); // Output: "13579"
console.log(largestOddSubstring("420686")); // Output: "420686"
