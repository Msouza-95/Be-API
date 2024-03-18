import Sale from '#models/sale'

export class SalesViewModel {
  static toHTTP(sale: Sale) {
    return {
      id: sale.id,
      date_time: sale.date_time,
      customer_id: sale.customer_id,
      product_id: sale.product_id,
      quantity: sale.quantity,
      unit_price: sale.unit_price,
      total_price: sale.total_price,
    }
  }
}
