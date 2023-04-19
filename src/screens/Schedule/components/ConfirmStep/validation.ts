import { z } from 'zod'

export const confirmFormSchema = z.object({
  email: z
    .string({ required_error: 'Email é obrigatório' })
    .nonempty({ message: 'Email é obrigatório' })
    .email({ message: 'Digite um formato de email valido' }),
  name: z
    .string({ required_error: 'Nome  é obrigatório' })
    .nonempty({ message: 'Nome  é obrigatório' })
    .min(3, { message: 'Nome  deve conter ao menor 3 letras' }),
  observation: z.string().nullable(),
})

export type ConfirmFormSchema = z.infer<typeof confirmFormSchema>
