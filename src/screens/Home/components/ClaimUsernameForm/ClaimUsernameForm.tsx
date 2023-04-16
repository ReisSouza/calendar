import { Icon } from '@/components'
import { Box, Button, Text, TextField } from '@ionext-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as S from './styles'
import { ClaimUsernameFormSchema, claimUsernameFormSchema } from './validation'
import { useRouter } from 'next/router'

export const ClaimUsernameForm = () => {
  const { push } = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormSchema>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleClaimUsername(data: ClaimUsernameFormSchema) {
    await push(`/register?username=${data.username}`)
  }
  return (
    <>
      <Box
        as="form"
        css={S.BoxCSS}
        onSubmit={handleSubmit(handleClaimUsername)}
      >
        <TextField
          type="text"
          size="small"
          placeholder="usuário"
          {...register('username')}
        />

        <Button
          disabled={isSubmitting}
          iconRight={<Icon icon="Calendar-Add" size={20} />}
          size="small"
          type="submit"
        >
          Agendar
        </Button>
      </Box>
      <Text
        size="sm"
        color={errors.username?.message ? 'danger' : 'text'}
        css={{
          marginTop: '$2',
        }}
      >
        {errors.username?.message
          ? errors.username?.message
          : 'Digite o nome do paciente'}
      </Text>
    </>
  )
}
