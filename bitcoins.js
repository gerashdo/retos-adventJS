

const maxProfit = (prices) => {
    // ¡Y no olvides compartir tu solución en redes!

    let max = 0;

    for (let primero = 0; primero < prices.length - 1 ; primero++) {
        for (let segundo = primero + 1; segundo < prices.length; segundo++) {
            const newValue = prices[segundo] - prices[primero];
            max = Math.max(max, newValue);
        }
    }

    return max === 0 ? -1 : max;
}


const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
console.log(maxProfit(pricesBtc)) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
console.log(maxProfit(pricesEth)) // -> 60 (compra a 10, vende a 70)

const pricesDoge = [18, 15, 12, 11, 9, 7]
console.log(maxProfit(pricesDoge)) // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
console.log(maxProfit(pricesAda)) // -> -1 (no hay ganancia posible)