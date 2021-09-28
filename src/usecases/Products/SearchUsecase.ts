import { TokenService, ShopeeService, MeliService } from '../../services'
import { mergeProducts } from '../../helpers/mergeProducts'
import { ICacheProvider } from '../../providers/ICacheProvider'
import { IProduct } from '../../dtos'
import { sortProductsByPrice, formatString } from '@vmotta8/price-comparison'

interface Payload {
  product: string;
}
export class SearchUsecase {
  constructor (
    private cache: ICacheProvider
  ) { }

  async execute (queryStringParameters: Payload): Promise<IProduct[]> {
    const { product } = queryStringParameters

    const cacheProductName = formatString(product).replace(/ /g, '')
    const cacheProducts = await this.cache.get(`products:${cacheProductName}`)

    if (cacheProducts) {
      return JSON.parse(cacheProducts)
    }

    const { access_token } = await TokenService.generate(this.cache)

    const productsArray = await Promise.all([
      ShopeeService.searchProducts(product, access_token),
      MeliService.searchProducts(product, access_token)
    ])

    const mergedProducts = mergeProducts(productsArray)
    const sortedProducts = sortProductsByPrice(mergedProducts)

    if (sortedProducts.length) {
      await this.cache.set(`products:${cacheProductName}`, JSON.stringify(sortedProducts), 3600)
    }

    return sortedProducts
  }
}
