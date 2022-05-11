import axios from 'axios'
import qs from 'querystring'
import { errorHandler } from '@seasy/package'
import { IProduct } from '../dtos'

export const ShopeeService = {
  async searchProducts (product: string, token: string): Promise<IProduct[]> {
    const shopeeUrl = process.env.SHOPEE_SERVICE_URL || ''

    const headers = {
      Authorization: token
    }

    try {
      const response = await axios.get<IProduct[]>(
        `${shopeeUrl}/products?${qs.stringify({ product })}`,
        { headers }
      )

      return response.data
    } catch (e: any) {
      const error = errorHandler.generate(3002, e)
      console.log(error.message)
      return []
    }
  }
}
