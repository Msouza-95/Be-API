import Product from '#models/product'

export class ProductViewModel {
  static toBasicHTTP(product: Product) {
    return {
      id: product.id,
      nome: product.name,
      description: product.description,
      price: product.price,
    }
  }

  static tofullHTTP(product: Product) {
    return {
      id: product.id,
      nome: product.name,
      description: product.description,
      category: product.category,
      bran: product.brand,
      price: product.price,
      stock_quantiy: product.stock_quantity,
      status: product.status,
    }
  }
}
