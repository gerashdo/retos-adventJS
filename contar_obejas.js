
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

const contarOvejas = (ovejas) => {

  return ovejas.filter( obeja  => {
    const { name, color } = obeja;
    return name.toLowerCase().includes('a') && name.toLowerCase().includes('n')
      && color == 'rojo';
  });

}

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)
