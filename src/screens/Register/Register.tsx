import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Heading, MultiStep, Text, TextField } from '@ionext-ui/react'
import { ArrowRight } from '@phosphor-icons/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import * as S from './styles'
import { RegisterFormSchema, registerFormSchema } from './validation'

export const Register = () => {
  const { query } = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormSchema>({ resolver: zodResolver(registerFormSchema) })

  useEffect(() => {
    if (query.username) {
      setValue('username', query?.username as string)
    }
  }, [query?.username, setValue])

  return (
    <S.Container>
      <S.Header>
        <Heading as={'strong'}>Bem vindo ao Odonto IO</Heading>
        <Text css={{ margin: '$2 0 $4' }}>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois
        </Text>
        <MultiStep size={4} currentStep={1} />
      </S.Header>
      <S.Form as="form" onSubmit={handleSubmit(() => {})}>
        <TextField
          defaultValue={query.username}
          {...register('username')}
          label="Usuário"
          hint={errors.username?.message}
        />
        <TextField
          {...register('name')}
          label="Nome completo"
          hint={errors.name?.message}
        />
        <Button type="submit" iconRight={<ArrowRight size={20} />}>
          Proximo passo
        </Button>
      </S.Form>
    </S.Container>
  )
}
