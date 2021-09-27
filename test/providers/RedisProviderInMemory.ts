import { ICacheProvider } from '../../src/providers/ICacheProvider'

export class RedisProviderInMemory implements ICacheProvider {
  async get (name: any): Promise<any> {
    //
  }

  async set (name: any, data: any, time: any): Promise<void> {
    //
  }

  async connect (): Promise<void> {
    //
  }
}
