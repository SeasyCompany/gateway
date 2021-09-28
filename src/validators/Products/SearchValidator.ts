import { errorHandler } from '@vmotta8/price-comparison'
import validator from 'validator'

export const searchValidator = (queryStringParameters: any) => {
  const { product } = queryStringParameters

  const validProduct = validator.isAlphanumeric(product || '', 'pt-BR', { ignore: ' ' })
  if (!validProduct) throw errorHandler.generate(2001)
  const product_ = validator.trim(product)

  return {
    product: product_
  }
}
