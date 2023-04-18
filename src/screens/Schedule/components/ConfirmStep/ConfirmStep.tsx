import React from 'react'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { UseToast } from '@/hooks/useToast'
import { zodResolver } from '@hookform/resolvers/zod'
import { CalendarBlank, Clock } from '@phosphor-icons/react'
import { Box, Button, Text, TextArea, TextField, Toast } from '@ionext-ui/react'

import * as S from './styles'
import { ConfirmFormSchema, confirmFormSchema } from './validation'

export type ConfirmStepProps = {}

export const ConfirmStep: React.FC<ConfirmStepProps> = () => {
  const { addNewToast, listToast } = UseToast()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ConfirmFormSchema>({ resolver: zodResolver(confirmFormSchema) })

  const handleConfirm = async (data: ConfirmFormSchema) => {
    try {
      console.log(data)
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data.message) {
        addNewToast({
          title: 'Criação de usuário',
          description: error.response.data.message,
          variant: 'danger',
        })
      }
    }
  }
  return (
    <Box
      onSubmit={handleSubmit(handleConfirm)}
      as="form"
      css={S.ConfirmStepContainer}
      variant="primary"
    >
      <S.ConfirmStepHeader>
        <Text>
          <CalendarBlank />
          22 de Setembro de 2022
        </Text>
        <Text>
          <Clock />
          18:00h
        </Text>
      </S.ConfirmStepHeader>
      <TextField
        {...register('name')}
        label="Nome completo"
        placeholder="Seu nome"
        hint={errors?.name?.message}
        status={errors?.name?.message ? 'error' : 'default'}
      />
      <TextField
        {...register('email')}
        type="email"
        label="Endereço de email"
        placeholder="johndoe@example.com"
        hint={errors?.email?.message}
        status={errors?.email?.message ? 'error' : 'default'}
      />
      <TextArea
        label="Observações"
        {...register('observation')}
        hint={errors?.observation?.message}
        status={errors?.observation?.message ? 'error' : 'default'}
      />
      <S.FormActions>
        <Button variant="text">Cancelar</Button>
        <Button type="submit" isLoading={isSubmitting}>
          Enviar
        </Button>
      </S.FormActions>
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
    </Box>
  )
}
