import colorizeJson = require("json-colorizer");
import {
    BadRequest,
    Unauthorized,
    NotFound,
    ServerError
} from './errors';

import {
    FindOneParams,
    FindParams,
    UpdateParams,
    DeleteParams,
    InsertManyParams,
    InsertOneParams,
    ReplaceOneParams,
    AggregateParams
} from './params';

export default class MongoAtlasDataApiSDK {
    apiKey: string;
    apiUrl: string;
    dbCluster: string;
    dbName: string;
    quiet: boolean;

    constructor(apiKey: string, apiUrl: string, dbCluster: string, dbName: string, quiet: boolean) {
        this.apiKey = apiKey;
        this.apiUrl = apiUrl;
        this.dbCluster = dbCluster;
        this.dbName = dbName;
        this.quiet = quiet;
    }

    private async callApi(method, payload): Promise<any> {
        try {
            const res = await fetch(`${this.apiUrl}/action/${method}`, {
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
                }),
            });
            return await res.json();
        } catch (e){
            if(e.code === 400){
                throw new BadRequest(e);
            }
            if(e.code === 401) {
                throw new Unauthorized(e);
            }
            if(e.code === 404) {
                throw new NotFound(e);
            }
            throw new ServerError(e);
        }
    }


    public async findOne ({ collection, filter, projection}: FindOneParams) {
        let { document } = await this.callApi('findOne', { collection, filter, projection });
        this.outputResults({ document });
        return { document };
    }

    public async find ({ collection, filter, projection = {}, sort = {}, limit = 1000, skip = 0 } : FindParams) {
        const { documents } = await this.callApi('find', { collection, filter, projection, sort, limit, skip })
        this.outputResults({ documents })
        return { documents }
    }
    public async insertOne ({ collection, document }: InsertOneParams) {
        const { insertedId } = await this.callApi('insertOne', { collection, document })
        this.outputResults({ insertedId })
        return { insertedId }
    }
    public async insertMany ({ collection, documents }: InsertManyParams) {
        const { insertedIds } = await this.callApi('insertMany', { collection, documents })
        this.outputResults({ insertedIds })
        return { insertedIds }
    }
    public async updateOne ({ collection, filter, update, upsert = false }: UpdateParams) {
        const { matchedCount, modifiedCount, upsertedId } = await this.callApi('updateOne', { collection, filter, update, upsert })
        this.outputResults({ matchedCount, modifiedCount, upsertedId })
        return { matchedCount, modifiedCount, upsertedId }
    }
    public async updateMany ({ collection, filter, update, upsert = false }: UpdateParams) {
        const { matchedCount, modifiedCount, upsertedId } = await this.callApi('updateMany', { collection, filter, update, upsert })
        this.outputResults({ matchedCount, modifiedCount, upsertedId })
        return { matchedCount, modifiedCount, upsertedId }
    }
    public async replaceOne ({ collection, filter, replacement, upsert = false }: ReplaceOneParams) {
        const { matchedCount, modifiedCount, upsertedId } = await this.callApi('replaceOne', { collection, filter, replacement, upsert })
        this.outputResults({ matchedCount, modifiedCount, upsertedId })
        return { matchedCount, modifiedCount, upsertedId }
    }
    public async deleteOne ({ collection, filter }: DeleteParams) {
        const { deletedCount } = await this.callApi('deleteOne', { collection, filter })
        this.outputResults({ deletedCount })
        return { deletedCount }
    }
    public async deleteMany ({ collection, filter }: DeleteParams) {
        const { deletedCount } = await this.callApi('deleteMany', { collection, filter })
        this.outputResults({ deletedCount })
        return { deletedCount }
    }
    public async aggregate ({ collection, pipeline }: AggregateParams) {
        const { documents } = await this.callApi('aggregate', { collection, pipeline })
        this.outputResults({ documents })
        return { documents }
    }
    private outputResults (results: any) {
        if (!this.quiet) {
            console.log(colorizeJson(results, { pretty: true }))
        }
    }
}
