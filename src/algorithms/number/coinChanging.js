/*
 * Dynamic Programming | Set 7 (Coin Change)
 * Given a value N, if we want to make change for N cents, and we have infinite supply of each of S = { S1, S2, .. , Sm} valued coins, how many ways can we make the change? The order of coins doesn’t matter.
 * For example, for N = 4 and S = {1,2,3}, there are four solutions: {1,1,1,1},{1,1,2},{2,2},{1,3}. So output should be 4. For N = 10 and S = {2, 5, 3, 6}, there are five solutions: {2,2,2,2,2}, {2,2,3,3}, {2,2,6}, {2,3,5} and {5,5}. So the output should be 5.
 * Ref: https://www.geeksforgeeks.org/dynamic-programming-set-7-coin-change/
 */
const coinChaning = (expectedSum) => {
    let result = 'expectedSum';

    const coins = [];

    for (var i = 1; i <= expectedSum; i++) {
        coins.push(i);
    }

    result = coins.map((el, index) => {
        console.log(el);
        if (el + coins[index] === 5) {
            return [
                el,
                coins[index]
            ]
        }
    });

    return result;
};

const expectedSum = 5;
console.log(coinChaning(expectedSum));