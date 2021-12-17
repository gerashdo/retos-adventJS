const daysToXmas = (date) => {
    // ¡Y no olvides compartir tu solución en redes!
    const xmas = new Date('Dec 25, 2021');
    return Math.ceil((((((xmas - date) / 1000) / 60) / 60) / 24));
  }
  
  const date1 = new Date('Dec 1, 2021')
  daysToXmas(date1) // 24
  
  const date = new Date('Dec 25, 2021')
  daysToXmas(date) // 0
  
  const date2 = new Date('Dec 31, 2021')
  daysToXmas(date2) // -6
  
  const date3 = new Date('Dec 24, 2021 00:00:01')
  daysToXmas(date3) // 1
  
  const date4 = new Date('Dec 24, 2021 23:59:59')
  daysToXmas(date4) // 1
  
  const date5 = new Date('Jan 1, 2022 00:00:01')
  daysToXmas(date5) // -7
  const date6 = new Date('Jan 1, 2022 23:59:59')
  daysToXmas(date6) // -7