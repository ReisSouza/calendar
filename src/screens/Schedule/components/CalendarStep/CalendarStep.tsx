import React, { useState } from 'react'

import * as S from './styles'
import { TimePicker } from '../TimePicker/TimePicker'
import { Calendar } from '@/components'

export type CalendarStepProps = {}

export const CalendarStep: React.FC<CalendarStepProps> = ({
  ...rest
}: CalendarStepProps) => {
  const [selectedDate, setSelectDate] = useState<Date | null>(null)

  return (
    <S.CalendarStepContainer
      variant={'primary'}
      isTimePickerOpen={!!selectedDate}
    >
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectDate} />
      {selectedDate && <TimePicker />}
    </S.CalendarStepContainer>
  )
}
