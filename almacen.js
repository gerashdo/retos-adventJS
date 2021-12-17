
const contains = (store, product) => {
    // ¡Y no olvides compartir tu solución en redes!
    // store.find(product)

    
    for( let key in store ) {
        if( store[key] === product ) {
            return true;
        }else if( store[key] instanceof Object && contains(store[key], product)) {
            return true;
        }
    }
    return false;
}


const almacen = {
    'estanteria1': {
      'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
      }
    },
    'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta' // <- ¡Está aquí!
      }
    }
  }
              
  console.log(contains(almacen, 'camiseta')) // true
  
  const otroAlmacen = {
    'baul': {
      'fondo': {
        'objeto': 'cd-rom',
        'otro-objeto': 'disquette',
        'otra-cosa': 'mando'
      }
    }
  }
    
  console.log(contains(otroAlmacen, 'gameboy')) // false