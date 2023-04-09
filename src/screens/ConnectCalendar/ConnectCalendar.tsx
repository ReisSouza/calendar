import React from 'react'
import { useRouter } from 'next/router'
import { Button, Text } from '@ionext-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { ArrowRight, Check } from '@phosphor-icons/react'

import { HeaderStep } from '@/features'

import * as S from './styles'

export const ConnectCalendar = () => {
  const { query } = useRouter()

  const session = useSession()

  const hasAuthError = !!query.error
  const isSignedIn = session.status === 'authenticated'

  const handleConnectCalendar = async () => {
    await signIn('google')
  }

  return (
    <S.Container>
      <HeaderStep
        currentStep={2}
        title="Conecte sua agenda"
        description="Conecte o seu calendário para verificar a automaticamente as horas ocupadas e os novos eventos à medida em que são agendados.
        "
      />

      <S.ConnectBox>
        <S.ConnectItem>
          <Text>Google Calendar</Text>
          <Button
            disabled={isSignedIn}
            size="small"
            color="primary"
            variant="outlined"
            iconRight={
              isSignedIn ? <Check size={20} /> : <ArrowRight size={20} />
            }
            css={{ borderColor: '$primary-normal' }}
            onClick={handleConnectCalendar}
          >
            {isSignedIn ? 'Conectado' : 'Conectar'}
          </Button>
        </S.ConnectItem>
        {hasAuthError && (
          <Text size="sm" color="danger" css={{ marginBottom: '$2' }}>
            Falha ao se conectar ao Google, verifique se você habilitou as
            permissões de acesso ao Google Calendar
          </Text>
        )}
        <Button
          type="submit"
          fullWidth
          disabled={!isSignedIn}
          iconRight={<ArrowRight size={20} />}
        >
          Proximo passo
        </Button>
      </S.ConnectBox>
    </S.Container>
  )
}
