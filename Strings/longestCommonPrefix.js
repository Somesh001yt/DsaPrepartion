// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (arr) {
  let i = 1;
  let prf = arr[0];
  while (i < arr.length) {
    if (!arr[i].startsWith(prf)) {
      prf = prf.slice(0, -1);
    } else {
      i++;
    }
  }
  return prf;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
