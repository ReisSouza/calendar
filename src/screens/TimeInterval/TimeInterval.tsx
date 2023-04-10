import React from 'react'

import { HeaderStep } from '@/features'

import * as S from './styles'
import { Box, Button } from '@ionext-ui/react'
import { ArrowRight } from '@phosphor-icons/react'
import { IntervalItem } from './components'
import { useFieldArray, useForm } from 'react-hook-form'
import { defaultValueTimeInterval } from './defaultValueTimeInterval'
import { getWeedDays } from '@/utils/get-week-days'

export const TimeInterval = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      intervals: defaultValueTimeInterval,
    },
  })

  const { fields } = useFieldArray({ control, name: 'intervals' })

  const weekDays = getWeedDays()

  console.log(errors)

  const onSubmit = () => {}
  return (
    <S.Container>
      <HeaderStep
        currentStep={3}
        title="Quase lá"
        description="Defina o intervalo de horários que você está disponível em cada dia da semana.
        "
      />

      <Box css={S.IntervalBox} as="form" onSubmit={handleSubmit(onSubmit)}>
        <S.IntervalContainer>
          {fields.map((field, index) => {
            return (
              <IntervalItem
                register={register}
                index={index}
                day={weekDays[field.weekDay]}
                key={field.id}
              />
            )
          })}
        </S.IntervalContainer>
        <Button
          type="submit"
          fullWidth
          isLoading={isSubmitting}
          iconRight={<ArrowRight size={20} />}
        >
          Proximo passo
        </Button>
      </Box>
    </S.Container>
  )
}
