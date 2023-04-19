import React from 'react'

import * as S from './styles'
import { Text } from '@ionext-ui/react'
import dayjs from 'dayjs'

export type TimePickerProps = {
  selectedDate: Date | null
}

export const TimePicker: React.FC<TimePickerProps> = ({
  selectedDate,
}: TimePickerProps) => {
  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null
  return (
    <S.TimePickerContainer>
      <Text
        size="md"
        color="secondary"
        align="center"
        css={{ fontWeight: '$bold', marginBottom: '$3' }}
      >
        <time>
          {weekDay} <span> {describedDate}</span>
        </time>
      </Text>
      <S.TimePickerList>
        {Array.from(Array(24)).map((hour, index) => {
          return <S.TimePickerItems key={index}>{index}</S.TimePickerItems>
        })}
      </S.TimePickerList>
    </S.TimePickerContainer>
  )
}
