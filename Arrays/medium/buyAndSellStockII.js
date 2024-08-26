var maxProfit = function (prices) {
  let mini = prices[0];
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    if (mini < prices[i]) {
      max += prices[i] - mini;
    }
    mini = prices[i];
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
