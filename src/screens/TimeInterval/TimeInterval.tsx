import React from 'react'

import { HeaderStep } from '@/features'

import * as S from './styles'
import { Box, Button, Text, Toast } from '@ionext-ui/react'
import { ArrowRight } from '@phosphor-icons/react'
import { IntervalItem } from './components'
import { useFieldArray, useForm } from 'react-hook-form'
import { defaultValueTimeInterval } from './defaultValueTimeInterval'
import { getWeedDays } from '@/utils/get-week-days'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  TimeIntervalOutputSchema,
  TimeIntervalInputSchema,
  timeIntervalSchema,
} from './validation'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'
import { AxiosError } from 'axios'
import { UseToast } from '@/hooks/useToast'

export const TimeInterval = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<TimeIntervalInputSchema>({
    defaultValues: {
      intervals: defaultValueTimeInterval,
    },
    resolver: zodResolver(timeIntervalSchema),
  })

  const router = useRouter()

  const { addNewToast, listToast } = UseToast()

  const { fields } = useFieldArray({ control, name: 'intervals' })

  const weekDays = getWeedDays()

  console.log(errors)

  const onSubmit = async (data: any) => {
    const { intervals } = data as TimeIntervalOutputSchema

    try {
      await api.post('users/time-intervals', { intervals })

      await router.push('/register/update-profile')
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data.message) {
        addNewToast({
          title: 'Atualização do perfil',
          description: error.response.data.message,
          variant: 'danger',
        })
      }
    }
  }
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
                index={index}
                watch={watch}
                key={field.id}
                control={control}
                register={register}
                day={weekDays[field.weekDay]}
              />
            )
          })}
        </S.IntervalContainer>
        {errors.intervals?.message && (
          <Text css={{ marginBottom: '$6' }} color="danger">
            {errors.intervals?.message}
          </Text>
        )}
        <Button
          type="submit"
          fullWidth
          isLoading={isSubmitting}
          iconRight={<ArrowRight size={20} />}
        >
          Proximo passo
        </Button>
      </Box>
      {listToast.map((toastItem, index) => {
        return (
          <Toast
            key={index}
            title={toastItem.title}
            description={toastItem.description}
            variant={toastItem.variant}
          />
        )
      })}
    </S.Container>
  )
}
