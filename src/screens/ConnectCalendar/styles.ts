import { Box, styled } from '@ionext-ui/react'

export const Container = styled('main', {
  maxWidth: '572px',
  margin: '$20 auto $4',
  padding: '0 $4',
})

export const ConnectBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
})

export const ConnectItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '$4 $6',

  borderRadius: '$2',

  marginBottom: '$2',

  borderWidth: 'thin',
  borderColor: '$border',
  borderStyle: 'solid',
})
