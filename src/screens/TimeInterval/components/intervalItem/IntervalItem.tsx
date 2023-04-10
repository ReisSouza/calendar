import React from 'react'
import { Checkbox, Text, TextField } from '@ionext-ui/react'

import * as S from './styles'
import {
  Control,
  Controller,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form'
import { TimeIntervalSchema } from '../../validation'

type ControlIntervalItemProps = Control<TimeIntervalSchema, any>

type WatchIntervalItemProp = UseFormWatch<TimeIntervalSchema>

type RegisteIntervalItemProps = UseFormRegister<TimeIntervalSchema>
type IntervalItemProps = {
  day: string
  register: RegisteIntervalItemProps
  control: ControlIntervalItemProps
  watch: WatchIntervalItemProp
  index: number
}

export const IntervalItem = ({
  day,
  register,
  index,
  watch,
  control,
}: IntervalItemProps) => {
  const intervals = watch('intervals')
  return (
    <S.IntervalItem>
      <S.IntervalDay>
        <Controller
          name={`intervals.${index}.enabled`}
          control={control}
          render={({ field }) => {
            return (
              <Checkbox
                onCheckedChange={(checked) => {
                  return field.onChange(checked === true)
                }}
                checked={field.value}
              />
            )
          }}
        />
        <Text>{day}</Text>
      </S.IntervalDay>
      <S.IntervalInputs>
        <TextField
          step={60}
          type="time"
          size="small"
          {...register(`intervals.${index}.startTime`)}
          disabled={intervals[index].enabled === false}
        />
        <TextField
          step={60}
          type="time"
          size="small"
          {...register(`intervals.${index}.endTime`)}
          disabled={intervals[index].enabled === false}
        />
      </S.IntervalInputs>
    </S.IntervalItem>
  )
}
