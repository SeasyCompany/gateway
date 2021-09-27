import axios from 'axios'
import { MeliService } from '../../src/services/MeliService'
import { allProducts } from '../mocks/allProducts'

axios.get = jest.fn((): any => { return { data: allProducts } })

describe('shopee service', () => {
  it('should return shopee products', async () => {
    const data = await MeliService.searchProducts('product', 'token')
    expect(data.length).toBe(5)
  })
})
