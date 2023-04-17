import React from 'react'

import * as S from './styles'
import { Calendar } from '../Calendar/Calendar'

export type CalendarStepProps = {}

export const CalendarStep: React.FC<CalendarStepProps> = ({
  ...rest
}: CalendarStepProps) => {
  return (
    <S.CalendarStepContainer variant={'primary'}>
      <Calendar />
    </S.CalendarStepContainer>
  )
}
