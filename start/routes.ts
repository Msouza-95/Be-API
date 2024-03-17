/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const UsersController = () => import('#controllers/users_controller')
const CustomersController = () => import('#controllers/customers_controller')
const ProductsController = () => import('#controllers/products_controller')

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

//user
router.resource('/signup', UsersController).apiOnly()

//customers
router.resource('/customer', CustomersController).apiOnly()

//product
router.resource('/product', ProductsController).apiOnly()
