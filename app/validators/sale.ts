import vine from '@vinejs/vine'

export const createSaleValidator = vine.compile(
  vine.object({
    customer_id: vine.number(),
    product_id: vine.number(),
    quantity: vine.number(),
    unit_price: vine.number(),
  })
)
