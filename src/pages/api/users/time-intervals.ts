import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../auth/[...nextauth]'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const timeIntervalBodySchema = z.object({
  intervals: z.array(
    z.object({
      weekDay: z
        .number()
        .min(0, { message: 'Dia da semana invalido' })
        .max(6, { message: 'Dia da semana invalido' }),
      startTimeInMinutes: z
        .number()
        .min(0, { message: 'Horário inicio e obrigatório' })
        .max(1380, { message: 'Horário de inicio precisa ser mais cedo' }),
      endTimeInMinutes: z
        .number()
        .max(1440, { message: 'Horário final incorreto' })
        .min(60, {
          message: 'Horário final precisa ser maior que o horário inicial',
        }),
    }),
  ),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(401).json({ message: 'Not found allowed method' })
  }

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) {
    return res.status(401).json({ message: 'You must be logged in.' })
  }

  const { intervals } = timeIntervalBodySchema.parse(req.body)

  const data = intervals.map((interval) => ({
    week_day: interval.weekDay,
    time_start_in_minutes: interval.startTimeInMinutes,
    time_end_in_minutes: interval.endTimeInMinutes,
    user_id: session.user?.id,
  }))

  await prisma.userTimeInterval.createMany({
    data,
  })

  return res.status(201).json({
    message: 'Interval create with success',
  })
}
