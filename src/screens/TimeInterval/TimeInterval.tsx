import React from 'react'

import { HeaderStep } from '@/features'

import * as S from './styles'
import { Button, Checkbox, Text, TextField } from '@ionext-ui/react'
import { ArrowRight } from '@phosphor-icons/react'

export const TimeInterval = () => {
  return (
    <S.Container>
      <HeaderStep
        currentStep={3}
        title="Quase lá"
        description="Defina o intervalo de horários que você está disponível em cada dia da semana.
        "
      />

      <S.IntervalBox as="form">
        <S.IntervalContainer>
          <S.IntervalItem>
            <S.IntervalDay>
              <Checkbox />
              <Text>Segunda-feira</Text>
            </S.IntervalDay>
            <S.IntervalInputs>
              <TextField type="time" size="small" step={60} />
              <TextField type="time" size="small" step={60} />
            </S.IntervalInputs>
          </S.IntervalItem>
          <S.IntervalItem>
            <S.IntervalDay>
              <Checkbox />
              <Text>Terça-feira</Text>
            </S.IntervalDay>
            <S.IntervalInputs>
              <TextField type="time" size="small" step={60} />
              <TextField type="time" size="small" step={60} />
            </S.IntervalInputs>
          </S.IntervalItem>
        </S.IntervalContainer>
        <Button type="submit" fullWidth iconRight={<ArrowRight size={20} />}>
          Proximo passo
        </Button>
      </S.IntervalBox>
    </S.Container>
  )
}
