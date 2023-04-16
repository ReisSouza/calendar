import React from 'react'

import { Avatar, Box, Button, Text, TextArea, Toast } from '@ionext-ui/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as S from './styles'
import { HeaderStep } from '@/features'
import { UpdateProfileSchema, updateProfileSchema } from './validation'
import { ArrowRight } from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'
import { UseToast } from '@/hooks/useToast'
import { AxiosError } from 'axios'

export type UpdatedProfileProps = {}

export const UpdateProfile: React.FC<UpdatedProfileProps> = ({
  ...rest
}: UpdatedProfileProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateProfileSchema>({
    resolver: zodResolver(updateProfileSchema),
  })

  const session = useSession()
  const router = useRouter()

  const { addNewToast, listToast } = UseToast()

  const handleUpdateProfile = async (data: UpdateProfileSchema) => {
    try {
      await api.put('/users/update-profile', {
        bio: data.bio,
      })
      await router.push(`/schedule/${session?.data?.user.username}`)
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
    <S.UpdatedProfileContainer>
      <HeaderStep
        title="Finalizar"
        description="Por último, uma breve descrição "
        currentStep={4}
      />
      <Box
        as="form"
        onSubmit={handleSubmit(handleUpdateProfile)}
        css={S.BoxCSS}
      >
        <Text css={{ fontWeight: '$bold' }} size="sm" color="secondary">
          Informações pessoais
        </Text>
        <S.WrappedAvatar>
          <Avatar src={session?.data?.user.avatar_url} />
          <div>
            <Text size="sm" color="secondary">
              {session.data?.user.name}
            </Text>
            <Text size="sm" color="secondary">
              {session.data?.user.email}
            </Text>
          </div>
        </S.WrappedAvatar>
        <div>
          <TextArea
            label="Sobre você"
            {...register('bio')}
            status={errors.bio?.message ? 'error' : 'default'}
            hint={errors.bio?.message}
          />
          <Text css={{ marginTop: '$2' }} size="sm" color="secondary">
            Fale um pouco sobre você. Isto será exibido em sua pagina pessoal.
          </Text>
        </div>
        <Button
          fullWidth
          type="submit"
          isLoading={isSubmitting}
          iconRight={<ArrowRight size={20} />}
        >
          Finalizar
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
    </S.UpdatedProfileContainer>
  )
}
