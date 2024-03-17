import vine from '@vinejs/vine'

export const createProductValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
    description: vine.string().trim().maxLength(300),
    category: vine.string().trim(),
    brand: vine.string().trim(),
    price: vine.number(),
    stockQuantity: vine.number(),
  })
)
