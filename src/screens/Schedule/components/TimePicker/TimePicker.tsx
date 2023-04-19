import React from 'react'
import dayjs from 'dayjs'
import { Text } from '@ionext-ui/react'

import * as S from './styles'

export type Availability = {
  possibleTimes: number[]
  availableTimes: number[]
}

export type TimePickerProps = {
  selectedDate: Date | null
  availability: Availability | null
}

export const TimePicker: React.FC<TimePickerProps> = ({
  selectedDate,
  availability,
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
        {availability?.possibleTimes.map((hour, index) => {
          return (
            <S.TimePickerItems
              key={index}
              disabled={!availability.availableTimes.includes(hour)}
            >
              {String(hour).padStart(2, '0')}:00h
            </S.TimePickerItems>
          )
        })}
      </S.TimePickerList>
    </S.TimePickerContainer>
  )
}
