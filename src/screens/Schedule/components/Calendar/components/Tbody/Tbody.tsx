import React from 'react'

import * as S from './styles'

export type TbodyProps = {}

export const Tbody: React.FC<TbodyProps> = ({ ...rest }: TbodyProps) => {
  return (
    <S.TbodyContainer>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <S.CalendarDay disabled>1</S.CalendarDay>
        </td>
        <td>
          <S.CalendarDay>2</S.CalendarDay>
        </td>
        <td>
          <S.CalendarDay>3</S.CalendarDay>
        </td>
      </tr>
    </S.TbodyContainer>
  )
}
