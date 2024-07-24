function flattenArr(arr) {
  const result = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      const nestedFlatArr = flattenArr(element);
      result.push(...nestedFlatArr);
    } else {
      result.push(element);
    }
  });
  return result;
}

console.log(flattenArr([1, [1, 2], [1, 2, 4]], 6));
