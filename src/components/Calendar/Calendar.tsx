import React, { useMemo, useState } from 'react'

import * as S from './styles'
import { Header } from './components/Header/Header'
import { THead } from './components/THead/THead'
import { Tbody } from './components/Tbody/Tbody'
import dayjs from 'dayjs'

interface CalendarWeek {
  week: number
  days: Array<{
    date: dayjs.Dayjs
    disabled: boolean
  }>
}

export type CalendarWeeks = CalendarWeek[]

export interface CalendarProps {
  selectedDate: Date | null
  onDateSelected: (date: Date) => void
}

export const Calendar: React.FC<CalendarProps> = ({
  onDateSelected,
  selectedDate,
}: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1)
  })

  const calendarWeeks = useMemo(() => {
    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      return currentDate.set('date', i + 1) // Date is day
    })

    const firstWeekDay = currentDate.get('day') // Day of week

    const previousMonthFillArray = Array.from({
      length: firstWeekDay,
    })
      .map((_, i) => {
        return currentDate.subtract(i + 1, 'day')
      })
      .reverse()
    const lastDayInCurrentMonth = currentDate.set(
      'date',
      currentDate.daysInMonth(),
    )
    const lastWeedDay = lastDayInCurrentMonth.get('day')

    const nextMouthFillArray = Array.from({
      length: 7 - (lastWeedDay + 1),
    }).map((_, i) => {
      return lastDayInCurrentMonth.add(i + 1, 'day') // Date is day
    })

    const calendarDays = [
      ...previousMonthFillArray.map((date) => {
        return { date, disabled: true }
      }),
      ...daysInMonthArray.map((date) => {
        return { date, disabled: date.endOf('day').isBefore(new Date()) }
      }),
      ...nextMouthFillArray.map((date) => {
        return { date, disabled: true }
      }),
    ]

    const calendarWeeks = calendarDays.reduce<CalendarWeeks>(
      (weeks, _, i, original) => {
        const isNewWeek = i % 7 === 0
        if (isNewWeek) {
          weeks.push({
            week: i / 7 + 1,
            days: original.slice(i, i + 7),
          })
        }
        return weeks
      },
      [],
    )

    return calendarWeeks
  }, [currentDate])

  return (
    <S.CalendarContainer>
      <Header currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <S.CalendarBody>
        <THead />
        <Tbody calendarWeeks={calendarWeeks} onDateSelected={onDateSelected} />
      </S.CalendarBody>
    </S.CalendarContainer>
  )
}
