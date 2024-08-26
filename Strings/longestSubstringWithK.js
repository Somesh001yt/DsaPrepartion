var longestSubstring = function (s, k) {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = [(map[s[i]]?.[0] || 0) + 1, i];
  }

  let maxSubstring = 0;

  for (const char in map) {
    const [cnt, i] = map[char];

    if (cnt >= k) {
      maxSubstring += cnt;
    } else {
      return Math.max(
        longestSubstring(s.slice(0, i), k),
        longestSubstring(s.slice(i + 1), k)
      );
    }
  }

  return maxSubstring;

  // If all characters meet the k requirement, the whole string is valid.
};
