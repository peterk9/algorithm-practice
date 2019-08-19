/**
 * Hi, here's your problem today. This problem was recently asked by Apple:

You are given an array. Each element represents the price of a stock on that particular day. Calculate and return the maximum profit you can make from buying and selling that stock only once.

For example: [9, 11, 8, 5, 7, 10]

Here, the optimal trade is to buy when the price is 5, and sell when it is 10, so the return value should be 5 (profit = 10 - 5 = 5).

Here's your starting point:

def buy_and_sell(arr):
  #Fill this in.

print buy_and_sell([9, 11, 8, 5, 7, 10])
# 5
 */

function buy_and_sell(arr) {
    if (arr.length < 2) return -1;
    if (arr.length == 2) return arr[0] - arr[1];

    let maxProfit = 0;
    let pairProfit = 0;
    let sellDay;
    let buyDay;

    let pairs = [];

    for (let i = 0; i < arr.length; i++)
        for (let j = 1 + i; j < arr.length; j++) {
            pairProfit = arr[j] - arr[i];
            pairs.push({ buyDay: i, sellDay: j, profit: pairProfit })
            if (maxProfit < pairProfit) {
                maxProfit = pairProfit;
                sellDay = j;
                buyDay = i;
            }
        }

    console.log(`buyDay ${buyDay}, sellDay ${sellDay}`);
    console.log(pairs);
    return maxProfit;
}

console.log(buy_and_sell([9, 11, 8, 5, 7, 10]));