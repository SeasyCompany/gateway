import { RedisProvider } from '../providers/implementations/RedisProvider'

// @ts-ignore
if (typeof Redis === 'undefined') {
  const Redis = new RedisProvider()
}

// @ts-ignore
export const cache = Redis

export { handler as hello } from './hello'
export { handler as searchproducts } from './Products/search'
