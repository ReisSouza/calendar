import { UpdateProfile } from '@/screens'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import React from 'react'
import { buildNextAuthOptions } from '../api/auth/[...nextauth]'

const UpdateProfilePage = () => {
  return <UpdateProfile />
}

export default UpdateProfilePage

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}
