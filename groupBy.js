
const groupBy = (collection, it) => {
    // ¡No olvides compartir tu solución en redes!
    
    let groupedCollection = {};

    collection.forEach( element => {
        console.log(`element ${element} it ${it} element[it] ${element[it]}`)
        const key = typeof it === 'function' ? it(element) : element[it];
        console.log(key);
        groupedCollection[key] 
            ? groupedCollection[key].push( element ) 
            : groupedCollection[key] =[ element ];
    });

    return groupedCollection;
}

console.log(' element '['length']);




// console.log(groupBy([6.1, 4.2, 6.3], Math.floor)) // { 6: [6.1, 6.3], 4: [4.2] }
console.log(groupBy(['one', 'two', 'three'], 'length')) // { 3: ['one', 'two'], 5: ['three'] }
// console.log(groupBy([{age: 23}, {age: 24}], 'age')) // { 23: [{age: 23}], 24: [{age: 24}] }