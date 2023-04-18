import React, { useState } from 'react'

import * as S from './styles'
import { Calendar } from '../Calendar/Calendar'
import { TimePicker } from '../TimePicker/TimePicker'

export type CalendarStepProps = {}

export const CalendarStep: React.FC<CalendarStepProps> = ({
  ...rest
}: CalendarStepProps) => {
  const [isDateSelected] = useState(true)

  return (
    <S.CalendarStepContainer
      variant={'primary'}
      isTimePickerOpen={isDateSelected}
    >
      <Calendar />
      {isDateSelected && <TimePicker />}
    </S.CalendarStepContainer>
  )
}
