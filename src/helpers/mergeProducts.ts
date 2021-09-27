import { IProduct } from '../dtos/IProduct'

export const mergeProducts = (productsArray: IProduct[][]): IProduct[] => {
  return productsArray.reduce((accumulator, value) => accumulator.concat(value), [])
}
