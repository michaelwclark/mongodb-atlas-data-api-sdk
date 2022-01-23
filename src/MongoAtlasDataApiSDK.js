import fetch from 'node-fetch'
import colorize from 'json-colorizer'
import {
  BadRequest,
  Unauthorized,
  NotFound,
  ServerError
} from './errors.js'

export default class MongoAtlasDataApiSDK {
  constructor ({
    apiKey,
    apiUrl,
    dbCluster,
    dbName,
    quiet
  }) {
    this.apiKey = apiKey
    this.apiUrl = apiUrl
    this.dbCluster = dbCluster
    this.dbName = dbName
    this.quiet = quiet
  }

  async callApi (method, payload) {
    try {
      const response = await fetch(`${this.apiUrl}/action/${method}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': this.apiKey
        },
        body: JSON.stringify({
          ...payload,
          dataSource: this.dbCluster,
          database: this.dbName
        })
      })
      const jsonBody = await response.json()
      return jsonBody
    } catch (e) {
      if (e.code === 400) {
        throw new BadRequest(e)
      }
      if (e.code === 401) {
        throw new Unauthorized(e)
      }
      if (e.code === 404) {
        throw new NotFound(e)
      }

      throw new ServerError(e)
    }
  }

  async findOne ({ collection, filter, projection = {} }) {
    const { document } = await this.callApi('findOne', { collection, filter, projection })
    this.outputResults({ document })
    return { document }
  }

  async find ({ collection, filter, projection = {}, sort = {}, limit = 1000, skip = 0 }) {
    const { documents } = await this.callApi('find', { collection, filter, projection, sort, limit, skip })
    this.outputResults({ documents })
    return { documents }
  }

  async insertOne ({ collection, document }) {
    const { insertedId } = await this.callApi('insertOne', { collection, document })
    this.outputResults({ insertedId })
    return { insertedId }
  }

  async insertMany ({ collection, documents }) {
    const { insertedIds } = await this.callApi('insertMany', { collection, documents })
    this.outputResults({ insertedIds })
    return { insertedIds }
  }

  async updateOne ({ collection, filter, update, upsert = false }) {
    const { matchedCount, modifiedCount, upsertedId } = await this.callApi('updateOne', { collection, filter, update, upsert })
    this.outputResults({ matchedCount, modifiedCount, upsertedId })
    return { matchedCount, modifiedCount, upsertedId }
  }

  async updateMany ({ collection, filter, update, upsert = false }) {
    const { matchedCount, modifiedCount, upsertedId } = await this.callApi('updateMany', { collection, filter, update, upsert })
    this.outputResults({ matchedCount, modifiedCount, upsertedId })
    return { matchedCount, modifiedCount, upsertedId }
  }

  async replaceOne ({ collection, filter, replacement, upsert = false }) {
    const { matchedCount, modifiedCount, upsertedId } = await this.callApi('replaceOne', { collection, filter, replacement, upsert })
    this.outputResults({ matchedCount, modifiedCount, upsertedId })
    return { matchedCount, modifiedCount, upsertedId }
  }

  async deleteOne ({ collection, filter }) {
    const { deletedCount } = await this.callApi('deleteOne', { collection, filter })
    this.outputResults({ deletedCount })
    return { deletedCount }
  }

  async deleteMany ({ collection, filter }) {
    const { deletedCount } = await this.callApi('deleteMany', { collection, filter })
    this.outputResults({ deletedCount })
    return { deletedCount }
  }

  async aggregate ({ collection, pipeline }) {
    const { documents } = await this.callApi('aggregate', { collection, pipeline })
    this.outputResults({ documents })
    return { documents }
  }

  outputResults (results) {
    if (!this.quiet) {
      console.log(colorize(results, { pretty: true }))
    }
  }
}
