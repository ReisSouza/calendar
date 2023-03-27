// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { name, username } = req.body

  const userAlreadyExists = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (userAlreadyExists) {
    return res.status(400).json({
      message: `Usuário com o username : ${userAlreadyExists.username} já existe, caso tenha esquecido a senha tente recuperar o usuário `,
    })
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  setCookie({ res }, '@odonto-io:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 Days
    path: '/',
  })

  return res.status(201).json({
    data: user,
    message: `Novo usuário com o Username: ${user.username}, foi criado com sucesso!`,
  })
}
