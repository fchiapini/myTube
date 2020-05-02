import * as NodeCache from 'node-cache'

class CacheService {
  constructor(ttlSeconds) {
    this.cache = new NodeCache({
      stdTTL: ttlSeconds,
      checkperiod: ttlSeconds * 0.2,
      useClones: false
    })
  }

  async get(key, promise) {
    const value = this.cache.get(key)
    if (value) {
      return Promise.resolve(value)
    }

    const result = await promise
    this.cache.set(key, result)

    return result
  }

  flush() {
    this.cache.flushAll
  }
}

export default CacheService
