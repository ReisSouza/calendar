import React from 'react'
import Image from 'next/image'
import { Heading, Text } from '@ionext-ui/react'

import previewImg from '@/assets/home/preview.svg'

import * as S from './styles'
import { ClaimUsernameForm } from './components/ClaimUsernameForm/ClaimUsernameForm'

export const Home = () => {
  return (
    <S.Container>
      <S.Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <ClaimUsernameForm />
      </S.Hero>
      <S.Preview>
        <Image
          src={previewImg}
          alt="Calendário simbolizando aplicação em funcionamento"
          quality={1}
          height={400}
          priority
        />
      </S.Preview>
    </S.Container>
  )
}
