import { z } from 'zod'

export const updateProfileSchema = z.object({
  bio: z.string().nonempty({ message: 'Bio e obrigatório' }),
})

export type UpdateProfileSchema = z.infer<typeof updateProfileSchema>
