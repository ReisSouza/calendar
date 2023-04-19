import React, { useEffect, useState } from 'react'

import * as S from './styles'
import { Availability, TimePicker } from '../TimePicker/TimePicker'
import { Calendar } from '@/components'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'

export type CalendarStepProps = {}

export const CalendarStep: React.FC<CalendarStepProps> = ({
  ...rest
}: CalendarStepProps) => {
  const { query } = useRouter()

  const username = String(query.username)

  const [selectedDate, setSelectDate] = useState<Date | null>(null)

  const [availability, setAvailability] = useState<Availability | null>(null)

  useEffect(() => {
    if (!selectedDate) {
      return
    }
    api
      .get(`users/${username}/avalability`, {
        params: {
          date: dayjs(selectedDate).format('YYYY-MM-DD'),
        },
      })
      .then((response) => {
        setAvailability(response.data)
      })
  }, [selectedDate])

  return (
    <S.CalendarStepContainer
      variant={'primary'}
      isTimePickerOpen={!!selectedDate}
    >
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectDate} />
      {!!selectedDate && (
        <TimePicker availability={availability} selectedDate={selectedDate} />
      )}
    </S.CalendarStepContainer>
  )
}
