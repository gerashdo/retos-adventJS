const coins= [];
coins[0] = 1; 
coins[1] = 2;
coins[2] = 5;
coins[3] = 10; 
coins[4] = 20;
coins[5] = 50;

// Primera version
const getCoins = (change) => {
    const coins= [];
    coins[0] = 1; 
    coins[1] = 2;
    coins[2] = 5;
    coins[3] = 10; 
    coins[4] = 20;
    coins[5] = 50;
    // ¡No olvides compartir tu solución en redes!

    let array = new Array(coins.length).fill(0);
    let valueChange = change;

    // repetir mientras que no se acabe el dinero
    // ver si con la moneda mas grande se le puede restar y hacerlo mientras se pueda
    // si se puede se le resta y se aumenta la cantidad de monedas del valor
    while( valueChange > 0 ) {
        while ( valueChange - coins[ coins.length - 1] >= 0 ) {
            valueChange = valueChange - coins[ coins.length - 1];
            array[ coins.length - 1 ]++;
        }

        coins.pop();
    }

    return array;
}

//Segunda version
// function getCoins(change) {
//     const coins = [1, 2, 5, 10, 20, 50]; 
//     let amount = change
//     return coins.reverse().map(coin => {
//       const coinUsed = Math.floor(amount / coin)
//       amount = amount - (coinUsed * coin)
//       return coinUsed
//     }).reverse()
//   }

console.log(getCoins(51)) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos