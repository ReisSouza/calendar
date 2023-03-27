import { z } from 'zod'

export const registerFormSchema = z.object({
  username: z
    .string({ required_error: 'Nome do usuário é obrigatório' })
    .nonempty({ message: 'Nome do usuário é obrigatório' })
    .min(3, { message: 'Nome do usuário deve conter ao menor 3 letras' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Nome do usuário poder ter apenas letras e hifens',
    })
    .transform((username) => username.toLowerCase()),
  name: z
    .string({ required_error: 'Nome  é obrigatório' })
    .nonempty({ message: 'Nome  é obrigatório' })
    .min(3, { message: 'Nome  deve conter ao menor 3 letras' }),
})

export type RegisterFormSchema = z.infer<typeof registerFormSchema>
