// Normal reverse a string

// const reverseStringByWord = (str) => {
//  let rev = ''

//  for(let i=0; i<str.length; i++){
//     rev = str[i] + rev
//  }
//  return rev
// }


function reverseWords(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
}

// Example usage
const input = "the    sky is   blue";
const output = reverseWords(input);
console.log(output);