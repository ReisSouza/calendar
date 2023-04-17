import React from 'react'
import { Avatar, Heading, Text } from '@ionext-ui/react'

import * as S from './styles'
import { User } from '@/types/user'
import { CalendarStep } from './components/CalendarStep/CalendarStep'

export type ScheduleProps = {
  user: User
}

export const Schedule: React.FC<ScheduleProps> = ({ user }: ScheduleProps) => {
  console.log(user)
  return (
    <S.ScheduleContainer>
      <S.ScheduleHeader>
        <Avatar src={user.user.avatarUrl!} fallbackName={user.user.name} />
        <Heading css={{ marginTop: '$2' }} color="secondary">
          {user.user.name}
        </Heading>
        <Text color="secondary" align={'center'} css={{ maxWidth: '320px' }}>
          {' '}
          {user.user.bio}
        </Text>
      </S.ScheduleHeader>
      <CalendarStep />
    </S.ScheduleContainer>
  )
}
