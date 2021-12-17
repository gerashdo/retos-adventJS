const letter1 = "bici coche (balón) bici coche peluche" // -> ✅
const letter2 = "(muñeca) consola bici" // ✅

const letter3 = "bici coche (balón bici coche" // -> ❌
const letter4 = "peluche (bici [coche) bici coche balón" // -> ❌
const letter5 = "(peluche {) bici" // -> ❌
const letter6 = "() bici" //


const isValid = (letter) => {
    // ¡No dejes que el Grinch gane!


    const words = letter.split(' ');


    const empiezaTermina = ( word ) => (
        word.startsWith( '(' ) && !word.endsWith( ')' )) 
        || 
        (!word.startsWith( '(' ) && word.endsWith( ')' )
    );
    
    const incluyeParentesis = ( word ) => word.includes('()');

    
    return !(words.some(empiezaTermina) || words.some( incluyeParentesis ));

}

console.log(isValid(letter2));
console.log(isValid(letter1));
console.log(isValid(letter3));
console.log(isValid(letter4));
console.log(isValid(letter5));
console.log(isValid(letter6));