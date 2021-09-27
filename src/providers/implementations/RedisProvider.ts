import { ICacheProvider } from '../ICacheProvider'
import Redis, { KeyType, ValueType } from 'ioredis'

export class RedisProvider implements ICacheProvider {
  private redis: Redis.Redis
  constructor () {
    this.redis = new Redis({
      port: parseInt(process.env.REDIS_PORT || '6369'),
      host: process.env.REDIS_HOST,
      password: process.env.REDIS_PASSWORD
    })
  }

  async set (name: KeyType, data: ValueType, time: number): Promise<void> {
    await this.redis.set(name, data, 'EX', time)
  }

  async get (name: KeyType): Promise<string | null> {
    const cacheEntry = await this.redis.get(name)
    return cacheEntry
  }

  async connect (): Promise<void> {
    if (this.redis.status !== 'connecting') {
      await this.redis.connect()
    }
  }
}
