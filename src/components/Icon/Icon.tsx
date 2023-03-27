import React, { ComponentProps } from 'react'
import * as S from './styles'
import iconSet from '../../assets/icons.json'

type IconProps = ComponentProps<typeof S.Icon> & {
  color?: string
  size: string | number
  icon: string
  className?: string
}

export const Icon: React.FC<IconProps> = ({
  icon,
  size,
  className,
  color,
}: IconProps) => {
  return (
    <S.Icon
      className={className}
      color={color || 'inherit'}
      iconSet={iconSet}
      size={size}
      icon={icon}
    />
  )
}
