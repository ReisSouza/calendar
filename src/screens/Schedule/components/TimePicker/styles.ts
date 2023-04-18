import { styled } from '@ionext-ui/react'

export const TimePickerContainer = styled('div', {
  borderLeft: '1px solid $secondary-light-active',
  position: 'relative',
  overflowY: 'scroll',
  overflowX: 'hidden',
  padding: ' $6 ',
  '&::-webkit-scrollbar': {
    display: 'none',
  },

  '@media (max-width:900px)': {
    // width: '540px',
  },
  '&:hover': {
    '&::-webkit-scrollbar': {
      display: 'block',
      backgroundColor: '$border',

      width: '$1',
      borderRadius: '$2 !important',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '$2 !important',

      backgroundColor: '$secondary-light-active',
    },
  },
})

export const TimePickerHeader = styled('header', {
  marginBottom: '$3',
  position: 'relative',
})

export const TimePickerList = styled('div', {
  width: '236px',
  position: 'absolute',

  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$2',

  '@media (max-width:900px)': {
    width: '100%',
    gridTemplateColumns: '1fr 1fr',
    position: 'relative',
  },
})

export const TimePickerItems = styled('button', {
  borderRadius: '$1',
  //   width: 'stretch',
  transition: 'all 250ms ease-in-out',
  width: '100%',

  border: 'none',
  padding: '$2 0',
  background: '$background',

  fontSize: '$sm',
  lineHeight: '$default',
  color: '$secondary-normal',

  cursor: 'pointer',

  '&:disabled': {
    background: 'none',
    cursor: 'default',
    opacity: 0.4,
  },

  '&:not(:disabled):hover': {
    background: '$secondary-light-normal',
  },
  '&:focus, :focus-visible': {
    boxShadow: '0 0 0 2px $colors$secondary-light-active !important',
    border: 'none',
    outline: 'none',
  },
})
