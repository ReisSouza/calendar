import { StitchesCSS } from '@/types/css'
import { styled } from '@ionext-ui/react'

export const ConfirmStepContainer: StitchesCSS = {
  maxWidth: '540px',
  margin: '$6 auto 0',
  display: 'flex',
  flexDirection: 'column',

  gap: '$4',
}

export const ConfirmStepHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  paddingTop: '$2',
  paddingBottom: '$4',
  marginBottom: '$2',
  borderBottom: '1px solid $border',

  p: {
    display: 'flex',
    gap: '$2',
    alignItems: 'center',
    color: '$secondary-normal',
    svg: {
      color: '$secondary-normal',
      width: '$5',
      height: '$5',
    },
  },
})

export const FormActions = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '$2',
  marginTop: '$2',
})
