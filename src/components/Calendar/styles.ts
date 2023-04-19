import { styled } from '@ionext-ui/react'

export const CalendarContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  padding: '$6',
  position: 'relative',
})

export const CalendarBody = styled('table', {
  width: '100%',
  fontFamily: '$default',
  borderSpacing: '0.25rem',
  tableLayout: 'fixed',
})
