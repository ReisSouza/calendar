import { styled } from '@ionext-ui/react'

export const TbodyContainer = styled('tbody', {
  boxSizing: 'border-box',
  '&:before': {
    content: '.',
    lineHeight: '0.75rem',
    display: 'block',
    color: 'transparent',
  },
  td: {
    boxSizing: 'border-box',
  },
})
export const CalendarDay = styled('button', {
  all: 'unset',
  width: '100%',
  aspectRatio: '1 / 1',
  background: '$background',
  textAlign: 'center',
  cursor: 'pointer',

  borderRadius: '$1',

  color: '$secondary-normal',

  fontWeight: '$bold',

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$secondary-light-active',
  },

  '&:disabled': {
    background: 'none',
    cursor: 'default',
    opacity: 0.4,
  },

  '&:not(:disabled):hover': {
    background: '$secondary-light-normal',
  },
})
