import { Text, styled } from '@ionext-ui/react'

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '$secondary-normal',
})

export const CalendarTitle = styled(Text, {
  fontWeight: 'bold',
  textTransform: 'capitalize',

  span: {
    fontWeight: 'bolder',
  },
})

export const CalendarActions = styled('div', {
  display: 'flex',
  gap: '$2',

  button: {
    all: 'unset',
    cursor: 'pointer',
    lineHeight: '0',
    borderRadius: '$1',

    transition: 'all 250ms ease-in-out',

    svg: {
      width: '$5',
      height: '$5',
    },

    '&:hover': {
      background: '$background',
    },

    '&:focus': {
      boxShadow: '0 0 0 2px $colors$secondary-normal',
    },
  },
})
