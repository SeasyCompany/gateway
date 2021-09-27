import axios from 'axios'
import { TokenService } from '../../src/services/TokenService'
import { RedisProviderInMemory } from '../providers/RedisProviderInMemory'

const Redis = new RedisProviderInMemory()
let Url: any; let Headers: any
axios.post = jest.fn((url, data, config): any => {
  Url = url
  Headers = config?.headers
  return {
    data: {
      access_token: '123456789'
    }
  }
})

describe('token service', () => {
  it('should return a cognito bearer token', async () => {
    const data = await TokenService.generate(Redis)
    expect(data.access_token).toBe('123456789')
    expect(Url.length).toBe(177)
    expect(Headers.Authorization.length).toBe(110)
  })
})
