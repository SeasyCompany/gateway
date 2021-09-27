import { RedisProvider } from '../providers/implementations/RedisProvider'

// @ts-ignore
if (typeof Redis === 'undefined') {
  const Redis = new RedisProvider()
  Redis.connect()
    .then(() => console.log('Redis successfully connected'))
    .catch((err) => console.log(err))
}

// @ts-ignore
export const cache = Redis

export { handler as hello } from './hello'
export { handler as searchproducts } from './Products/search'
