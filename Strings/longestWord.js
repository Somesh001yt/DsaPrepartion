function longestWord(str) {
  let longest = "";

  let word = str.split(" ");

  for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
    if (word[i].length > longest) {
      longest = word[i].length;
    }
  }
  return longest;
}

console.log(longestWord("hello my name is somesh"));
