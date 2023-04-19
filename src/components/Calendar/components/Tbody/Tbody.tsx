import React from 'react'

import * as S from './styles'
import { CalendarWeeks } from '../../Calendar'

export type TbodyProps = {
  calendarWeeks: CalendarWeeks
  onDateSelected: (date: Date) => void
}

export const Tbody: React.FC<TbodyProps> = ({
  calendarWeeks,
  onDateSelected,
}: TbodyProps) => {
  return (
    <S.TbodyContainer>
      {calendarWeeks.map(({ days, week }) => {
        return (
          <tr key={week}>
            {days.map(({ date, disabled }) => {
              return (
                <td key={date.toString()}>
                  <S.CalendarDay
                    disabled={disabled}
                    onClick={() => onDateSelected(date.toDate())}
                  >
                    {date.get('date')}
                  </S.CalendarDay>
                </td>
              )
            })}
          </tr>
        )
      })}
    </S.TbodyContainer>
  )
}
