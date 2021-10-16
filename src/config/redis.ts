import Redis from 'ioredis'

let logRetry = true
const enableLogRetry = () => {
  setTimeout(() => {
    logRetry = true
  }, 30 * 1000)
}

export const client = new Redis({
  port: parseInt(process.env.REDIS_PORT || ''),
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASSWORD,
  maxRetriesPerRequest: 2
})

client.on('error', (e) => {
  if (logRetry) {
    console.log(e)
    logRetry = false
    enableLogRetry()
  }
})

client.on('ready', () => {
  console.log('Redis connected')
})
