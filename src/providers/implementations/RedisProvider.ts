import { client } from '../../config/redis'
import { ICacheProvider } from '../ICacheProvider'
import Redis, { KeyType, ValueType } from 'ioredis'

export class RedisProvider implements ICacheProvider {
  private client: Redis.Redis
  constructor () {
    this.client = client
  }

  async set (name: KeyType, data: ValueType, time: number): Promise<void> {
    if (this.client?.status === 'ready') {
      await this.client.set(name, data, 'EX', time)
    }
  }

  async get (name: KeyType): Promise<string | null> {
    if (this.client?.status === 'ready') {
      return this.client.get(name)
    }
    return null
  }
}
