import { StitchesCSS } from '@/types/css'
import { styled } from '@ionext-ui/react'

export const Container = styled('main', {
  maxWidth: '572px',
  margin: '$20 auto $4',
  padding: '0 $4',
})

export const IntervalBox: StitchesCSS = {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
  padding: '$4',
}
export const IntervalContainer = styled('div', {
  borderRadius: '$2',

  borderWidth: '$default',
  borderColor: '$border',
  borderStyle: 'solid',

  marginBottom: '$2',
})
