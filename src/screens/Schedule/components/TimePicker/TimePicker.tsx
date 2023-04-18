import React from 'react'

import * as S from './styles'
import { Text } from '@ionext-ui/react'

export type TimePickerProps = {}

export const TimePicker: React.FC<TimePickerProps> = ({
  ...rest
}: TimePickerProps) => {
  return (
    <S.TimePickerContainer>
      <Text
        size="md"
        color="secondary"
        css={{ fontWeight: '$bold', marginBottom: '$3' }}
      >
        <time>
          terça-feira <span> 20 de setembro</span>
        </time>
      </Text>
      <S.TimePickerList>
        {Array.from(Array(24)).map((hour, index) => {
          return <S.TimePickerItems key={index}>{index}</S.TimePickerItems>
        })}
      </S.TimePickerList>
    </S.TimePickerContainer>
  )
}
