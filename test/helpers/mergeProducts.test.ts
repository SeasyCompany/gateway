import { mergeProducts } from '../../src/helpers/mergeProducts'
import { allProducts } from '../mocks/allProducts'

describe('merge products', () => {
  it('should return a merged array', () => {
    const array = [allProducts, allProducts]
    const mergedArray = mergeProducts(array)
    const properties = Object.keys(mergedArray[0])
    expect(mergedArray.length).toEqual(10)
    expect(properties.length).toEqual(5)
    expect(properties.includes('url')).toEqual(true)
    expect(properties.includes('price')).toEqual(true)
    expect(properties.includes('image')).toEqual(true)
    expect(properties.includes('location')).toEqual(true)
    expect(properties.includes('marketplace')).toEqual(true)
  })
})
