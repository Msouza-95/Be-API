import CreateProductService from '#services/product/create_produtc_service'
import IndexProductService from '#services/product/index_product_service'
import ShowProductService from '#services/product/show_product_service'
import SoftDeleteProductService from '#services/product/soft_delete_product_service '
import UpdateProductService from '#services/product/update_product_service'
import { createProductValidator } from '#validators/product'
import type { HttpContext } from '@adonisjs/core/http'
import { StatusEnum } from '../contracts/enum/enums.js'
import { ProductViewModel } from '../view-models/product_view_model.js'
import { inject } from '@adonisjs/core'

@inject()
export default class ProductsController {
  constructor(
    protected createProductService: CreateProductService,
    protected updateProductService: UpdateProductService,
    protected softDeleteProductService: SoftDeleteProductService,
    protected indexProductService: IndexProductService,
    protected showProductService: ShowProductService
  ) {}

  async store({ request, response }: HttpContext) {
    const data = request.body()

    await createProductValidator.validate(data)

    const { name, description, category, brand, price, stockQuantity } = data

    const product = await this.createProductService.execute({
      name,
      description,
      category,
      brand,
      price,
      stock_quantity: stockQuantity,
      status: StatusEnum.ATIVO,
    })

    response.status(201).json({ produt: ProductViewModel.tofullHTTP(product) })
  }
  async update({ request, response }: HttpContext) {
    const { id } = request.params()

    const data = request.body()

    await createProductValidator.validate(data)

    const { name, description, category, brand, price, stockQuantity } = data

    const res = await this.updateProductService.execute({
      id,
      name,
      description,
      category,
      brand,
      price,
      stock_quantity: stockQuantity,
      status: StatusEnum.ATIVO,
    })

    response.status(200).json(res)
  }

  async destroy({ request, response }: HttpContext) {
    const { id } = request.params()

    await this.softDeleteProductService.execute(id)

    response.status(200).json({ message: 'Soft dalete product' })
  }

  async index({ response }: HttpContext) {
    const products = await this.indexProductService.execute()

    response.status(200).json({ products: products.map(ProductViewModel.toBasicHTTP) })
  }

  async show({ request, response }: HttpContext) {
    const { id } = request.params()
    const product = await this.showProductService.execute(id)

    response.status(200).json({ product: ProductViewModel.tofullHTTP(product) })
  }
}
