import { StitchesCSS } from '@/types/css'
import { styled } from '@ionext-ui/react'

export const UpdatedProfileContainer = styled('div', {
  maxWidth: '572px',
  margin: '$20 auto $4',
  padding: '0 $4',
})

export const BoxCSS: StitchesCSS = {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginTop: '$6',
}

export const WrappedInformationOfUser = styled('div', {})

export const WrappedAvatar = styled('div', {
  display: 'flex',
  gap: '$3',
  alignItems: 'center',
})
