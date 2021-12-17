const createXmasTree = (height) => {
    // ¡Y no olvides también poner los turrones!

    let string = '';
    const positions = height + ( height - 1);
    
    for(let i = 1; i <= height ; i++) {
      const asteriscNum = i + ( i - 1);
      const spacesNum = (positions - asteriscNum) / 2;

      const spaceLine = '_'.repeat( spacesNum );
      const asteriscs = '*'.repeat( asteriscNum );

      string += spaceLine;
      string += asteriscs;
      string += spaceLine;
      string += '\n';
    }
    
    for(let i = 1; i <= 2 ; i++) {
      const spaceNum = ( positions - 1 ) / 2;

      const base = '_'.repeat( spaceNum );
      const trunk = '#';
      
      string += base;
      string += trunk;
      string += base;
      i !== 2 ? string += '\n' : string += '';
    }
    
    return string;
  }
  
  console.log(createXmasTree(10));