import React from 'react'

import * as S from './styles'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

export type HeaderProps = {}

export const Header: React.FC<HeaderProps> = ({ ...rest }: HeaderProps) => {
  return (
    <S.HeaderContainer>
      <time>
        <S.CalendarTitle>
          Dezembro <span>2022</span>
        </S.CalendarTitle>
      </time>
      <S.CalendarActions>
        <button type="button">
          <CaretLeft />
        </button>
        <button type="button">
          <CaretRight />
        </button>
      </S.CalendarActions>
    </S.HeaderContainer>
  )
}
