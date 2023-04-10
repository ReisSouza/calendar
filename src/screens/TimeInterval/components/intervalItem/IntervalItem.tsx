import React from 'react'
import { Checkbox, Text, TextField } from '@ionext-ui/react'

import * as S from './styles'
import { UseFormRegister } from 'react-hook-form'

type RegisteIntervalItemProps = UseFormRegister<{
  intervals: {
    weekDay: number
    enabled: boolean
    startTime: string
    endTime: string
  }[]
}>
type IntervalItemProps = {
  day: string
  register: RegisteIntervalItemProps
  index: number
}

export const IntervalItem = ({ day, register, index }: IntervalItemProps) => {
  return (
    <S.IntervalItem>
      <S.IntervalDay>
        <Checkbox />
        <Text>{day}</Text>
      </S.IntervalDay>
      <S.IntervalInputs>
        <TextField
          type="time"
          size="small"
          step={60}
          {...register(`intervals.${index}.startTime`)}
        />
        <TextField
          type="time"
          size="small"
          step={60}
          {...register(`intervals.${index}.endTime`)}
        />
      </S.IntervalInputs>
    </S.IntervalItem>
  )
}
