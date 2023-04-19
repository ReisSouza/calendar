import React from 'react'
import dayjs from 'dayjs'

import * as S from './styles'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

export type HeaderProps = {
  currentDate: dayjs.Dayjs
  setCurrentDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>
}

export const Header: React.FC<HeaderProps> = ({
  currentDate,
  setCurrentDate,
}: HeaderProps) => {
  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')

  function handlePreviousMonth() {
    const previousMonthDate = currentDate.subtract(1, 'months')
    setCurrentDate(previousMonthDate)
  }

  function handleNextMonth() {
    const previousMonthDate = currentDate.add(1, 'months')
    setCurrentDate(previousMonthDate)
  }

  return (
    <S.HeaderContainer>
      <time>
        <S.CalendarTitle>
          {currentMonth} <span>{currentYear}</span>
        </S.CalendarTitle>
      </time>
      <S.CalendarActions>
        <button
          type="button"
          onClick={handlePreviousMonth}
          title="Previous month"
        >
          <CaretLeft />
        </button>
        <button type="button" onClick={handleNextMonth} title="Next month">
          <CaretRight />
        </button>
      </S.CalendarActions>
    </S.HeaderContainer>
  )
}
