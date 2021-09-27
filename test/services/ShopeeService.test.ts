import axios from 'axios'
import { ShopeeService } from '../../src/services/ShopeeService'
import { allProducts } from '../mocks/allProducts'

axios.get = jest.fn((): any => { return { data: allProducts } })

describe('shopee service', () => {
  it('should return shopee products', async () => {
    const data = await ShopeeService.searchProducts('product', 'token')
    expect(data.length).toBe(5)
  })
})
