import axios from 'axios'
import { errorHandler } from '@vmotta8/price-comparison'
import { ICacheProvider } from '../providers/ICacheProvider'

interface TokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export const TokenService = {
  async generate (cache: ICacheProvider): Promise<TokenResponse> {
    // locally the token is not needed
    if (process.env.NODE_ENV === 'local') {
      return {
        access_token: 'string',
        expires_in: 3600,
        token_type: 'string'
      }
    }

    // try to collect the token in the cache
    try {
      const tokenObj = await cache.get('token:access_token')
      if (tokenObj) {
        return JSON.parse(tokenObj)
      }
    } catch (error) {
      console.log(errorHandler.format(error))
    }

    const url = process.env.COGNITO_URL || ''
    const authorization = process.env.COGNITO_AUTHORIZATION || ''

    if (!url || !authorization) {
      throw errorHandler.generate(1001)
    }

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: authorization
    }

    try {
      const response = await axios.post<TokenResponse>(
        url, {}, { headers }
      )

      // add the token to the cache
      await cache.set('token:access_token', JSON.stringify(response.data), 600)

      return response.data
    } catch (e) {
      throw errorHandler.generate(3001, e)
    }
  }
}
