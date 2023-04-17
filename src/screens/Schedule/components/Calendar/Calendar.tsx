import React from 'react'

import * as S from './styles'
import { Header } from './components/Header/Header'
import { THead } from './components/THead/THead'
import { Tbody } from './components/Tbody/Tbody'

export type CalendarProps = {}

export const Calendar: React.FC<CalendarProps> = ({
  ...rest
}: CalendarProps) => {
  return (
    <S.CalendarContainer>
      <Header />
      <S.CalendarBody>
        <THead />
        <Tbody />
      </S.CalendarBody>
    </S.CalendarContainer>
  )
}
