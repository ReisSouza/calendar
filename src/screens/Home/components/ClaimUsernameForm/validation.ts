import { z } from 'zod'

export const claimUsernameFormSchema = z.object({
  username: z
    .string({ required_error: 'Nome do usuário é obrigatório' })
    .nonempty({ message: 'Nome do usuário é obrigatório' })
    .min(3, { message: 'Nome do usuário deve conter ao menor 3 letras' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Nome do usuário poder ter apenas letras e hifens',
    })
    .transform((username) => username.toLowerCase()),
})

export type ClaimUsernameFormSchema = z.infer<typeof claimUsernameFormSchema>
