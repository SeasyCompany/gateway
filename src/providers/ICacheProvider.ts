
import { KeyType, ValueType } from 'ioredis'
export interface ICacheProvider {
  get(name: KeyType): Promise<string | null>;
  set(name: KeyType, data: ValueType, time: number): Promise<void>;
  connect(): Promise<void>;
}
