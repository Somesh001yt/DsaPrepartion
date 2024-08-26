// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// function longestSubstring(str) {
//   if (s.length === 1) {
//  return 1;
// }
// let maxLength = 0;
// for (let i = 0; i < s.length; i++) {
//   let set = new Set()

//   for(let j=i; j<s.length; j++){
//     if(set.has(s[j])){
//    maxLength = Math.max(maxLength , j - i)
//    break
//   }

//   set.add(s[j])
// }
// }

// return maxLength;
// }

// console.log(longestSubstring("abcabcbb"));

var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let maxSize = 0;

  if (s.length === 1) return 1;

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
    maxSize = Math.max(maxSize, i - left + 1);
  }
  return maxSize;
};
