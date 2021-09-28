import axios from 'axios'
import qs from 'querystring'
import { errorHandler } from '@vmotta8/price-comparison'
import { IProduct } from '../dtos'

export const ShopeeService = {
  async searchProducts (product: string, token: string): Promise<IProduct[]> {
    const shopeeUrl = process.env.SHOPEE_URL || ''

    const headers = {
      Authorization: token
    }

    try {
      const response = await axios.get<IProduct[]>(
        `${shopeeUrl}/products?${qs.stringify({product})}`,
        { headers }
      )

      return response.data
    } catch (error) {
      errorHandler.format(error)
      return []
    }
  }
}
