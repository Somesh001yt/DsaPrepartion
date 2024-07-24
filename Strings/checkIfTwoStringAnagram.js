var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let Obj1 = {};
  let Obj2 = {};

  for (let str of s) {
    Obj1[str] = (Obj1[str] || 0) + 1;
  }

  for (let str of t) {
    Obj2[str] = (Obj2[str] || 0) + 1;
  }

  for (const key in Obj1) {
    if (Obj1[key] !== Obj2[key]) return false;
  }
  return true;
};

console.log(isAnagram("car", "rat"));
