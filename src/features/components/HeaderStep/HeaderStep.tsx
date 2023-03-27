import { Heading, MultiStep, Text } from '@ionext-ui/react'
import React from 'react'

import * as S from './styles'

type HeaderStepProps = {
  currentStep: number
  title: string
  description: string
}

export const HeaderStep: React.FC<HeaderStepProps> = ({
  currentStep,
  description,
  title,
}: HeaderStepProps) => {
  return (
    <S.Header>
      <Heading as={'strong'}>{title}</Heading>
      <Text css={S.TextCSS}>{description}</Text>
      <MultiStep size={4} currentStep={currentStep} />
    </S.Header>
  )
}
