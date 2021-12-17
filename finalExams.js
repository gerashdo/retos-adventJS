const sumPairs = (numbers, result) => {
    // ¡Y no olvides compartir tu solución en redes!
    
    for(let first = 0; first < numbers.length -1; first++) {
      for(let second = first + 1; second < numbers.length ; second++) {
        if( numbers[second] + numbers[first] === result ) {
          return [ numbers[first], numbers[second] ];
        }
      }
    }
    return null
  }
  
  sumPairs([3, 5, 7, 2], 10) // [3, 7]
  sumPairs([-3, -2, 7, -5], 10) // null
  sumPairs([2, 2, 3, 1], 4) // [2, 2]
  sumPairs([6, 7, 1, 2], 8) // [6, 2]
  sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]