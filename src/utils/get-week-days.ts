export function getWeedDays() {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  return Array.from(Array(7).keys())
    .map((day) => formatter.format(new Date(Date.UTC(2021, 5, day))))
    .map((weedDay) => {
      return weedDay.substring(0, 1).toUpperCase().concat(weedDay.substring(1))
    })
}
