import { IProduct } from '../dtos'

export const mergeProducts = (productsArray: IProduct[][]): IProduct[] => {
  return productsArray.reduce((accumulator, value) => accumulator.concat(value), [])
}
