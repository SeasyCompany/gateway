import axios from 'axios'
import { SearchUsecase } from '../../../src/usecases/Products/SearchUsecase'
import { allProducts } from '../../mocks/allProducts'
import { RedisProviderInMemory } from '../../providers/RedisProviderInMemory'

axios.post = jest.fn((): any => { return { data: { access_token: '123456789' } } })
axios.get = jest.fn((): any => { return { data: allProducts } })
process.env.COGNITO_URL = 'COGNITO_URL'
process.env.COGNITO_AUTHORIZATION = 'COGNITO_AUTHORIZATION'

describe('search usecase', () => {
  it('should return products', async () => {
    const usecase = new SearchUsecase(new RedisProviderInMemory())
    const response = await usecase.execute({ product: 'product name' })
    expect(response.length).toBe(10)
  })
})
