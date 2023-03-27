import { StitchesCSS } from '@/types/css'
import { styled } from '@ionext-ui/react'

export const Container = styled('main', {
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
