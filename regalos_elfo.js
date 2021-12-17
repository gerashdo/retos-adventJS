const carta = 'bici coche balón _playstation bici coche peluche'


const listGifts = (letter) => {

    const cartas = letter.split(' ').filter( string => {
        if (!string.startsWith('_')) {
            return string
        }
    })

    const regalos = {}

    cartas.map( carta => {
        if (regalos[carta]) {
            regalos[carta] = regalos[carta] + 1
        }else{
            regalos[carta] = 1
        }
    })

    return regalos
}


const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/