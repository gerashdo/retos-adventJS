

const shouldBuyFidelity = (times) => {
    // ¡No olvides compartir tu solución en redes!

    const normalEntrance = 12 * times;
    let fidelityCard = 250;
    let ticketPrice = 12;

    for (let i = 1; i <= times; i++) {
        ticketPrice = ticketPrice * 0.75;
        fidelityCard += ticketPrice;
    }

    console.log(normalEntrance);
    console.log(fidelityCard);
    return true && fidelityCard < normalEntrance;
}





// console.log(shouldBuyFidelity(1)) // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(23)) // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(24)) // false -> Mejor comprar tickets de un sólo uso
// console.log(shouldBuyFidelity(100)) // true -> Mejor comprar tarjeta fidelidad