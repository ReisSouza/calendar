export type GetWeedDaysParams = {
  short?: boolean
}

export const getWeedDays = ({ short = false }: GetWeedDaysParams) => {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  return Array.from(Array(7).keys())
    .map((day) => formatter.format(new Date(Date.UTC(2021, 5, day))))
    .map((weedDay) => {
      if (short) {
        return weedDay.substring(0, 3).toUpperCase()
      }
      return weedDay.substring(0, 1).toUpperCase().concat(weedDay.substring(1))
    })
}
