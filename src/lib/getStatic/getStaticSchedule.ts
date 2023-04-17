import { GetStaticProps } from 'next'

import { prisma } from '../prisma'
import { User } from '@/types/user'
import { REVALIDATE_GET_STATIC } from '@/config/env'

export const getStaticSchedule: GetStaticProps<User> = async ({ params }) => {
  const username = String(params?.username)

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      user: {
        name: user.name,
        bio: user.bio,
        avatarUrl: user.avatar_url,
      },
    },
    revalidate: REVALIDATE_GET_STATIC,
  }
}
