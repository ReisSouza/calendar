import React from 'react'

import * as S from './styles'
import { getWeedDays } from '@/utils/get-week-days'

export type THeadProps = {}

export const THead: React.FC<THeadProps> = ({ ...rest }: THeadProps) => {
  return (
    <S.THeadContainer>
      <tr>
        {getWeedDays({ short: true }).map((weekDay) => {
          return <th key={weekDay}>{weekDay}</th>
        })}
      </tr>
    </S.THeadContainer>
  )
}
