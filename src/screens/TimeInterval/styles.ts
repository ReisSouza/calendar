import { Box, styled } from '@ionext-ui/react'

export const Container = styled('main', {
  maxWidth: '572px',
  margin: '$20 auto $4',
  padding: '0 $4',
})

export const IntervalBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
  padding: '$4',

  borderWidth: '$default',
  borderColor: '$border',
  borderStyle: 'solid',
  borderRadius: '$2',
})

export const IntervalContainer = styled('div', {
  borderRadius: '$2',

  borderWidth: '$default',
  borderColor: '$border',
  borderStyle: 'solid',
})

export const IntervalItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$3 $4',

  '& + &': {
    borderTopColor: '$border',
    borderTopStyle: 'solid',
    borderTopWidth: '$default',
  },
})

export const IntervalDay = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
})

export const IntervalInputs = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  'input::-webkit-calendar-picker-indicator': {
    filter: 'invert(100%) brightness(30%)',
  },
})
