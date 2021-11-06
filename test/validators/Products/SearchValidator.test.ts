import { searchValidator } from '../../../src/validators/Products/SearchValidator'

describe('search validator', () => {
  it('should return an error if product is empty 1', () => {
    try {
      searchValidator({ product: '' })
      expect(true).toEqual(false)
    } catch (error: any) {
      const parsedError = JSON.parse(error.message)
      expect(parsedError.statusCode).toEqual(422)
    }
  })

  it('should return an error if product is empty 2', () => {
    try {
      searchValidator({ product: '      ' })
      expect(true).toEqual(false)
    } catch (error: any) {
      const parsedError = JSON.parse(error.message)
      expect(parsedError.statusCode).toEqual(422)
    }
  })

  it('should return an error if product is null', () => {
    try {
      searchValidator({ product: null })
      expect(true).toEqual(false)
    } catch (error: any) {
      const parsedError = JSON.parse(error.message)
      expect(parsedError.statusCode).toEqual(422)
    }
  })

  it('should return an error if product is undefined', () => {
    try {
      searchValidator({ product: undefined })
      expect(true).toEqual(false)
    } catch (error: any) {
      const parsedError = JSON.parse(error.message)
      expect(parsedError.statusCode).toEqual(422)
    }
  })

  it('should return formatted product', () => {
    const payload = searchValidator({ product: '   product   ' })
    expect(payload.product).toEqual('product')
  })
})
