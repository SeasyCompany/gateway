import axios from 'axios'
import qs from 'querystring'
import { errorHandler } from '@vmotta8/price-comparison'
import { IProduct } from '../dtos'

export const MeliService = {
  async searchProducts (product: string, token: string): Promise<IProduct[]> {
    const meliUrl = process.env.MELI_URL || ''

    const headers = {
      Authorization: token
    }

    try {
      const response = await axios.get<IProduct[]>(
        `${meliUrl}/products?${qs.stringify({ product })}`,
        { headers }
      )

      return response.data
    } catch (error) {
      console.log(errorHandler.format(error))
      return []
    }
  }
}
