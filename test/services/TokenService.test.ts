import axios from 'axios'
import { TokenService } from '../../src/services/TokenService'
import { RedisProviderInMemory } from '../providers/RedisProviderInMemory'

const Redis = new RedisProviderInMemory()
axios.post = jest.fn((): any => { return { data: { access_token: '123456789' } } })
process.env.COGNITO_URL = 'COGNITO_URL'
process.env.COGNITO_AUTHORIZATION = 'COGNITO_AUTHORIZATION'

describe('token service', () => {
  it('should return a cognito bearer token', async () => {
    const data = await TokenService.generate(Redis)
    expect(data.access_token).toBe('123456789')
  })
})
