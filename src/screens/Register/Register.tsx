import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ArrowRight } from '@phosphor-icons/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, TextField, Toast } from '@ionext-ui/react'

import { api } from '@/lib/axios'
import { HeaderStep } from '@/features'
import { UseToast } from '@/hooks/useToast'

import * as S from './styles'
import { RegisterFormSchema, registerFormSchema } from './validation'

export const Register = () => {
  const { addNewToast, listToast } = UseToast()

  const { query, push } = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormSchema>({ resolver: zodResolver(registerFormSchema) })

  const handleRegister = async (data: RegisterFormSchema) => {
    try {
      const res = await api.post('/users', {
        name: data.name,
        username: data.username,
      })

      addNewToast({
        title: 'Criação de usuário',
        description: res.data.message,
        variant: 'success',
      })

      await push('/register/connect-calendar')
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

  useEffect(() => {
    if (query.username) {
      setValue('username', query?.username as string)
    }
  }, [query?.username, setValue])

  return (
    <S.Container>
      <HeaderStep
        title="Bem vindo ao Odonto IO"
        description="Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois"
        currentStep={1}
      />
      <Box css={S.BoxCSS} as="form" onSubmit={handleSubmit(handleRegister)}>
        <TextField
          label="Usuário"
          {...register('username')}
          defaultValue={query.username}
          hint={errors.username?.message}
        />
        <TextField
          {...register('name')}
          label="Nome completo"
          hint={errors.name?.message}
        />
        <Button
          fullWidth
          type="submit"
          disabled={isSubmitting}
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
