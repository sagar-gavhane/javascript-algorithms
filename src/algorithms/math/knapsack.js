// checkout knapsack image for understanding knapsack problem
const weight = [0, 1, 2, 4, 2, 5];
const value = [0, 5, 3, 5, 3, 2];

const knapsack = (numberOfItems, capacity) => {
  const number = numberOfItems;
  let result;

  if (number === 0 || capacity === 0) {
    return result;
  } else if (weight[number] > capacity) {
    return knapsack(number - 1, capacity);
  } else {
    const temp1 = knapsack(number - 1, capacity);
    const temp2 = value[number] + knapsack(number - 1, capacity - weight[number]);
    result = Math.max(temp1, temp2);
    return result;
  }
};

const ans = knapsack(weight.length, 10);
console.log(ans);
