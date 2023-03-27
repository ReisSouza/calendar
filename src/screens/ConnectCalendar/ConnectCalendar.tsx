import { HeaderStep } from '@/features'
import { UseToast } from '@/hooks/useToast'
import { Button, Text, Toast } from '@ionext-ui/react'
import { ArrowRight } from '@phosphor-icons/react'

import React from 'react'

import * as S from './styles'

export const ConnectCalendar = () => {
  const { addNewToast, listToast } = UseToast()

  console.log(addNewToast)

  return (
    <S.Container>
      <HeaderStep
        currentStep={2}
        title="Conecte sua agenda"
        description="Conecte o seu calendário para verificar a automaticamente as horas ocupadas e os novos eventos à medida em que são agendados.
        "
      />

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

      <S.ConnectBox>
        <S.ConnectItem>
          <Text>Google Calendar</Text>
          <Button
            size="small"
            color="primary"
            variant="outlined"
            iconRight={<ArrowRight size={20} />}
            css={{ borderColor: '$primary-normal' }}
          >
            Conectar
          </Button>
        </S.ConnectItem>
        <Button
          type="submit"
          css={{ width: '100%' }}
          iconRight={<ArrowRight size={20} />}
        >
          Proximo passo
        </Button>
      </S.ConnectBox>
    </S.Container>
  )
}
