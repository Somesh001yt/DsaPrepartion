// Normal reverse a string

// const reverseStringByWord = (str) => {
//  let rev = ''

//  for(let i=0; i<str.length; i++){
//     rev = str[i] + rev
//  }
//  return rev
// }

// function reverseWords(s) {
//   return s.trim().split(/\s+/).reverse().join(" ");
// }

const reverseWords = (str) => {
  const arr = str.split(" ");
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
};

// Example usage
const input = "the  sky is blue";
const output = reverseWords(input);
console.log(output);
