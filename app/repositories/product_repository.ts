import Product from '#models/product'
import { CreateProductDTO } from '../contracts/dto/product_dto.js'
import { StatusEnum } from '../contracts/enum/enums.js'

import IProductRepository from '../contracts/repositories/iproduct_repository copy.js'

class ProductRepository implements IProductRepository {
  async create(data: CreateProductDTO): Promise<Product> {
    const customer = await Product.create(data)

    return customer
  }

  async findById(id: number): Promise<Product | null> {
    const findProduct = await Product.findBy('id', id)

    return findProduct
  }
  async save(product: Product): Promise<Product> {
    await product.save()

    return product
  }

  async delete(id: number): Promise<void> {
    const product = await Product.find(id)

    await product?.delete()
    return
  }

  async findAll(): Promise<Product[]> {
    const products = await Product.query().where('status', '=', StatusEnum.ATIVO)
    return products
  }

  async findName(name: string): Promise<Product | null> {
    const findProduct = await Product.findBy('name', name)

    return findProduct
  }
}

export default ProductRepository
